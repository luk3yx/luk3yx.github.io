// Copyright 2016 by luk3yx.
// All rights reserved.


window.onload = function() {
    document.getElementById("description").innerHTML = "JavaScript Handler Page.";
    loader = document.getElementById("loader");
    loader.parentNode.removeChild(loader);
    delete loader;
    document.getElementById("instructions").innerHTML = "This page processes requests sent to services, and the 'Translate', 'YouTube&reg; Cinema', etc. bookmarklets.<br/\>This page has not been sent any data, so this message was shown instead.";
    hideLoadScreen();
}
