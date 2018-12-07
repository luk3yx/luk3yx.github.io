---
# security.js - A wrapper so luk3yx.pancakeapps.com will continue to work.
# This script has a weird name.

layout: compress
---

if (window.location.hostname == 'luk3yx.pancakeapps.com') {
    window.stop();
    window.location.href = '{{ site.url }}{{ site.baseurl }}' +
        window.location.pathname + window.location.search     +
        window.location.hash;
} else {
    console.warn('The obsolete security.js was called.');
}
