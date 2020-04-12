export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy($textarea, 'input', () => {
        term.emit('input', $textarea.value.trim());
    });

    events.proxy($textarea, 'paste', () => {
        term.emit('input', $textarea.value.trim());
    });

    events.proxy($textarea, 'keydown', (event) => {
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
        term.emit('keydown', event);
    });

    term.on('cursor', ({ left, top }) => {
        $textarea.style.top = `${top}px`;
        $textarea.style.left = `${left}px`;
    });
}
