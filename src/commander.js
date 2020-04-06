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
        this.clear = this.clear.bind(this);

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
        const argv = minimist(text.split(' '), parseOpt);

        if (action) {
            if (typeof action.output === 'function') {
                try {
                    const result = action.output.call(this.term, text, argv);
                    const resultType = validator.kindOf(result);
                    if (resultType === 'promise') {
                        const loadingText = loading.call(this.term, text, argv);
                        this.output(loadingText);
                        return result
                            .then((data) => {
                                if (typeof data === 'undefined') {
                                    return this.input('');
                                }
                                return this.output(data, true).input('');
                            })
                            .catch((error) => {
                                const errorType = validator.kindOf(error);
                                const errorText =
                                    errorType === 'error' ? `${String(error)}` : `Error: ${String(error)}`;
                                const message = `<d color="red">${errorText}</d>`;
                                return this.output(message, true).input('');
                            });
                    }
                    if (typeof result === 'undefined') {
                        return this.input('');
                    }
                    return this.output(result).input('');
                } catch (error) {
                    const message = `<d color="red">${String(error)}</d>`;
                    return this.output(message).input('');
                }
            } else {
                return this.output(action.output).input('');
            }
        } else {
            const result = notFound.call(this.term, text, argv);
            return this.output(result).input('');
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
        this.term.drawer.draw({
            type: OUTPUT,
            replace,
            text: String(text),
        });
        return this;
    }

    input(text, replace = false) {
        this.term.drawer.draw({
            type: INPUT,
            replace,
            text: String(text),
        });
        return this;
    }

    clear() {
        this.term.drawer.logs = [];
        this.term.drawer.draw();
        return this;
    }
}
