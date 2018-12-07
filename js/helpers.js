---
# JavaScript helper functions
# © 2018 by luk3yx.

layout: compress
---

helpers = {
    title:   `{{ site.title }}`,
    url:     `{{ site.url }}`,
    baseurl: `{{ site.baseurl }}`,

    addLegacyFunctions: function() {
        if (window.loadScript) { return; }
        for (var i in this) {
            window[i] = this[i];
        }
        window.getParam = this.getParams();
        this.setTitle(window.getParam.type);
        window.urlOpts = window.location.search;
        window.debug = console.log;
        console.log('Legacy function names have been loaded in.');
    },

    loadScript: function(script) {
        if (typeof this.versions[script] != 'number') {
            console.error('Unknown scripts cannot be loaded.');
            return false;
        } else if (this.versions[script] < 2) {
            this.addLegacyFunctions();
        }
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', this.baseurl + '/js/' +
            this.escapeHTML(script) + '.js');
        document.head.appendChild(scriptElement);
        return true;
    },

    cacheImage: function(url) {
        var cachedImage = document.createElement('img');
        cachedImage.style.display = 'none';
        cachedImage.setAttribute('src', url);
        document.getElementsByTagName('HTML')[0].insertBefore(cachedImage, document.head);
    },

    deleteElement: function(elem) {
        if (elem) {
            elem.parentElement.removeChild(elem);
        } else {
            console.warn('helpers.deleteElement() called without an element.');
        }
    },

    hideLoadScreen: function() {
        document.body.style.overflow = 'visible';
        var loadscreen = document.getElementById('loadscreen');
        if (loadscreen) {
            loadscreen.style.display = 'none';
            this.deleteElement(loadscreen);
        }
    },

    showLoadScreen: function() {
        if (! document.getElementById('loadscreen')) {
            document.body.style.overflow = 'hidden';
            var loadScreen = document.createElement('div');
            loadScreen.setAttribute('id', 'loadscreen');
            document.getElementsByTagName('HTML')[0].insertBefore(loadScreen, document.head);
            var loadScreenWrapper = document.createElement('h1');
            var loadScreenWrapper2 = document.createElement('center');
            var loadScreenImg = document.createElement('img');
            loadScreenImg.setAttribute('alt', 'Loading...');
            loadScreenImg.setAttribute('src', '/images/loadscreen.gif');
            loadScreen.appendChild(loadScreenWrapper);
            loadScreenWrapper.appendChild(loadScreenWrapper2);
            loadScreenWrapper2.appendChild(loadScreenImg);
        }
    },

    escapeHTML: function(html, newlines) {
        var escaped = (html || '').replace(/&/g, '&amp;').replace(/</g,
            '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        if (newlines) {
            escaped = escaped.replace(/\r\n/g, '\n').replace(/[\r\n]/g,
                '<br/>');
        } else {
            escaped = escaped.replace(/[\r\n]/g, '');
        }
        return escaped;
    },

    setTitle: function(title) {
        document.title = (title || 'Interactive content') + ' - ' + this.title;
    },

    onLoad: function(func) {
        if (document.readyState == 'complete') {
            func();
        } else {
            window.addEventListener('load', func);
        }
    },

    /* Modified from https://stackoverflow.com/a/23945027 */
    getDomainName: function(link) {
        if (link.indexOf('://') > -1) {
            return link.split('/')[2].split(':')[0];
        } else {
            return link.split('/')[0].split(':')[0];
        }
    },

    params: new URLSearchParams(window.location.search),

    getParams: function() {
        var obj = {};
        for (var i of this.params.keys()) {
            obj[i] = this.params.get(i);
        }
        return obj;
    },

    /* All scripts callable with loadScript() should be listed here. */
    versions: {
        'card':             2,
        'cardcover':        1,
        'card-generator':   2,
        'contextmenu':      1,
        'cookies-accept':   1,
        'guess':            2,
        'handler':          2,
        'jsinfo':           2,
        'load':             1,
        'ticker':           1,
        'translate':        1,
        'youtube-cinema':   2,
    },
};

// window.history.replaceState(null, document.title, '/js');
