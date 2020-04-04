export default class Events {
    constructor(term) {
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);

        const { $canvas, $textarea } = term.template;

        this.proxy(document, ['click', 'contextmenu'], (event) => {
            if (event.composedPath && event.composedPath().indexOf($canvas) > -1) {
                $textarea.focus();
                term.isFocus = true;
                term.emit('focus');
            } else {
                term.isFocus = false;
                term.emit('blur');
            }
        });

        this.proxy($textarea, 'input', () => {
            const val = $textarea.value.trim();
            term.emit('input', val);
        });

        this.proxy($textarea, 'keypress', (event) => {
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

    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) {
            name.forEach((item) => this.proxy(target, item, callback, option));
        } else {
            target.addEventListener(name, callback, option);
            this.destroyEvents.push(() => {
                target.removeEventListener(name, callback, option);
            });
        }
    }

    destroy() {
        this.destroyEvents.forEach((event) => event());
    }
}
