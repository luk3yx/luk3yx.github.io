//
// guess.js - Take a guess at what the user wants
//

(function() {

var oldlink = decodeURIComponent(window.location.hash.substr(1));

helpers.params.set('oldlink',  oldlink);
helpers.params.set('referrer', document.referrer);

var type = 'jsinfo';
if (helpers.getDomainName(oldlink) == "youtube.com") {
    type = 'youtube-cinema';
} else if (oldlink == "cookies-accept") {
    type = 'cookies-accept';
} else if (oldlink.startsWith('🎄')) {
    type = 'card-generator';
} else if (oldlink.startsWith('http')) {
    type = 'translate';
}

helpers.loadScript(type);

})();
