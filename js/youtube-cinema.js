// Copyright 2016 by luk3yx.
// All rights reserved.

var link = helpers.params.get('oldlink');
link = link.replace('/watch?v=', '/embed/').replace('/watch', '/embed');
window.location.href = link;
