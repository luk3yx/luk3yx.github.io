// Copyright 2016 by luk3yx. All rights reserved.
var str = "Welcome to luk3yx's Website! We now have a YouTube Cinema Button! It only shows the video on the webpage, but dosen't put the video into fullscreen.";
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
    document.getElementById("title").innerHTML = string.substring(count, altcount); 
    count=count+1;
    if (altcount >= size) {
    count=0;
    }
    setTimeout(nextTick, delay);
}
window.onload = startTicking;
