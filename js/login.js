// Copyright 2016 by luk3yx.
// All rights reserved.


function loginClick() {
    resetItems();
    showLoadScreen();
    //document.getElementById("description").innerHTML = "Requesting password...";
    //document.getElementById("instructions").innerHTML = "Please enter your password in the pop-up window.";
    delete popUp;
    popUp = window.open("/403.html", 'popUp', "menubar=no,resizable=no,scrollbars=yes,width=400,height=500");
    //popUp.document.write("");
    if (window.focus) {
        popUp.focus();
    }
    //popUp.document.write(atob("PCFET0NUWVBFIGh0bWwgUFVCTElDICItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZCI+CjxodG1sIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIj4KCjwhLS0KQ29weXJpZ2h0IDIwMTYgYnkgbHVrM3l4LgpBbGwgcmlnaHRzIHJlc2VydmVkLgotLT4KCjxoZWFkPgogICAgPHRpdGxlIGlkPSJ0aXRsZSI+RW50ZXIgeW91ciBwYXNzd29yZCB0byBjb250aW51ZTwvdGl0bGU+Cgk8bWV0YSBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiIAoJCWNvbnRlbnQ9InRleHQvaHRtbDtjaGFyc2V0PXV0Zi04IiAvPgoJPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPTM1MCIgLz4KICAgIDxzdHlsZT4KICAgICAgICAqIHsKICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdVYnVudHUnLCdTZWdvZSBVSScsJ0FyaWFsJywnc2Fucy1zZXJpZic7CiAgICAgICAgICAgIGNvbG9yOiBibGFjazsKICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIH0KICAgICAgICAqOm5vdChidXR0b24pOm5vdChpbnB1dCkgewogICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7CiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OwogICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PjxkaXYgY2xhc3M9ImNvbnRlbnQiPgogICAgICAgIDxoMT5QbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZCBiZWxvdzo8L2gxPgogICAgICAgIDxmb3JtPgogICAgICAgIDxpbnB1dCB0eXBlPSJwYXNzd29yZCIgbGVuZ3RoPSIxNSIgaWQ9InBhc3N3b3JkIiAvPgogICAgICAgIDxpbnB1dCB0eXBlPSJzdWJtaXQiIG9uY2xpY2s9IndpbmRvdy5vcGVuZXIubG9naW4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWUpIiBuYW1lPSJidG4iIHZhbHVlPSJMb2cgSW4iIC8+CiAgICAgICAgPC9mb3JtPgogICAgICAgIDxici8+CiAgICAgICAgPGJyLz4KICAgICAgICA8YnV0dG9uIG9uY2xpY2s9IndpbmRvdy5vcGVuZXIuZ29CYWNrKCkiPkNhbmNlbDwvYnV0dG9uPgogICAgPC9kaXY+CjwvYm9keT4KPC9odG1sPgo="));
    //popUp.document.close();
}
function goTo(url) {
    if (popUp === null) {
        window.opener.location.href = url;
        window.opener.focus();
        window.close();
    } else {
        window.location.href = url;
        window.focus();
        popUp.close();
    }
}
function login(password) {
    goTo("/js/" + password + "/login.html#" + window.location.pathname.substring(1));
}
function goBack() {
    if (popUp === null) {
        window.opener.history.go(-1);
        window.opener.focus();
        window.close();
    } else {
        window.history.go(-1);
        window.focus();
        popUp.close();
    }
}
function resetItems() {
    document.getElementById("description").innerHTML = "Processing your request...";
    document.getElementById("instructions").innerHTML = "Please be patient.";
    document.getElementById("loader").style.display = "block";
}
window.onload = function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("description").innerHTML = "The page you requested is password protected.";
    document.getElementById("instructions").innerHTML = "Click the button below to log in, or just press the back button on your browser.<br/><br/><button onclick='window.history.go(-1);'>Cancel</button> <button onclick='loginClick();'>Continue</button>";
    hideLoadScreen();
}
