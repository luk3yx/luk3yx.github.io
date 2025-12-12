// Copyright 2016 by luk3yx.
// All rights reserved.
page = getParam.translate;
if (page == '') {
    page = getParam.oldlink;
}

var page = encodeURI(page);
window.location.href = 'https://translate.google.com/translate?sl=auto&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=' + page + '&edit-text=&act=url';
