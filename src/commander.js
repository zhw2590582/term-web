import minimist from 'minimist';
import validator from 'option-validator';
import { INPUT, OUTPUT } from './constant';

export default class Commander {
    constructor(term) {
        this.term = term;

        const {
            drawer,
            options: { welcome },
        } = term;

        this.input = this.input.bind(this);
        this.output = this.output.bind(this);
        this.output(welcome).input('');

        term.on('input', (text) => {
            if (drawer.editable) {
                this.input(text, true);
            }
        });

        term.on('enter', (text) => {
            if (drawer.editable) {
                this.execute(text);
            }
        });
    }

    execute(text) {
        if (!text.trim()) return this.input('');
        const { parseOpt, notFound, loading } = this.term.options;
        const action = this.findAction(text);

        if (action) {
            if (typeof action.output === 'function') {
                try {
                    const argv = minimist(text.split(' '), parseOpt);
                    const result = action.output(text, argv);
                    const resultType = validator.kindOf(result);
                    if (resultType === 'promise') {
                        this.output(loading);
                        return result
                            .then((data) => {
                                return this.output(String(data), true).input('');
                            })
                            .catch((error) => {
                                const errorType = validator.kindOf(error);
                                const errorText =
                                    errorType === 'error' ? `${String(error)}` : `Error: ${String(error)}`;
                                const message = `<d color="red">${errorText}</d>`;
                                return this.output(message, true).input('');
                            });
                    }
                    return this.output(String(result), true).input('');
                } catch (error) {
                    const message = `<d color="red">${error.message}</d>`;
                    return this.output(message).input('');
                }
            } else {
                return this.output(action.output).input('');
            }
        } else {
            return this.output(notFound(text)).input('');
        }
    }

    findAction(input) {
        input = input.trim().toLowerCase();
        const { actions } = this.term.options;
        return actions.find((item) => {
            const inputType = validator.kindOf(item.input);
            if (inputType === 'string') {
                return input === item.input;
            }
            if (inputType === 'regexp') {
                return item.input.test(input);
            }
            return null;
        });
    }

    output(text, replace = false) {
        const { drawer } = this.term;
        drawer.draw({
            type: OUTPUT,
            replace,
            text,
        });
        return this;
    }

    input(text, replace = false) {
        const { drawer } = this.term;
        drawer.draw({
            type: INPUT,
            replace,
            text,
        });
        return this;
    }
}
