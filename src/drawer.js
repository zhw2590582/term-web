import { INPUT } from './constant';

export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio, fontFamily } = term.options;
        this.gap = 10 * pixelRatio;
        this.fontSize = 14 * pixelRatio;
        this.padding = [45, 15, 15, 15].map((item) => item * pixelRatio);
        this.cursorColor = '#FFF';
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px ${fontFamily}`;
        this.ctx.textBaseline = 'top';
        this.inputs = [];
        this.logs = [];
        this.renderLogs = [];

        this.draw();
        this.draw = this.draw.bind(this);

        this.cursor = false;
        (function loop() {
            this.timer = setTimeout(() => {
                this.cursor = !this.cursor;
                this.drawCursor();
                loop.call(this);
            }, 500);
        }.call(this));
    }

    get editable() {
        const lastInput = this.inputs[this.inputs.length - 1];
        const lastlog = this.renderLogs[this.renderLogs.length - 1];
        return this.term.isFocus && lastInput && lastInput.type === INPUT && lastlog && lastlog.length;
    }

    get cursorPos() {
        if (this.editable) {
            const { pixelRatio } = this.term.options;
            const lastlog = this.renderLogs[this.renderLogs.length - 1];
            const lastLine = lastlog[lastlog.length - 1];
            const left = lastLine.left + lastLine.width + pixelRatio * 5;
            const top = this.padding[0] + (this.fontSize + this.gap) * (this.renderLogs.length - 1);
            return { left, top };
        }
        return { left: 0, top: 0 };
    }

    draw(input) {
        this.lineEndIndex = 0;
        const { width, height } = this.$canvas;
        this.height = height - this.padding[0] - this.padding[2];
        this.width = width - this.padding[1] - this.padding[3];
        this.totalLine = Math.floor(this.height / (this.fontSize + this.gap));
        this.drawBackground();
        this.drawTopbar();
        this.drawContent(input);
        return this;
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

    drawContent(input) {
        if (input) {
            if (input.replace) {
                const lastInput = this.inputs[this.inputs.length - 1];
                if (lastInput) {
                    this.logs = this.logs.filter((item) => item.input !== lastInput);
                }
            }
            this.inputs.push(input);
        }

        this.term.decoder.decode(input).forEach((item) => {
            item.input = input;
            this.logs.push(item);
        });

        const renderLogs = this.logs.slice(-this.totalLine);
        this.render(renderLogs);
    }

    render(renderLogs) {
        const { pixelRatio } = this.term.options;

        this.renderLogs = renderLogs;
        for (let i = 0; i < renderLogs.length; i += 1) {
            const logs = renderLogs[i];
            if (logs) {
                for (let j = 0; j < logs.length; j += 1) {
                    const log = logs[j];
                    this.ctx.fillStyle = log.color;
                    const top = this.padding[0] + (this.fontSize + this.gap) * i;
                    this.ctx.fillText(log.text, log.left, top);
                }
            }
        }

        const { left, top } = this.cursorPos;
        this.term.emit('cursor', {
            left: left / pixelRatio,
            top: top / pixelRatio,
        });
    }

    drawCursor() {
        clearTimeout(this.timer);
        const { left, top } = this.cursorPos;
        const { pixelRatio, backgroundColor } = this.term.options;
        if (this.editable) {
            this.draw();
            this.ctx.fillStyle = this.cursor ? this.cursorColor : backgroundColor;
            this.ctx.fillRect(left, top, pixelRatio * 5, this.fontSize);
        }
    }
}
