import validator from 'option-validator';
import { INPUT, OUTPUT } from './constant';

export default class Decoder {
    constructor(term) {
        this.term = term;
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
            style: 'undefined|string',
        });

        const {
            drawer: { ctx, width, padding },
            options: { prefix, fontColor },
        } = this.term;

        if (data.type === INPUT) {
            data.text = prefix + data.text;
        }

        let index = 0;
        let left = padding[3];
        const result = [];
        const lines = data.text.split(/\r?\n/);
        const scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        for (let i = 0; i < lines.length; i += 1) {
            const line = lines[i];
            const span = document.createElement('span');
            span.innerHTML = line.replace(scriptReg, '');
            for (let j = 0; j < span.childNodes.length; j += 1) {
                const child = span.childNodes[j];
                const word = child.textContent;
                const wordSize = ctx.measureText(word).width;
                const color = child.getAttribute ? child.getAttribute('color') || fontColor : fontColor;

                const nextWordWidth = left + wordSize;
                if (nextWordWidth > width) {
                    const letters = [...word];
                    for (let k = 0; k < letters.length; k += 1) {
                        const letter = letters[k];
                        const letterSize = ctx.measureText(letter).width;
                        const nextLetterWidth = left + letterSize;
                        if (nextLetterWidth < width) {
                            const log = {
                                width: letterSize,
                                text: letter,
                                left,
                                color,
                            };
                            if (result[index]) {
                                result[index].push(log);
                            } else {
                                result[index] = [log];
                            }
                            left = nextLetterWidth;
                        } else {
                            index += 1;
                            left = padding[3] + letterSize;
                            result[index] = [
                                {
                                    width: letterSize,
                                    text: letter,
                                    left: padding[3],
                                    color,
                                },
                            ];
                        }
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
            index = 0;
            left = padding[3];
        }

        return result;
    }
}
