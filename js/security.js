// Security script by luk3yx
// Copyright 2016 by luk3yx.
// All rights reserved

function debug(str) {
    scriptElements = document.getElementsByTagName('script');
    console.log("luk3yx-" + scriptElements[scriptElements.length - 1].getAttribute('src', -1).substring(4).split('.')[0] + " // " + str);
}
var siteurl = "luk3yx.github.io"
var protocol = window.location.protocol;

var redirecturl = "https://" + siteurl + window.location.pathname + window.location.search + window.location.hash


function redirect() {
    window.stop();
    window.location.href = redirecturl;
}
debug("Security loaded on " + siteurl + ". Scanning...");
if (siteurl !== window.location.hostname) {
window.stop();
debug("This site is presumed to be fake, as actual URL is " + window.location.hostname + '.');
redirect();
} else {
if (protocol == "http:") {
    debug("Warning! You are not using a secure protocol. You will now be switched to https.")
    redirect();
} else {
    debug("All clear");
    debug("Loading functions...");
    function loadScript(script) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute("src", "/js/" + script + ".js");
        document.head.appendChild(scriptElement);
    }
    function loadCSS(url) {
        scriptElement = document.createElement('link');
        scriptElement.setAttribute("rel", "stylesheet");
        scriptElement.setAttribute("type", "text/css");
        scriptElement.setAttribute("src", "/css/" + url + ".css");
        document.head.appendChild(scriptElement);
    }
    function cacheImage(url) {
        cachedImage = document.createElement("img");
        cachedImage.style.display = "none";
        cachedImage.setAttribute("src", url);
        document.getElementsByTagName("HTML")[0].insertBefore(cachedImage, document.head);
        delete cachedImage;
    }
    function hideLoadScreen() {
        document.body.style.overflow = 'visible';
        document.getElementById("loadscreen").parentNode.removeChild(document.getElementById("loadscreen"));
    }
    function showLoadScreen() {
        if (document.getElementById('loadscreen') === null) {
            document.body.style.overflow = 'hidden';
            loadScreen = document.createElement("div");
            loadScreen.setAttribute("id", "loadscreen");
            document.getElementsByTagName("HTML")[0].insertBefore(loadScreen, document.head);
            loadScreenWrapper = document.createElement("h1");
            loadScreenWrapper2 = document.createElement("center");
            loadScreenImg = document.createElement("img");
            loadScreenImg.setAttribute("alt", "Loading...");
            loadScreenImg.setAttribute("src", "/images/loadscreen.gif");
            loadScreen.appendChild(loadScreenWrapper);
            loadScreenWrapper.appendChild(loadScreenWrapper2);
            loadScreenWrapper2.appendChild(loadScreenImg);
            // Remove temp variables
            delete loadScreen;
            delete loadScreenWrapper;
            delete loadScreenWrapper2;
            delete loadScreenImg;
        }
    }
    
    /*window.onload = function() {
        
        unloadScreenElements = document.getElementsByTagName('a');
        for (unloadScreenC=0; unloadScreenC<unloadScreenElements.length; unloadScreenC++) {
            if (unloadScreenElements[unloadScreenC].getAttribute("target") === null || unloadScreenElements[unloadScreenC].getAttribute("target") == "_self") {
                unloadScreenElements[unloadScreenC].onclick = showLoadScreen;
            }
        }
        unloadScreenElements = document.getElementsByTagName('*');
        for (unloadScreenC=0; unloadScreenC<unloadScreenElements.length; unloadScreenC++) {
            if (unloadScreenElements[unloadScreenC].getAttribute("id") === null) {
                if (unloadScreenElements[unloadScreenC].getAttribute("class") === null) {
                    unloadScreenElements[unloadScreenC].setAttribute("id", "n" + unloadScreenC);
                } else {
                    unloadScreenElements[unloadScreenC].setAttribute("id", "n" + unloadScreenC);
                }
            }
        }
        debug("There are " + unloadScreenC + " elements on this page.");
        delete unloadScreenC;
        delete unloadScreenElements;
    };*/
    
    //loadScript("contextmenu");
    var urlOpts = window.location.search;
    if (window.location.pathname.substring(0, 11) == "/js/handler") {
        debug("Loading JavaScript Handler...");
        loadScript('handler');
    } else if (window.location.pathname.substring(0, 12) == "/jstranslate" && window.location.pathname.substring(0, 17) != "/jstranslate.html") {
        debug("Redirecting...");
        window.stop();
        window.location.href = "/js/handler?type=translate&translate=" + encodeURIComponent(window.location.hash.substring(1)) + "&oldlink=" + encodeURIComponent(document.referrer);
    } else if (window.location.pathname.substring(0, 3) == "/js" && window.location.pathname.substring(0, 4) != "/jst") {
        debug("Loading JavaScript Guess-Handler...");
        window.history.replaceState({}, "luk3yx's website", "/js/handler?type=guess&content=" + window.location.hash);
        loadScript('guess-landing');
    } else if (window.location.pathname.substring(0, 9) == "/mtn.html") {
        debug("URL modified for security reasons.");
        window.history.replaceState({}, "luk3yx's website", "/");
    } else if (window.location.pathname.substring(0, 5) == "/xmas") {
        debug("Redirecting...");
        window.stop();
        window.location.href = "/js/handler?type=xmascard&" + window.location.search.substring(1);
    } else if (window.location.pathname.substring(0, 4) == "/swf" || window.location.pathname == "/O6tS3zZ.html" || window.location.pathname == "/iso/more.html") {
        window.stop();
        window.location.href = "/403.html";
    } /*else if (window.location.pathname.substring(0, 11) == "/login.html") {
        debug("Redirecting...");
        window.stop();
        window.location.href = "/js/handler?type=approve&content=" + encodeURIComponent(window.location.hash.substring(1));
    }*/
    
    /*function hashChange() {
        if (window.location.pathname.substring(0, 13) == "/privacy.html") {
            debug("URL modified to look nicer.");
            window.history.replaceState({}, "luk3yx's website", "/" + window.location.hash.substring(1) + ".html" + window.location.hash);
                window.onload = function() {
                document.getElementById("title").innerHTML = window.location.hash.substring(1, 2).toUpperCase() + window.location.hash.substring(2) + " - luk3yx's website";
            }
        } else if (window.location.pathname == "/error.html") {
            if (window.location.hash.substring(0, 2) == "#4") {
                debug("URL modified due to bug.");
                window.location.hash = "#e" + window.location.hash.substring(1);
            } else if (window.location.hash.substring(0, 2) == "#a") {
                debug("URL modified due to bug.");
                window.location.hash = "#e" + window.location.hash.substring(2);
            }
            hideLoadScreen();
        }
    }
    window.onhashchange = function() {
        hashChange();
    }
    hashChange();*/
    function loadHandler(params) {
        showHandlerPage();
        window.history.replaceState({}, "luk3yx's website", "/js/handler?" + params);
        loadScript("handler");
    }
    function showHandlerPage() {
        showLoadScreen();
        document.getElementsByClassName("content")[0].innerHTML = atob("PGgxIGlkPSJkZXNjcmlwdGlvbiI+UHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuLi48L2gxPgo8aW1nIHNyYz0iL2ltYWdlcy9sb2FkLmdpZiIgaWQ9ImxvYWRlciIgd2lkdGg9IjEwMCUiIGFsdD0iICIgLz4KPGgyIGlkPSJpbnN0cnVjdGlvbnMiPlBsZWFzZSBiZSBwYXRpZW50LjwvaDI+Cg==");
    }
    function login(page) {
        showHandlerPage();
        window.history.replaceState({}, "luk3yx's website", "/" + page);
        loadScript("login");
    }
    
    debug("Done! luk3yx-security is now exiting.");
}
}
