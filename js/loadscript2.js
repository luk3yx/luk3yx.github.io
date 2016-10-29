// Copyright 2016 by luk3yx.
// All rights reserved.
function loadScript(script) {
    scriptElement = document.createElement('script');
    scriptElement.setAttribute("src", "/js/" + script + ".js");
    document.head.appendChild(scriptElement);
}
