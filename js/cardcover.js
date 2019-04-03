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
css = `<style type="text/css">
@import url(https://fonts.googleapis.com/css?family=Ubuntu);
* {
    color: black;
    text-shadow: #000000 0 0 4px;
    font-family:'Ubuntu','Roboto','Segoe UI','Arial','sans-serif' !important;
    z-index: 5;
}
#backimg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1 !important;
}
.content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 4 !important;
    margin: 5px;
}
#title {
    text-align: left;
    position: fixed;
    left: 10%;
    top: 50px;
    font-size: 50px;
}
#from {
    text-align: right;
    position: fixed;
    right: 15%;
    bottom: 20%;
    font-size: 36px;
}
body {
    overflow: hidden !important;
}
</style>
`;
docstart = atob("PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIj4KPGhlYWQ+CjxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgCiAgICAgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIC8+Cjx0aXRsZT4K");
content = docstart + title + "</title>" + css + morecss + "</head><body>" + imgtag + "<div class='content'>" + br + br + "<h1 id='title'>" + title + '</h1>' + br + br + '<h1 id="from">' + from + "</h1></div></body></html>";

if (dataURL == "no") {
    window.addEventListener('load', function() {
        document.open();
        document.write(content);
        hideLoadScreen();
        document.body.overflow = 'hidden';
        document.close();
    });
} else {
    doc = btoa(content);
    url = "data:text/html;base64," + doc;
    window.location.href = url;
}
