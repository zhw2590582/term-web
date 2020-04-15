export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy($textarea, 'keydown', (event) => {
        term.emit('keydown', event);
        const key = event.keyCode;

        if (key === 13) {
            term.emit('enter', $textarea.value.trim());
            $textarea.value = '';
        }

        if (event.ctrlKey && key === 67) {
            $textarea.value = '';
            term.input();
            term.emit('abort');
        }

        if ([37, 38, 39, 40].includes(key)) {
            event.preventDefault();
        }

        if (term.drawer.renderEditable) {
            if (key === 38) {
                term.emit('history', -1);
            }
            if (key === 40) {
                term.emit('history', 1);
            }
        }
    });
}
