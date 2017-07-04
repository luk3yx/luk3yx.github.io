// You think I would copyright this?
// Of course not.
url = getParam.url;
if (url.substring(0, 3) == "jav") {
    window.location.href = "/error.html#xss";
} else {
    window.location.href = url;
}
