import { INPUT, CHECKBOX, RADIO } from './constant';

export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio } = term.options;
        this.gap = 15 * pixelRatio;
        this.fontSize = 14 * pixelRatio;
        this.padding = [45, 15, 15, 15].map(item => item * pixelRatio);
        this.cursorColor = '#FFF';
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px Arial`;
        this.ctx.textBaseline = 'top';
        this.logs = [];

        this.update();

        this.cursorOn = false;
        (function loop() {
            this.timer = setTimeout(() => {
                this.cursorOn = !this.cursorOn;
                this.drawCursor();
                loop.call(this);
            }, 600);
        }.call(this));
    }

    get lastLog() {
        return this.logs[this.logs.length - 1];
    }

    get lastLine() {
        return this.lastLog.lines[this.lastLog.lines.length - 1];
    }

    update(data) {
        this.lineStartIndex = 0;
        this.lineEndIndex = 0;
        const { width, height } = this.$canvas;
        this.height = height - this.padding[0] - this.padding[2];
        this.width = width - this.padding[1] - this.padding[3];
        this.totalLine = Math.floor(this.height / (this.fontSize + this.gap));
        this.drawBackground();
        this.drawTopbar();
        this.drawContent(data);
    }

    drawBackground() {
        const { backgroundColor } = this.term.options;
        const { width, height } = this.$canvas;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
    }

    drawTopbar() {
        const { title, fontColor } = this.term.options;
        this.ctx.fillStyle = fontColor;
        const { width } = this.ctx.measureText(title);
        this.ctx.fillText(title, this.$canvas.width / 2 - width / 2, this.padding[1] - this.btnSize / 2);
        this.btnColor.forEach((item, index) => {
            this.ctx.beginPath();
            this.ctx.arc(
                this.padding[3] + this.btnSize + index * this.btnSize * 3.6,
                this.padding[1] + this.btnSize,
                this.btnSize,
                0,
                360,
                false,
            );
            this.ctx.fillStyle = item;
            this.ctx.fill();
            this.ctx.closePath();
        });
    }

    drawContent(data) {
        const { backgroundColor, fontColor } = this.term.options;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(this.padding[3], this.padding[0], this.width, this.height);

        if (data) {
            switch (data.style) {
                case CHECKBOX:
                    this.logs.push(this.getLogCheckbox(data));
                    break;
                case RADIO:
                    this.logs.push(this.getLogRadio(data));
                    break;
                default:
                    this.logs.push(this.getLogNormal(data));
                    break;
            }
        }

        let lineIndex = 0;
        for (let j = 0; j < this.logs.length; j += 1) {
            for (let k = 0; k < this.logs[j].lines.length; k += 1) {
                lineIndex += 1;
                if (this.lineStartIndex < lineIndex && this.lineStartIndex + this.totalLine > lineIndex) {
                    const text = this.logs[j].lines[k];
                    const top = this.padding[0] + (this.fontSize + this.gap) * (lineIndex - 1);
                    this.ctx.fillStyle = this.logs[j].color || fontColor;
                    this.ctx.fillText(text, this.padding[3], top);
                    this.lineEndIndex += 1;
                }
            }
        }
    }

    drawCursor() {
        const { pixelRatio, backgroundColor } = this.term.options;
        if (this.lastLog && this.lastLog.type === INPUT && this.lastLine) {
            this.update();
            const left = this.ctx.measureText(this.lastLine).width + this.padding[3] + pixelRatio * 5;
            const top = this.padding[0] + (this.fontSize + this.gap) * (this.lineEndIndex - 1);
            if (this.term.isFocus) {
                this.ctx.fillStyle = this.cursorOn ? this.cursorColor : backgroundColor;
            } else {
                this.ctx.fillStyle = this.cursorColor;
            }
            this.ctx.fillRect(left, top, pixelRatio * 5, this.fontSize);
        }
    }

    getLogNormal(data) {
        const { prefix } = this.term.options;
        let temp = data.type === INPUT ? prefix : '';

        if (!data.text) {
            return {
                ...data,
                lines: [temp],
            };
        }

        const lines = [];
        const temps = (data.text || '').split(/\r?\n/).filter(item => item.trim());
        for (let i = 0; i < temps.length; i += 1) {
            for (let j = 0; j < temps[i].length; j += 1) {
                const char = temp + temps[i][j];
                if (this.ctx.measureText(char).width > this.width) {
                    lines.push(temp);
                    temp = '';
                } else {
                    temp = char;
                }
            }
            lines.push(temp);
            temp = '';
        }

        return {
            ...data,
            lines,
        };
    }

    getLogCheckbox(data) {
        //
    }

    getLogRadio(data) {
        //
    }

    destroy() {
        clearTimeout(this.timer);
    }
}
