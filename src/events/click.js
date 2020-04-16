export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy(document, ['click', 'contextmenu', 'dblclick'], (event) => {
        if (event.composedPath && event.composedPath().indexOf(term.template.$content) > -1) {
            term.isFocus = true;
            term.emit('focus');
            term.emit(event.type, event);
        } else if (term.isFocus) {
            term.isFocus = false;
            term.emit('blur');
        }
    });

    term.on('focus', () => {
        $textarea.focus();
    });

    term.on('click', (event) => {
        const { log } = events.getLogFromEvent(event);
        if (log && log.href) window.open(log.href);
    });
}
