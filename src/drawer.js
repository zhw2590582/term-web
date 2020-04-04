import { INPUT } from './constant';

export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio } = term.options;
        this.gap = 10 * pixelRatio;
        this.fontSize = 14 * pixelRatio;
        this.padding = [45, 15, 15, 15].map((item) => item * pixelRatio);
        this.cursorColor = '#FFF';
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px Arial`;
        this.ctx.textBaseline = 'top';
        this.startIndex = 0;
        this.logs = [];

        this.draw();

        this.cursorOn = false;
        // (function loop() {
        //     this.timer = setTimeout(() => {
        //         this.cursorOn = !this.cursorOn;
        //         this.drawCursor();
        //         loop.call(this);
        //     }, 600);
        // }.call(this));
    }

    get lastLog() {
        return this.logs[this.logs.length - 1];
    }

    get lastLine() {
        return this.lastLog.lines[this.lastLog.lines.length - 1];
    }

    draw(data) {
        this.lineEndIndex = 0;
        const { width, height } = this.$canvas;
        this.height = height - this.padding[0] - this.padding[2];
        this.width = width - this.padding[1] - this.padding[3];
        this.totalLine = Math.floor(this.height / (this.fontSize + this.gap));
        this.drawBackground();
        this.drawTopbar();
        this.drawContent(data);
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

    drawContent(data) {
        const { backgroundColor } = this.term.options;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(this.padding[3], this.padding[0], this.width, this.height);

        const result = this.term.decoder.decode(data);
        this.logs.push(...result);
        const renderLogs = this.logs.slice(this.startIndex, this.totalLine);

        for (let i = 0; i < renderLogs.length; i += 1) {
            const logs = renderLogs[i];
            for (let j = 0; j < logs.length; j += 1) {
                const log = logs[j];
                this.ctx.fillStyle = log.color;
                const top = this.padding[0] + (this.fontSize + this.gap) * i;
                this.ctx.fillText(log.text, log.left, top);
            }
        }
    }

    drawCursor() {
        const { pixelRatio, backgroundColor } = this.term.options;
        if (this.lastLog && this.lastLog.type === INPUT && this.lastLine) {
            this.draw();
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

    destroy() {
        clearTimeout(this.timer);
    }
}
