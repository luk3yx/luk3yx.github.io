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
        msg = getParam.msg;
        if (msg == '') {
        msg = undefined;
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
        title = "Merry Christmas!";
        if (typeof to !== 'undefined') {
        to = to.replace(/\+/g, '\ ');
        title = "Merry Christmas " + to + '!';
        }
        if (typeof from !== 'undefined') {
        from = from.replace(/\+/g, '\ ');
        }
        if (typeof from == 'undefined') {
        from = "....................";
        }
        if (typeof msg !== 'undefined') {
        msg = msg.replace(/\r/g, '<br/\>');
        msg = msg.replace(/\+/g, ' ');
        }
        if (typeof msg == 'undefined') {
        msg = atob("SmluZ2xlIGJlbGxzLCBqaW5nbGUgYmVsbHMsPGJyLz5KaW5nbGUgYWxsIHRoZSB3YXkuPGJyLz5PaCB3aGF0IGZ1biBpdCBpcyB0byByaWRlLDxici8+SW4gYSBvbmUtaG9yc2Ugb3BlbiBzbGVpZ2ghCg==");
        }
        if (typeof img !== 'undefined') {
        url = "https://" + window.location.hostname;
        if (img.substring(0, 8) == "birthday") {
            imgurl = url + "/images/" + img + ".jpg";
        } else if (img.substring(0, 4) == "xmas") {
            imgurl = url + "/images/" + img + ".jpg";
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
        css = '<style type="text/css">' + atob("QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vdW50YWlucytvZitDaHJpc3RtYXMpOwoqIHsKICAgIGNvbG9yOiBibGFjazsKICAgIHRleHQtc2hhZG93OiAjRkZGRkZGIDAgMCA0cHg7CiAgICBmb250LWZhbWlseTonTW91bnRhaW5zIG9mIENocmlzdG1hcycsJ1VidW50dScsJ1NlZ29lIFVJJywnQXJpYWwnLCdzYW5zLXNlcmlmJyAhaW1wb3J0YW50OwogICAgei1pbmRleDogNTsKfQojYmFja2ltZyB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIHRvcDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7CiAgICByaWdodDogMDsKICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDsKfQouY29udGVudCB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7CiAgICByaWdodDogMDsKICAgIHotaW5kZXg6IDQgIWltcG9ydGFudDsKfQo=") + "</style>";
        docstart = atob("PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIj4KPGhlYWQ+CjxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgCiAgICAgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIC8+Cjx0aXRsZT4K");
        content = docstart + title + "</title>" + css + morecss + "</head><body>" + imgtag + "<center class='content'>" + br + br + "<h1>" + title + '</h1>' + br + '<h2>' + msg + '</h2>' + br + '<h1>' + "From " + from + "</h1></center></body></html>";
        doc = btoa(content);
        url = "data:text/html;base64," + doc;
        window.location.href = url;
