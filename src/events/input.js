export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy($textarea, 'input', () => {
        term.emit('input', $textarea.value.trim());
    });

    events.proxy($textarea, 'paste', () => {
        term.emit('input', $textarea.value.trim());
    });

    term.on('cursor', ({ left, top }) => {
        $textarea.style.top = `${top}px`;
        $textarea.style.left = `${left}px`;
    });
}
