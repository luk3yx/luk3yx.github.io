// Copyright 2016 by luk3yx.
// All rights reserved.
document.body.setAttribute("oncontextmenu", "return false;");
document.addEventListener("contextmenu", rightClick, false);
function rightClick(e) {
    pointerX = e.pageX;
    pointerY = e.pageY;
    createContextMenu();
    return false;
}

function createContextMenu() {
    if (!document.getElementById("contextMenu")) {
    var contextdiv = document.createElement('div');
    document.body.appendChild(contextdiv);
    contextdiv.innerHTML = "<iframe id='contextMenu' src='/js/handler/contextmenu.html' style='position: absolute; top: 10px; right: 10px; width: 200px; height: 300px; z-index: 100;' onclick='return true;' />";
    }
    var contextMenu = document.getElementById("contextMenu");
    contextMenu.style.left = pointerX + "px";
    contextMenu.style.top = pointerY + "px";
    contextMenu.style.display = "block";
    document.getElementsByTagName("BODY")[0].onclick = deleteContextMenu;
    return false;
}

function deleteContextMenu() {
    document.getElementsByTagName("BODY")[0].onclick = function () {return true; };
//    document.getElementById("contextMenu").parentElement.removeChild(document.getElementById("contextMenu"));
    document.getElementById("contextMenu").style.display = "none";
}

hideLoadScreen();
