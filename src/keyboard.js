export default class Keyboard {
    constructor(term) {
        const {
            template: { $textarea },
            events: { proxy },
        } = term;

        term.on('focus', () => {
            $textarea.focus();
        });

        proxy($textarea, 'input', () => {
            term.emit('input', $textarea.value.trim());
        });

        proxy($textarea, 'keypress', (event) => {
            const key = event.keyCode;
            if (key === 13) {
                setTimeout(() => {
                    term.emit('enter', $textarea.value.trim());
                    $textarea.value = '';
                });
            }
        });
    }
}
