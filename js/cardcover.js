// Copyright 2016 by luk3yx.
// All rights reserved.

to = getParam.to;
if (to == '') {
    to = undefined;
}
from = getParam.from;
if (from == '') {
    from = undefined;
}
img = getParam.img;
if (img == '') {
    img = undefined;
}
if (img == 'URL') {
    img = undefined;
}
imgurl = getParam.imgurl;
if (imgurl == '') {
    imgurl = undefined;
}
colour = getParam.colour;
if (colour == '') {
    colour = undefined;
}
dataURL = getParam.dataURL;
title = "Hello.";
if (typeof to !== 'undefined') {
    title = to.replace(/\+/g, '\ ');
}
if (typeof from !== 'undefined') {
    from = from.replace(/\+/g, '\ ');
}
if (typeof from == 'undefined') {
    from = "....................";
}
if (typeof img !== 'undefined') {
    url = "https://" + window.location.hostname;
    if (img.substr(0, 8) == "birthday"
            || img.substr(0, 4) == "xmas"
            || img.substr(0, 4) == "back") {
        imgurl = url + "/images/" + img + ".jpg";
    } else if (img.substr(0, 8) == "https://") {
        imgurl = img;
    } else {
        imgurl = url + "/images/xmas" + img + ".jpg";
    }
}

if (typeof imgurl !== 'undefined') {
    imgtag = "<img id='backimg' src='" + imgurl + "' alt=''></img>"
}
if (typeof imgurl == 'undefined') {
    imgtag = ""
}
morecss = ''
if (typeof colour !== 'undefined') {
    morecss = '<style type="text/css" id="txtcolour">* { color: ' + colour + ' !important; }</style>'
}

br = atob("PGJyLz4K");
footer = "";
css = '<style type="text/css">' + atob("QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dSk7CiogewogICAgY29sb3I6IGJsYWNrOwogICAgdGV4dC1zaGFkb3c6ICNGRkZGRkYgMCAwIDRweDsKICAgIGZvbnQtZmFtaWx5OidVYnVudHUnLCdSb2JvdG8nLCdTZWdvZSBVSScsJ0FyaWFsJywnc2Fucy1zZXJpZicgIWltcG9ydGFudDsKICAgIHotaW5kZXg6IDU7Cn0KI2JhY2tpbWcgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDEwMCU7CiAgICBwb3NpdGlvbjogZml4ZWQ7CiAgICB0b3A6IDA7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgcmlnaHQ6IDA7CiAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7Cn0KLmNvbnRlbnQgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDEwMCU7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDA7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgcmlnaHQ6IDA7CiAgICB6LWluZGV4OiA0ICFpbXBvcnRhbnQ7CiAgICBtYXJnaW46IDVweDsKfQojdGl0bGUgewogICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIGxlZnQ6IDEwJTsKICAgIHRvcDogNTBweDsKICAgIGZvbnQtc2l6ZTogNTBweDsKfQojZnJvbSB7CiAgICB0ZXh0LWFsaWduOiByaWdodDsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIHJpZ2h0OiAxNSU7CiAgICBib3R0b206IDIwJTsKICAgIGZvbnQtc2l6ZTogMzZweDsKfQpib2R5IHsKICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsKfQo=") + "</style>";
docstart = atob("PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIj4KPGhlYWQ+CjxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgCiAgICAgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIC8+Cjx0aXRsZT4K");
content = docstart + title + "</title>" + css + morecss + "</head><body>" + imgtag + "<div class='content'>" + br + br + "<h1 id='title'>" + title + '</h1>' + br + br + '<h1 id="from">' + from + "</h1></div></body></html>";

if (dataURL == "no") {
    window.addEventListener(function() {
        document.write(content);
        hideLoadScreen();
        document.body.overflow = 'hidden';
    });
} else {
    doc = btoa(content);
    url = "data:text/html;base64," + doc;
    window.location.href = url;
}
