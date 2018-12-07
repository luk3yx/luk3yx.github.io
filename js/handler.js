---
# JavaScript script dispatcher

layout: compress
---

helpers.showLoadScreen();

(function() {

var script = helpers.params.get('type');

/* Trivial to implement redirects */
var redirects = {
    'approve':          '/403.html',
    'archive':          '/410.html',
    'birthdaycard':     'card',
    'fish':             '/418.html',
    'iso':              'http://cdimage.ubuntu.com',
    'login':            '/403.html',
    'redirect':         '/418.html',
    'teapot':           '/418.html',
    'xmascard':         'card',
};

if (redirects[script]) {
    if (redirects[script].indexOf('/') > -1) {
        window.stop();
        var url = redirects[script];
        if (url.indexOf('://') < 0) {
            url = helpers.baseurl + url;
        }
        window.location.href = url;
    } else {
        helpers.loadScript(redirects[script]);
    }
} else if (script) {
    if (! helpers.loadScript(script)) {
        window.stop();
        window.location.href = helpers.baseurl + '/404.html';
    };
} else {
    helpers.loadScript('jsinfo');
}
})();
