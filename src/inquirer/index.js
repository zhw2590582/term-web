import validator from 'option-validator';
import { errorHandle } from '../share/utils';
import { OUTPUT, RADIO, CHECKBOX } from '../share/constant';

export default class Inquirer {
    constructor(term) {
        this.term = term;

        this.color = '#66d9ef';
        this.radioTip = '(select: Up or Down, confirm: Enter)';
        this.checkboxTip = '(move: Up or Down, select: Space, confirm: Enter)';

        this.radioInit = false;
        this.radioList = [];
        this.radioKey = null;
        this.radioResolve = () => null;

        this.checkboxInit = false;
        this.checkboxList = [];
        this.checkboxIndex = 0;
        this.checkboxKey = [];
        this.checkboxResolve = () => null;

        this.radio = (list) => this.render(list, RADIO);
        this.checkbox = (list) => this.render(list, CHECKBOX);

        term.on('keydown', (event) => {
            const last = term.drawer.lastCacheLog;
            const key = event.keyCode;
            if (last.style === RADIO && this.radioList === last.list) {
                this.radioEvent(key);
            }
            if (last.style === CHECKBOX && this.checkboxList === last.list) {
                this.checkboxEvent(key);
            }
        });
    }

    render(list, type) {
        return new Promise((resolve) => {
            validator(list, [
                {
                    key: 'string|number',
                    text: 'string|number',
                },
            ]);

            errorHandle(list.length, 'Array cannot be empty');
            errorHandle(
                list.map((item) => item.key).every((item, _, arr) => arr.indexOf(item) === arr.lastIndexOf(item)),
                'The key value in the array element must be unique',
            );

            if (type === RADIO) {
                this.radioList = list;
                this.radioKey = list[0].key;
                this.radioResolve = resolve;
                this.radioRender(list, this.radioKey);
                this.radioInit = true;
            }

            if (type === CHECKBOX) {
                this.checkboxList = list;
                this.checkboxIndex = 0;
                this.checkboxKey = [];
                this.checkboxResolve = resolve;
                this.checkboxRender();
                this.checkboxInit = true;
            }
        });
    }

    radioRender() {
        const text = this.radioList
            .map((item) =>
                this.radioKey === item.key ? `<d color='${this.color}'>=> ${item.text}</d>` : `   ${item.text}`,
            )
            .join('\n');

        this.term.drawer.emit({
            text: `${text}\n${this.radioTip}`,
            list: this.radioList,
            type: OUTPUT,
            style: RADIO,
            replace: this.radioInit,
        });
    }

    radioEvent(key) {
        const index = this.radioList.findIndex((item) => item.key === this.radioKey);
        if (key === 38) {
            if (index <= 0) {
                this.radioKey = this.radioList[this.radioList.length - 1].key;
                this.radioRender(this.radioList, this.radioKey);
            } else {
                this.radioKey = this.radioList[index - 1].key;
                this.radioRender(this.radioList, this.radioKey);
            }
        }
        if (key === 40) {
            if (index === this.radioList.length - 1) {
                this.radioKey = this.radioList[0].key;
                this.radioRender(this.radioList, this.radioKey);
            } else {
                this.radioKey = this.radioList[index + 1].key;
                this.radioRender(this.radioList, this.radioKey);
            }
        }
        if (key === 13) {
            this.radioResolve(this.radioKey);
            this.radioInit = false;
            this.radioList = [];
            this.radioKey = null;
            this.radioResolve = () => null;
        }
    }

    checkboxRender() {
        const text = this.checkboxList
            .map((item, i) =>
                i === this.checkboxIndex
                    ? `<d color='${this.color}'>${this.checkboxKey.includes(item.key) ? '◉' : '〇'} ${item.text}</d>`
                    : `${this.checkboxKey.includes(item.key) ? '◉' : '〇'} ${item.text}`,
            )
            .join('\n');

        this.term.drawer.emit({
            text: `${text}\n${this.checkboxTip}`,
            list: this.checkboxList,
            type: OUTPUT,
            style: CHECKBOX,
            replace: this.checkboxInit,
        });
    }

    checkboxEvent(key) {
        if (key === 38) {
            if (this.checkboxIndex <= 0) {
                this.checkboxIndex = this.checkboxList.length - 1;
                this.radioKey = this.checkboxList[this.checkboxIndex].key;
                this.checkboxRender();
            } else {
                this.checkboxIndex -= 1;
                this.radioKey = this.checkboxList[this.checkboxIndex].key;
                this.checkboxRender();
            }
        }
        if (key === 40) {
            if (this.checkboxIndex === this.checkboxList.length - 1) {
                this.checkboxIndex = 0;
                this.checkboxRender();
            } else {
                this.checkboxIndex += 1;
                this.checkboxRender();
            }
        }
        if (key === 32) {
            const currentKey = this.checkboxList[this.checkboxIndex].key;
            const currentIndex = this.checkboxKey.indexOf(currentKey);
            if (currentIndex > -1) {
                this.checkboxKey.splice(currentIndex, 1);
            } else {
                this.checkboxKey.push(currentKey);
            }
            this.checkboxRender();
        }
        if (key === 13) {
            this.checkboxResolve(this.checkboxKey);
            this.checkboxInit = false;
            this.checkboxList = [];
            this.checkboxIndex = 0;
            this.checkboxKey = [];
            this.checkboxResolve = () => null;
        }
    }
}
