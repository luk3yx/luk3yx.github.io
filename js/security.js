// Security script by luk3yx
// Copyright 2016 by luk3yx.
// All rights reserved

function debug(str) {
    scriptElements = document.getElementsByTagName('script');
    console.log("luk3yx-" + scriptElements[scriptElements.length - 1].getAttribute('src', -1).substring(4).split('.')[0] + " // " + str);
}
var siteurl = "luk3yx.github.io";
var protocol = window.location.protocol;

var redirecturl = "https://" + siteurl + window.location.pathname + window.location.search + window.location.hash


function redirect() {
    window.stop();
    window.location.href = redirecturl;
}
debug("Security loaded on " + siteurl + ". Scanning...");
if (siteurl !== window.location.hostname && "translate.google.com" !== window.location.hostname && "translate.googleusercontent.com" !== window.location.hostname)  {
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
    if (window.location.hostname == siteurl) {
        window.onload = function() {
            translateButton = document.createElement("div");
            translateButton.setAttribute("style", "position: fixed; right: 0; top: 0;");
            document.getElementsByClassName("title")[0].appendChild(translateButton);
            translateButton.innerHTML = "<a href='javascript:translate()'><img src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMi44NyAxNS4wN2wtMi41NC0yLjUxLjAzLS4wM2MxLjc0LTEuOTQgMi45OC00LjE3IDMuNzEtNi41M0gxN1Y0aC03VjJIOHYySDF2MS45OWgxMS4xN0MxMS41IDcuOTIgMTAuNDQgOS43NSA5IDExLjM1IDguMDcgMTAuMzIgNy4zIDkuMTkgNi42OSA4aC0yYy43MyAxLjYzIDEuNzMgMy4xNyAyLjk4IDQuNTZsLTUuMDkgNS4wMkw0IDE5bDUtNSAzLjExIDMuMTEuNzYtMi4wNHpNMTguNSAxMGgtMkwxMiAyMmgybDEuMTItM2g0Ljc1TDIxIDIyaDJsLTQuNS0xMnptLTIuNjIgN2wxLjYyLTQuMzNMMTkuMTIgMTdoLTMuMjR6Ii8+Cjwvc3ZnPgo=' alt='Translate this page' /></a>";
            delete translateButton;
        }
    }
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
    }
    function translate() {
        window.location.href = "https://translate.google.com/translate?sl=en&u=" + window.location.href;
    }
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
