export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy($textarea, 'keydown', (event) => {
        term.emit('keydown', event);
        const key = event.keyCode;

        // Send input commands and clear input status
        if (key === 13) {
            term.emit('enter', $textarea.value.trim());
            $textarea.value = '';
        }

        // Exit the current command and wrap
        if (event.ctrlKey && key === 67) {
            $textarea.value = '';
            term.input();
            term.emit('abort');
        }

        // Access input history
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

        // Disable arrow keys during input
        if ([37, 38, 39, 40].includes(key)) {
            event.preventDefault();
        }
    });
}
