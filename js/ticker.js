// Copyright 2016 by luk3yx. All rights reserved.
var str = "Welcome to luk3yx's Website! This ticker script is now obsolete, but still fun to watch.";
var chars=20;
var delay=90; //ms
var seperator=" .oOo. "



var string = str + seperator + str.substring(0, chars);
var size = string.length;
function startTicking() {
    count=0;
    nextTick();
}

function nextTick() {
    altcount=count+chars;
    document.title = string.substring(count, altcount); 
    count=count+1;
    if (altcount >= size) {
    count=0;
    }
    setTimeout(nextTick, delay);
}
window.onload = startTicking;
