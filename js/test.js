// Copyright 2016 by luk3yx.
// All rights reserved.


cacheImage("/images/birthday3.jpg");
window.onload = function() {
    document.getElementById("description").innerHTML = "Loading screen hidden!";
    document.getElementById("instructions").innerHTML = "Please go to the main page.";
    setTimeout(function() {document.getElementById("loader").setAttribute("src", "/images/birthday3.jpg"); document.getElementById("description").innerHTML = "Here's a cached image:"; }, 3000)
    hideLoadScreen();
}
