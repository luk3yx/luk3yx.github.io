// Copyright 2016 by luk3yx.
// All rights reserved.

// Possibly the simplest copyrighted script yet!

var beforeLink = decodeURIComponent(getParam.oldlink);
     afterLink = beforeLink.replace("/watch?v=", "/embed/");
     afterLink =  afterLink.replace("/watch", "/embed");
//var  afterLink = beforeLink.replace("?", "#");
window.location.href = afterLink;
