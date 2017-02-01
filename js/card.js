// Copyright 2017 by luk3yx.
// All rights reserved.

card = getParam.card;

// Function to support legacy options
switch (getParam.type) {
    case "card":
        break;
    case "xmascard":
        card = "Christmas";
        break;
    case "birthdaycard":
        card = "birthday";
        break;
}
// End of the legacy section

if (typeof card == 'undefined') {
    card = '';
}
card = card.toLowerCase();
switch (card) {
    case "xmas":
    case "christmas":
        greeting = "Merry Christmas";
        dfmsg = atob("SmluZ2xlIGJlbGxzLCBqaW5nbGUgYmVsbHMsPGJyLz5KaW5nbGUgYWxsIHRoZSB3YXkuPGJyLz5PaCB3aGF0IGZ1biBpdCBpcyB0byByaWRlLDxici8+SW4gYSBvbmUtaG9yc2Ugb3BlbiBzbGVpZ2ghCg==");
        break;
    case "birthday":
        greeting = "Happy Birthday";
        break;
    case "fathersday":
        greeting = "Happy Fathers Day";
        break;
    case "mothersday":
        greeting = "Happy Mothers Day";
        break;
    default:
        greeting = "April Fools";
        dfmsg = "I have no idea what card<br/\>I am supposed to make.";
        break;
}

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
if (typeof dfmsg == 'undefined') {
dfmsg = greeting + ", and <br/\>best wishes for the future.";
}
if (typeof from !== 'undefined') {
from = from.replace(/\+/g, '\ ');
}
title = greeting + "!";
if (typeof to !== 'undefined') {
to = to.replace(/\+/g, '\ ');
title = greeting + " " + to + '!';
}
if (typeof from !== 'undefined') {
from = from.replace(/\+/g, '\ ');
} else {
from = "....................";
}
if (typeof msg !== 'undefined') {
msg = msg.replace(/\r/g, '<br/\>');
msg = msg.replace(/\+/g, ' ');
} else {
msg = dfmsg;
}
if (typeof img !== 'undefined') {
url = "https://" + siteurl;
// More code to support legacy options
switch (img) {
    case "1": // The older format had '1-6',
    case "2": // not xmas[n] and birthday[n].
    case "3": // This is because there only
    case "4": // used to be a Christmas
    case "5": // card generator.
    case "6":
        imgurl = url + "/images/xmas" + img + ".jpg";
        break;
    default:
        imgurl = url + "/images/" + img + ".jpg";
        break;
}
// End of legacy stuff
}

if (typeof imgurl !== 'undefined') {
imgtag = "<img id='backimg' src='" + imgurl + "' alt=''></img>"
} else {
imgtag = ""
}
morecss = ''
if (typeof colour !== 'undefined') {
morecss = '<style type="text/css" id="txtcolour">* { color: ' + colour + ' !important; }</style>'
}

br = "<br/\>";
footer = "";
css = '<style type="text/css">' + atob("QGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vdW50YWlucytvZitDaHJpc3RtYXMpOwoqIHsKICAgIGNvbG9yOiBibGFjazsKICAgIHRleHQtc2hhZG93OiAjRkZGRkZGIDAgMCA0cHg7CiAgICBmb250LWZhbWlseTonTW91bnRhaW5zIG9mIENocmlzdG1hcycsJ1VidW50dScsJ1NlZ29lIFVJJywnQXJpYWwnLCdzYW5zLXNlcmlmJyAhaW1wb3J0YW50OwogICAgei1pbmRleDogNTsKfQojYmFja2ltZyB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIHBvc2l0aW9uOiBmaXhlZDsKICAgIHRvcDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7CiAgICByaWdodDogMDsKICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDsKfQouY29udGVudCB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7CiAgICByaWdodDogMDsKICAgIHotaW5kZXg6IDQgIWltcG9ydGFudDsKfQo=") + "</style>";
docstart = atob("PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIj4KPGhlYWQ+CjxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgCiAgICAgICAgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIC8+Cjx0aXRsZT4K");
content = docstart + title + "</title>" + css + morecss + "</head><body>" + imgtag + "<center class='content'>" + br + br + "<h1>" + title + '</h1>' + br + '<h2>' + msg + '</h2>' + br + '<h1>' + "From " + from + "</h1></center></body></html>";
document.open();
document.write(content);
document.close();
