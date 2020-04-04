import hotkeys from 'hotkeys-js';

export default class Keyboard {
    constructor(term) {
        hotkeys('alt+x', (event, handler) => {
            if (term.isFocus) {
                event.preventDefault();
                console.log(handler);
            }
        });
    }
}
