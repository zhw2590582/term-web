import { INPUT, OUTPUT } from './constant';

export default class Commander {
    constructor(term) {
        const {
            options: { notFound },
            drawer: { draw },
        } = term;

        term.on('input', (text) => {
            draw({
                type: INPUT,
                replace: true,
                text,
            });
        });

        term.on('enter', (text) => {
            draw({
                type: OUTPUT,
                text: notFound(text),
            });
            draw({
                type: INPUT,
                text: '',
            });
        });
    }
}
