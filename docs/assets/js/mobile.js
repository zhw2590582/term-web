var url = '/assets/js/sample.js';
if (window.location.href.includes('github.io')) {
    url = '/term-web/assets/js/sample.js';
}

fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        eval(text);
        var term = Term.instances[0];
        term.events.draggie.destroy();
        term.emit('resize', {
            width: document.body.clientWidth,
            height: document.body.clientHeight,
        });
    });
