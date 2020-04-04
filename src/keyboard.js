import hotkeys from 'hotkeys-js';

export default class Keyboard {
    constructor(term) {
        hotkeys('space', (event, handler) => {
            if (term.isFocus) {
                event.preventDefault();
                console.log(handler);
            }
        });
    }
}
