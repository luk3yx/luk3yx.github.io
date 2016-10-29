// Copyright 2016 by luk3yx.
// All rights reserved.
referrer = getParam.referrer;

if (referrer == "HTTP") {
    framereferrer = document.referrer.split("=");
    referrer = framereferrer[framereferrer.length-1];
}
referrerArray=referrer.split("/")
count=5 // 3 for http:// and 2 for /sites/sitename
redirectURL="/"
while (count < referrerArray.length-1) {
    redirectURL = redirectURL + referrerArray[count] + "/";
    count=count+1
}
redirectURL = redirectURL + referrerArray[count];
if (redirectURL == "/xhands") {
    redirectURL = "/xhands.html";
}
if (redirectURL == "/luk3yx") {
    redirectURL = "/";
}
window.location.href = redirectURL;
