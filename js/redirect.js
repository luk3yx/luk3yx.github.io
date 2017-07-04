// You think I would copyright this?
// Of course not.
url = getParam.url;
// https://stackoverflow.com/a/3480785/1 for the XSS detection.
if (url.indexOf("javascript:") >= 0) {
    window.location.href = "/error.html#xss";
} else {
    window.location.href = url;
}
