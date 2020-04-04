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

        proxy($textarea, 'paste', () => {
            term.emit('input', $textarea.value.trim());
        });

        proxy($textarea, 'keydown', (event) => {
            const key = event.keyCode;
            if (key === 13) {
                setTimeout(() => {
                    term.emit('enter', $textarea.value.trim());
                    $textarea.value = '';
                });
            }
            if ([37, 38, 39, 40].includes(key)) {
                $textarea.blur();
                setTimeout(() => $textarea.focus());
            }
        });
    }
}
