// Copyright 2016 by luk3yx.
// All rights reserved.

var raw  = helpers.params.get('oldlink');
var link = link.replace("/watch?v=", "/embed/").replace("/watch", "/embed");
window.location.href = link;
