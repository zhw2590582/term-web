export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy($textarea, 'input', () => {
        term.emit('input', $textarea.value.trim());
    });

    events.proxy($textarea, 'paste', () => {
        term.emit('input', $textarea.value.trim());
    });

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

        if (term.drawer.renderEditable) {
            if (key === 38) {
                event.preventDefault();
                term.emit('history', -1);
            }
            if (key === 40) {
                event.preventDefault();
                term.emit('history', 1);
            }
        }

        if ([37, 38, 39, 40].includes(key)) {
            event.preventDefault();
        }
    });

    term.on('cursor', ({ left, top }) => {
        $textarea.style.top = `${top}px`;
        $textarea.style.left = `${left}px`;
    });
}
