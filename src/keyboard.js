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
            const val = $textarea.value.trim();
            term.emit('input', val);
        });

        proxy($textarea, 'keypress', (event) => {
            const key = event.keyCode;
            if (key === 13) {
                const val = $textarea.value.trim();
                setTimeout(() => {
                    if (val) term.emit('enter', val);
                    $textarea.value = '';
                });
            }
        });
    }
}
