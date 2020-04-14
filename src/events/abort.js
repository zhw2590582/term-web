export default function (term) {
    const { $textarea } = term.template;
    term.on('keydown', (event) => {
        if (event.ctrlKey && event.keyCode === 67) {
            $textarea.value = '';
            term.input();
            term.emit('abort');
        }
    });
}
