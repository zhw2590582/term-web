import validator from 'option-validator';
import { errorHandle } from '../share/utils';

export default function (data = []) {
    validator(data, [['string|number']]);
    errorHandle(data.length, 'Table length cannot be zero');

    const { pixelRatio } = this.options;
    const { ctx } = this.drawer;

    const gap = 5 * pixelRatio;
    const header = data[0] || [];
    const spaceWidth = ctx.measureText(' ').width;
    const lineWidth = ctx.measureText('—').width;
    const line2Width = ctx.measureText('|').width;

    const columnWidth = header.map((_, index) => {
        const widths = data.map((subItem) => Math.floor(ctx.measureText(subItem[index] || '').width + gap * 2));
        return Math.max(...widths);
    });

    const tableWidth =
        columnWidth.reduce((totle, item) => {
            return totle + item;
        }, 0) +
        line2Width * (header.length + 4);

    const lineNum = Math.ceil(tableWidth / lineWidth);
    const line = ''.repeat(lineNum);

    function addSpace(word, width) {
        const wordWidth = Math.ceil(ctx.measureText(word || '').width);
        const spaceNum = Math.ceil((width - wordWidth) / spaceWidth);
        const fixSpaceNum = spaceNum % 2 ? spaceNum + 1 : spaceNum;
        return `${' '.repeat(fixSpaceNum / 2)}<d>${word}</d>${' '.repeat(fixSpaceNum / 2)}`;
    }

    const result = `${line}\n${data
        .map((item) => {
            return `|${item
                .map((subItem, subIndex) => {
                    if (subIndex < header.length) {
                        return addSpace(subItem, columnWidth[subIndex]);
                    }
                    return null;
                })
                .filter((subItem) => subItem !== null)
                .join('|')}|`;
        })
        .join(`\n${line}\n`)}\n${line}`;

    this.output(result);
}
