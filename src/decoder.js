import validator from 'option-validator';
import { INPUT, OUTPUT } from './constant';
import { escape } from './utils';

export default class Decoder {
    constructor(term) {
        this.term = term;
        this.span = document.createElement('span');
    }

    decode(data) {
        if (!data) return [];
        validator(data, {
            type: (val) => {
                if (![INPUT, OUTPUT].includes(val)) {
                    return `The type must be "${INPUT}" or "${OUTPUT}"`;
                }
                return true;
            },
            text: 'string',
            color: 'undefined|string',
            replace: 'undefined|boolean',
        });

        const {
            drawer: { ctx, width, padding },
            options: { prefix, fontColor },
        } = this.term;

        if (data.type === INPUT) {
            data.text = prefix + escape(data.text);
        }

        const result = [];
        const lines = data.text.split(/\r?\n/);
        const scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        let index = 0;
        let left = padding[3];
        for (let i = 0; i < lines.length; i += 1) {
            const line = lines[i];
            this.span.innerHTML = line.replace(scriptReg, '');
            for (let j = 0; j < this.span.childNodes.length; j += 1) {
                const child = this.span.childNodes[j];
                const word = child.textContent;
                const wordSize = ctx.measureText(word).width;
                const color = child.getAttribute ? child.getAttribute('color') || fontColor : fontColor;

                const nextWordWidth = left + wordSize;
                if (nextWordWidth > width) {
                    let textTmp = '';
                    let isNewLine = false;
                    const lastLeft = left;
                    const letters = [...word];
                    for (let k = 0; k < letters.length; k += 1) {
                        const letter = letters[k];
                        const letterSize = ctx.measureText(letter).width;
                        const nextLetterWidth = left + letterSize;
                        if (nextLetterWidth < width) {
                            textTmp += letter;
                            left = nextLetterWidth;
                        } else {
                            const log = {
                                width: ctx.measureText(textTmp).width,
                                left: isNewLine ? padding[3] : lastLeft,
                                text: textTmp,
                                color,
                            };

                            if (result[index]) {
                                result[index].push(log);
                            } else {
                                result[index] = [log];
                            }

                            index += 1;
                            textTmp = letter;
                            isNewLine = true;
                            left = padding[3] + letterSize;
                        }
                    }

                    const log = {
                        width: ctx.measureText(textTmp).width,
                        left: padding[3],
                        text: textTmp,
                        color,
                    };

                    if (result[index]) {
                        result[index].push(log);
                    } else {
                        result[index] = [log];
                    }
                } else {
                    const log = {
                        width: wordSize,
                        text: word,
                        left,
                        color,
                    };
                    if (result[index]) {
                        result[index].push(log);
                    } else {
                        result[index] = [log];
                    }
                    left = nextWordWidth;
                }
            }
            index += 1;
            left = padding[3];
        }

        return result;
    }
}
