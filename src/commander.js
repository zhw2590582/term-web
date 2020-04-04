import { INPUT, OUTPUT } from './constant';

export default class Commander {
    constructor(term) {
        const {
            drawer: { draw },
        } = term;

        term.on('input', (text) => {
            draw(
                {
                    type: INPUT,
                    text,
                },
                true,
            );
        });

        term.on('enter', (text) => {
            draw({
                type: OUTPUT,
                text: `输入命令：${text}`,
            });
            draw({
                type: INPUT,
                text: '',
            });
        });
    }
}
