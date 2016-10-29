// Copyright 2016 by luk3yx.
// All rights reserved.
var content = getParam.content;

window.history.replaceState({}, "luk3yx's website", "/" + content);

loadScript("login");
