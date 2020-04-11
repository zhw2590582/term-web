import minimist from 'minimist';
import validator from 'option-validator';
import { INPUT, OUTPUT } from './constant';

export default class Commander {
    constructor(term) {
        this.term = term;

        const {
            drawer,
            template: { $textarea },
            options: { welcome },
        } = term;

        this.isTyping = false;
        this.askResolve = null;

        this.ask = this.ask.bind(this);
        this.type = this.type.bind(this);
        this.input = this.input.bind(this);
        this.output = this.output.bind(this);

        this.output(welcome).input('');

        term.on('input', (text) => {
            if (drawer.cacheEditable) {
                if (this.isAsk) {
                    const { prefix } = drawer.lastCacheLog;
                    this.ask(prefix, text);
                } else {
                    this.input(text, true);
                }
            }
        });

        term.on('enter', (text) => {
            if (drawer.cacheEditable && text.trim()) {
                if (this.isAsk) {
                    this.askResolve(text);
                    this.askResolve = null;
                    $textarea.value = '';
                } else {
                    this.execute(text);
                }
            }
        });
    }

    get isAsk() {
        const { lastCacheLog } = this.term.drawer;
        return lastCacheLog && lastCacheLog.prefix && typeof this.askResolve === 'function';
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
                                if (typeof data !== 'undefined') {
                                    return this.output(data, true).input('');
                                }
                                return this;
                            })
                            .catch((error) => {
                                const errorType = validator.kindOf(error);
                                const errorText =
                                    errorType === 'error' ? `${String(error)}` : `Error: ${String(error)}`;
                                const message = `<d color="red">${errorText}</d>`;
                                return this.output(message, true).input('');
                            });
                    }
                    if (typeof result !== 'undefined') {
                        return this.output(result).input('');
                    }
                    return this;
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
        this.term.drawer.emit({
            type: OUTPUT,
            replace,
            text: String(text),
        });
        return this;
    }

    input(text, replace = false) {
        this.term.drawer.emit({
            type: INPUT,
            replace,
            text: String(text),
        });
        return this;
    }

    ask(question, answer = '') {
        const { $textarea } = this.term.template;
        return new Promise((resolve) => {
            this.term.drawer.emit({
                type: INPUT,
                replace: !!this.askResolve,
                prefix: question,
                text: answer,
                resolve,
            });
            if (this.askResolve) {
                $textarea.value = answer;
            } else {
                this.askResolve = resolve;
            }
        });
    }

    type(text, isExecute = true) {
        if (this.isTyping) return Promise.reject();
        const { $textarea } = this.term.template;
        return new Promise((resolve) => {
            const letters = [...text];
            let lastLetters = '';
            (function loop() {
                if (!letters.length) {
                    this.isTyping = false;
                    $textarea.value = lastLetters;
                    if (isExecute) {
                        this.execute(lastLetters);
                        $textarea.value = '';
                    }
                    resolve(lastLetters);
                } else {
                    this.isTyping = true;
                    const letter = letters.shift();
                    lastLetters += letter;
                    this.input(lastLetters, true);
                    setTimeout(() => {
                        loop.call(this);
                    }, 100);
                }
            }.call(this));
        });
    }
}
