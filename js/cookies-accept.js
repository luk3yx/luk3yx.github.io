// Copyright 2016 by luk3yx.
// All rights reserved.
var referrer = decodeURIComponent(getParam.referrer);
window.stop();
window.location.href = decodeURIComponent(referrer.substring(referrer.indexOf("?")+1));
