// Copyright 2016 by luk3yx.
// All rights reserved.
page = getParam.translate;
if (page == '') {
    page = getParam.oldlink;
}
//if (page == '') {
//    page = window.location.hash.substring(1); //Uses window.location.hash
//    alert('b')
//}
//if (page == '') {
//    page = document.referrer; //Uses HTTP Referrer
//}
if (page == '') {
    if (page = prompt("There has been an error finding the page to translate.\nPlease paste the URL to translate below.")) {
        // Success.
        success=true;
    } else {
        window.location.href = 'data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KPHRpdGxlPk9oLCBjb21lIG9uITwvdGl0bGU+CjxzY3JpcHQ+CndpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vbHVrM3l4LnBhbmNha2VhcHBzLmNvbS9qc3RyYW5zbGF0ZS9lcnJvcnBhZ2UuaHRtbCcKPC9zY3JpcHQ+CjwvaGVhZD4KPGJvZHk+PGgxPk9oLCBjb21lIG9uITwvaDE+PC9ib2R5Pgo8L2h0bWw+Cg=='
        alert("You were supposed to click OK.\nRefreshing the page...")
    }
}
if (page == "https://luk3yx.pancakeapps.com/jstranslate.html") {
    window.location.href = "/js";
} else {
    var page = encodeURI(page);
    window.location.href = 'https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=' + page + '&edit-text=&act=url';
}
