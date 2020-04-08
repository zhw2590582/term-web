import validator from 'option-validator';

export default class Inquirer {
    constructor(term) {
        this.term = term;
        this.radio = this.radio.bind(this);
        this.checkbox = this.checkbox.bind(this);
    }

    radio(list, validate) {
        validator(list, [
            {
                key: 'string|number',
                text: 'string|number',
            },
        ]);

        const text = list.map((item) => item.text).join('\n');
        this.term.output(text, true);
    }

    checkbox(list, validate) {
        validator(list, [
            {
                key: 'string|number',
                text: 'string|number',
            },
        ]);
    }
}
