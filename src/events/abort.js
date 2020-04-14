export default function (term) {
    term.on('keydown', (event) => {
        if (event.ctrlKey && event.keyCode === 67) {
            term.input();
            term.emit('abort');
        }
    });
}
