// You think I would copyright this?
// Of course not.

// A script to handle HTCPCP requests
var teapot = atob('PGgxPgogICAgRVJST1IgNDE4Ogo8L2gxPgo8aDI+CiAgICBJJ20gYSB0ZWFwb3Q/CjwvaDI+CjxoND4KICAgIFRoZSByZXF1ZXN0ZWQgZW50aXR5IGJvZHkgaXMgc2hvcnQgYW5kIHN0b3V0CjwvaDQ+CjxoNT4KICAgIFRpcCBtZSBvdmVyIGFuZCBwb3VyIG1lIG91dC4KPC9oNT4K');

function teapotRedirect() {
    document.getElementById("title").innerHTML = "ERROR 418: I'm a teapot?";
    document.getElementsByClassName("content")[0].innerHTML = teapot;
}
window.onload = teapotRedirect;
