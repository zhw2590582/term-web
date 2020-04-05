import { INPUT, OUTPUT } from './constant';

export default class Commander {
    constructor(term) {
        const {
            options: { notFound },
            drawer,
        } = term;

        term.on('input', (text) => {
            if (drawer.editable) {
                drawer.draw({
                    type: INPUT,
                    replace: true,
                    text,
                });
            }
        });

        term.on('enter', (text) => {
            if (drawer.editable) {
                drawer.draw({
                    type: OUTPUT,
                    text: notFound(text),
                });
                drawer.draw({
                    type: INPUT,
                    text: '',
                });
            }
        });
    }
}
