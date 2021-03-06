--
-- fs51: Consistent co-ordinate system backport
--
-- The MIT License (MIT)
--
-- Copyright © 2019 by luk3yx.
--
-- Permission is hereby granted, free of charge, to any person obtaining a copy
-- of this software and associated documentation files (the "Software"), to
-- deal in the Software without restriction, including without limitation the
-- rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
-- sell copies of the Software, and to permit persons to whom the Software is
-- furnished to do so, subject to the following conditions:
--
-- The above copyright notice and this permission notice shall be included in
-- all copies or substantial portions of the Software.
--
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
-- FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
-- IN THE SOFTWARE.
--

-- Allow easier mod renames
local mod = {}

-- formspec_to_tables
-- Input: size[5,2]button[0,0;5,1;name;Label] image[0,1;1,1;air.png]
-- Output: {{'size', '5', '2'}, {'button', '0,0', '5,1', 'name', 'label'},
--             {'image', '0,1', '1,1', 'air.png'}}
local function formspec_to_tables(spec)
    local res = {}
    while spec do
        -- Get the first element
        local name
        name, spec = spec:match('([%w_%-]*[^%s\\])%s*(%[.*)')
        if not name or not spec then return res end
        local elem = {}
        elem[1] = name

        -- Get the parameters
        local s, e = spec:find('[^\\]%]')
        local rawargs
        if s and e then
            rawargs, spec = spec:sub(2, s), spec:sub(e + 1)
        else
            rawargs, spec = spec:sub(2), false
        end

        -- Split everything
        -- TODO: Make this a RegEx
        local i = ''
        local esc = false
        for c = 1, #rawargs do
            local char = rawargs:sub(c, c)
            if esc then
                esc = false
            else
                if char == '\\' then
                    esc = true
                elseif char == ';' then
                    table.insert(elem, i)
                    char, i = '', ''
                end
            end

            i = i .. char
        end
        if i ~= '' or #elem > 1 then
            table.insert(elem, i)
        end

        table.insert(res, elem)
    end

    return res
end

-- Copy formspec objects
local function clean_fstable(data)
    local res = {}
    for id, elem in ipairs(data) do
        local elem2 = {}
        for k, v in ipairs(elem) do
            elem2[k] = tostring(v)
        end
        res[id] = elem2
    end
    return res
end

-- tables_to_formspec
-- The reverse of formspec_to_tables.
local function tables_to_formspec(data, nocopy)
    if not nocopy then data = clean_fstable(data) end
    local res = ''
    for _, elem in ipairs(data) do
        if elem[1] then
            res = res .. table.remove(elem, 1) .. '[' ..
                table.concat(elem, ';') .. ']'
        end
    end
    return res
end

-- Actually "transpiling" the formspec

-- Random offsets
local random_offsets = {
    -- box = {{0, 0}, {0.2, 0.125}},
    label = {{0, 0.3}},
    field = {{-0.3, -0.33}, {-0.2, 0}},
    pwdfield = {{-0.3, -0.33}, {-0.2, 0}},
    textarea = {{-0.3, -0.33}, {-0.2, 0}},
    dropdown = {{0, 0}, {-0.15, 0}},
}

local padding, spacing = 3/8, 5/4

-- Other elements to apply
local elems = {}
do
    for _, elem in ipairs({'tooltip', 'image', 'background', 'pwdfield',
            'tabheader', 'scrollbar', 'table', 'checkbox', 'position',
            'anchor', 'container', 'vertlabel', 'item_image'}) do
        elems[elem] = true
    end
    for elem, offsets in pairs(random_offsets) do elems[elem] = true end
    for _, elem in ipairs({'textlist', 'scrollbar', 'table',
            'dropdown', 'field', 'pwdfield', 'textarea', 'box'}) do
        elems[elem] = 2
    end
    for _, elem in ipairs({'button', 'button_exit', 'image_button',
            'image_button_exit', 'item_image_button'}) do
        elems[elem] = 3
    end
end

-- Fix individual number

local function tostring_round(num)
    if type(num) == 'number' and num == num then
        num = math.floor((num * 100) + 0.5) / 100
    end
    return tostring(num)
end

local function get_coords(f, num, ...)
    local n = tonumber(num)
    if n and n == n then
        return tostring_round(f(n, '', ...))
    end

    local x, y = num:match('^%s*([0-9%.]+)%s*,%s*([0-9%.]+)%s*$')
    if x and y then
        local xn, yn = tonumber(x), tonumber(y)
        if xn and xn == xn then
            x = tostring_round(f(xn, 'x', ...))
        end
        if yn and yn == yn then
            y = tostring_round(f(yn, 'y', ...))
        end
        return x .. ',' .. y
    end
    return num
end

local function fix_pos(num, dir)
    if type(num) == 'string' then return get_coords(fix_pos, num) end
    if dir == 'y' then
        return (num - padding) / (spacing - 0.0965)
    end
    return ((num - padding) / spacing) -- - 1
end

local function fix_size(num, dir, t)
    if type(num) == 'string' then return get_coords(fix_size, num, dir) end
    print(num, dir, t)
    if t == 3 then
        return num * 0.8 + 0.205 --+ (dir == 'y' and 0.03 or 0)
    end

    if dir == 'y' then
        return num / (spacing - 0.0975)
    end
    return num / spacing
end

local function add_offsets(num, dir, offsets)
    if not offsets then
        return get_coords(add_offsets, num, dir)
    end
    if dir == 'y' then
        return num - offsets[2]
    end
    return num - offsets[1]
end

-- Compensate for padding
function mod.fix_formspec(spec)
    -- Sanity check
    if type(spec) ~= 'string' or not spec:find('real_coordinates%[true%]') then
        return spec
    end
    spec = formspec_to_tables(spec)

    for _, elem in ipairs(spec) do

        -- Hack to get buttons with custom heights
        if (elem[1] == 'button' or elem[1] == 'button_exit') and #elem == 5 then
            elem[1] = 'image_' .. elem[1]
            table.insert(elem, 4, '')
        end

        if elem[1] == 'real_coordinates' then
            elem[1] = false
        end

        local data = elems[elem[1]]
        if elem[1] == 'size' and elem[2] then
            elem[2] = get_coords(function(num, dir)
                local res = fix_size(num, dir) - padding * 2
                if dir ~= 'y' then res = res + 0.36 end
                return res
            end, elem[2])
        elseif data and elem[2] then
            elem[2] = fix_pos(elem[2])
            if elem[3] and type(data) == 'number' then
                elem[3] = fix_size(elem[3], data)
            end
        elseif elem[1] == 'list' and elem[4] then
            elem[4] = fix_pos(elem[4])
        end

        if random_offsets[elem[1]] then
            local offsets = random_offsets[elem[1]]
            for id, offset in ipairs(offsets) do
                id = id + 1
                if elem[id] then
                    elem[id] = add_offsets(elem[id], offset)
                end
            end
        end
    end

    return tables_to_formspec(spec, true)
end

-- Testing
mod.fs = 'size[5,5]real_coordinates[true]image[0,0;2,2;air.png] ' ..
    'image[0,2;1,1;air.png]image[1,2;1,1;air.png]image[2,0;1,1;air.png]' ..
    ' image[2,1;1,1;air.png]dropdown[2,2;1,1;test;yay,test;1]button[3,4;1,1;test;Yay]' ..
    ' box [0,3;1,1;#eeeeee]image[1,3;1,1;air.png]image[4,4;1,1;air.png]' ..
    'image [2,3;1,1;air.png]  image [3,2;2,2;air.png]'

if minetest then
    -- Override minetest.show_formspec for Minetest
    local show_formspec = minetest.show_formspec
    function minetest.show_formspec(pn, fn, formspec, ...)
        return show_formspec(pn, fn, mod.fix_formspec(formspec), ...)
    end
    _G[minetest.get_current_modname()] = mod
else
    local fengari, js = pcall(require, 'js')
    mod._formspec_to_tables = formspec_to_tables
    mod._tables_to_formspec = tables_to_formspec
    fs51 = mod
    if fengari then
        -- Make all the functions easily callable in JavaScript.
        local fsjs = js.new(js.global.Object)
        for k, v in pairs(mod) do
            k = tostring(k)
            if type(v) == 'function' then
                fsjs[k] = function(param1, ...)
                    if param1 == fsjs then
                        return v(...)
                    else
                        return v(param1, ...)
                    end
                end
            else
                fsjs[k] = v
            end
        end
        js.global.fs51 = fsjs
    else
        -- Just convert the testing formspec and print it
        fs51 = mod
        mod.fs2 = mod.fix_formspec(mod.fs)
        print('fs:  ' .. mod.fs)
        print('fs2: ' .. mod.fs2)
    end
end
