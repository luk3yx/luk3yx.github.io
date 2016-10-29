// It isn't really worth copyrighting this script...

// The 'getParam' function (stated below) is NOT copyrighted.
        var getParam = function () {
            var query_string = {};
            var query = urlOpts.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if (typeof query_string[pair[0]] === "undefined") {
                    query_string[pair[0]] = decodeURIComponent(pair[1]);
                } else if (typeof query_string[pair[0]] === "string") {
                    var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                    query_string[pair[0]] = arr;
                } else {
                    query_string[pair[0]].push(decodeURIComponent(pair[1]));
                }
            } 
              return query_string;
        }();
window.history.replaceState({}, "luk3yx's website", "/js");
showLoadScreen();
if (getParam.type == undefined) {
    loadScript("jsinfo");
} else {
    loadScript(getParam.type);
}
