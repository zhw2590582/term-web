export default function (term, events) {
    const { $textarea } = term.template;

    events.proxy(document, ['click', 'contextmenu', 'dblclick'], (event) => {
        if (event.composedPath && event.composedPath().indexOf(term.template.$content) > -1) {
            term.isFocus = true;
            $textarea.focus();
            term.emit('focus');
            term.emit(event.type, event);
        } else {
            term.isFocus = false;
            term.emit('blur');
        }
    });
}
