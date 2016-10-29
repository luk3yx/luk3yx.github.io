// Copyright 2016 by luk3yx.
// All rights reserved.
debug("Guess script loaded. Guessing...");
var oldLink = decodeURIComponent(getParam.oldlink);

// The below function is NOT copyrighted
function getDomainName(link) {
    if (link.indexOf("://") > -1) {
        // Get rid of the http:// if existent, the pathname, and the port.
        return link.split('/')[2].split(':')[0];
    } else {
        // If the http:// is not existent, just get rid of the pathname and port
        return link.split('/')[0].split(':')[0];
    }
}
// The above function is NOT copyrighted

var oldDomain = getDomainName(oldLink);
type = '';
if (oldDomain == "youtube.com") {
    type = 'youtube-cinema';
}
if (oldLink == "cookies-accept") {
    type = 'cookies-accept';
}

if (type == "") {
    if (oldLink == "") {
        type = 'jsinfo';
    } else {
        type = 'translate';
    }
}
debug("Type guessed. The type is " + type);
debug("Loading " + type + ".js...");
loadScript(type);
