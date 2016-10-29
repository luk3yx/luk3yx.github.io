// Copyright 2016 by luk3yx.
// All rights reserved.
var distro = getParam.distro;
var versionall = getParam.version;
var version = versionall.split(",")[0];
var mintversion = versionall.split(",")[1];


if (distro == "mint") {
    if (mintversion == "18") {
        mintid = "27";
    } else if (mintversion == "17.3") {
        mintid = "26";
    } else if (mintversion == "13") {
        mintid = "18";
    }
        
    if (typeof mintid !== 'undefined') {
        var url = "https://linuxmint.com/release.php?id=" + mintid;
    } else {
        alert("Sorry. The Linux Mint downloader is not fully functional at the monent.\n\nPlease select '" + mintversion + "' on the following page.");
        var url = "https://linuxmint.com/download_all.php";
    }
} else {
    if (distro == "ubuntu") {
        var url = "http://releases.ubuntu.com/" + version;
    } else {
        var url = "http://cdimage.ubuntu.com/" + distro + "/releases/" + version + "/release/";
    }
}
window.stop();
window.location.href = url;
