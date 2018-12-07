---
# card.js - Generate a card URL that can be sent to card-generator.js.
# © Copyright 2018 by luk3yx.

layout: compress
---

helpers.params.delete('type');
helpers.params.delete('submit');

for (var i of helpers.params.keys()) {
    if (! helpers.params.get(i)) {
        helpers.params.delete(i);
    }
}

var data = '🎄' + btoa(helpers.params.toString());

helpers.onLoad(function() {
    document.getElementById('description').innerHTML = 'Card generator';
    document.getElementById('instructions').innerHTML = 'Your generated link:';

    var url = helpers.baseurl + '/js#' + data;

    document.getElementById('loader').innerHTML = `
        <input type="text" readonly value="${helpers.url}${url}" />
        <br/>
        You can <a href="${url}" target="_blank">click here</a> to preview your
        card in a new tab.
        <br/><br/>
        Click <a href="${helpers.baseurl}/cardgenerator.html">here</a> to create
        a new card.
    `;

    helpers.setTitle('Card generator');
    helpers.hideLoadScreen();
});
