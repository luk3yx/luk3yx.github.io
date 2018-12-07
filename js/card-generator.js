//
// card-generator.js - Generate a card.
//
// © Copyright 2018 by luk3yx.
//

// Decode the URL (if encoded)
var encoded = helpers.params.get('oldlink');
if (encoded && encoded.startsWith('🎄')) {
    helpers.params = new URLSearchParams(atob(encoded.replace('🎄', '')));
}

var card = (helpers.params.get('card') || '').toLowerCase();

var dfmsg = '';
switch (card) {
    case "xmas":
    case "christmas":
        greeting = "Merry Christmas";
        dfmsg = 'Jingle bells, jingle bells,'   +
                '\nJingle all the way.'         +
                '\nOh what fun it is to ride,'  +
                '\nIn a one-horse open sleigh!';
        break;
    case "birthday":
        greeting = "Happy Birthday";
        break;
    default:
        greeting = "April Fools";
        dfmsg = "I have no idea what card\nI am supposed to make.";
        break;
}

if (! dfmsg) {
    dfmsg = greeting + ", and\nbest wishes for the future.";
}

// Get all the parameters
var to      = helpers.params.get('to');
var from    = helpers.params.get('from')    || '....................';
var msg     = helpers.params.get('msg');
var imgurl  = helpers.params.get('imgurl');
var colour  = helpers.params.get('colour')  || helpers.params.get('color');
var img     = helpers.params.get('img');

// Parse them
var title = greeting + "!";
if (img == 'URL') {
    img = null;
}
if (to) {
    title = greeting + ' ' + to + '!';
}
if (! msg) {
    msg = dfmsg;
}

// Escape HTML
title   = helpers.escapeHTML(title);
from    = helpers.escapeHTML(from);
msg     = helpers.escapeHTML(msg, true);
img     = helpers.escapeHTML(img);
colour  = helpers.escapeHTML(colour);

// Get the image URL
if (img) {
    // More code to support legacy options
    switch (img) {
        case "1": // The older format had '1-6',
        case "2": // not xmas[n] and birthday[n].
        case "3": // This is because there only
        case "4": // used to be a Christmas
        case "5": // card generator.
        case "6":
            imgurl = helpers.url + "/images/xmas" + img + ".jpg";
            break;
        default:
            if (img) {
                imgurl = helpers.url + "/images/" + img + ".jpg";
            }
            break;
    }
}

// Get the <img> tag
var imgtag = '';
if (imgurl) {
    imgtag = '<img id="backimg" src="' + helpers.escapeHTML(imgurl) +
        '" alt=" "></img>';
}

// Set the text colour
var morecss = '';
if (colour) {
    morecss = '<style type="text/css" id="txtcolour">* { color: ' +
        helpers.escapeHTML(colour) + ' !important; }</style>';
}

var html = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="content-type"
            content="text/html;charset=utf-8" />
        <link rel="stylesheet" type="text/css"
            href="${helpers.baseurl}/js/handler/card.css" />
        <meta name="viewport" content="width=device-width" />
        <title>${title}</title>
        ${morecss}
    </head>
    <body>
        ${imgtag}
        <main class="content">
            <br/><br/>
            <h1>${title}</h1><br/>
            <h2>${msg}</h2><br/>
            <h1>From ${from}</h1>
        </main>
    </body>
    </html>
`;

// Load the HTML in
helpers.onLoad(function() {
    document.open();
    document.write(html);
    document.close();
})
