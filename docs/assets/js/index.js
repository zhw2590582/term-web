var mirror = CodeMirror(document.querySelector('.code'), {
    lineNumbers: true,
    mode: 'javascript',
    readOnly: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: 'dracula',
    value: '',
});

function runCode() {
    Term.instances.forEach(function (ins) {
        ins.destroy();
    });
    var code = mirror.getValue();
    eval(code);
}

fetch(`/assets/js/sample.js`)
    .then(function (response) {
        return response.text();
    })
    .then(function (text) {
        mirror.setValue(text);
        runCode();
    });
