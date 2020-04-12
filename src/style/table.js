import validator from 'option-validator';
import { errorHandle } from '../share/utils';

export default function (data = []) {
    validator(data, [['string|number']]);
    errorHandle(data.length, 'Table length cannot be zero');

    const { pixelRatio } = this.options;
    const { ctx } = this.drawer;

    const gap = 10 * pixelRatio;
    const header = data[0] || [];
    const spaceWidth = ctx.measureText(' ').width;

    const columnWidth = header.map((_, index) => {
        const widths = data.map((subItem) => Math.floor(ctx.measureText(subItem[index] || '').width + gap * 2));
        return Math.max(...widths);
    });

    function addSpace(word, width) {
        const wordWidth = Math.floor(ctx.measureText(word || '').width);
        const spaceNum = Math.ceil((width - wordWidth) / spaceWidth);
        return `<d>${' '.repeat(spaceNum / 2)}${word}${' '.repeat(spaceNum / 2)}</d>`;
    }

    const wordSize = [];
    const result = data
        .map((item) => {
            return item
                .map((subItem, subIndex) => {
                    if (subIndex < header.length) {
                        const word = addSpace(subItem, columnWidth[subIndex]);
                        const size = word.length;
                        if (wordSize[subIndex]) {
                            wordSize[subIndex] = Math.max(wordSize[subIndex], size);
                        } else {
                            wordSize[subIndex] = size;
                        }
                        return word;
                    }
                    return null;
                })
                .map((subItem, subIndex) => {
                    if (subIndex < header.length) {
                        const miss = wordSize[subIndex] - subItem.length;
                        if (miss > 0) {
                            return `${subItem}${' '.repeat(miss)}`;
                        }
                        return subItem;
                    }
                    return null;
                })
                .filter((subItem) => subItem !== null)
                .join('');
        })
        .join(`\n`);

    this.output(result);
}
