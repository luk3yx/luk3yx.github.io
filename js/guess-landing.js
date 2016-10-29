// This script won't be copyrighted. There is nothing fancy worth stealing.
var url = '/js/handler?type=guess&oldlink=' + encodeURIComponent(window.location.hash.substring(1)) + '&referrer=' + encodeURIComponent(document.referrer);
window.stop();
window.location.href = url;
