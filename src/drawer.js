import { INPUT } from './constant';

export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio } = term.options;
        this.gap = 10 * pixelRatio;
        this.fontSize = 14 * pixelRatio;
        this.padding = [35, 10, 10, 10].map(item => item * pixelRatio);
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.textColor = '#fff';
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px Arial`;
        this.ctx.textBaseline = 'top';

        this.lineIndex = 0;
        this.logs = [];

        (function loop() {
            this.timer = setTimeout(() => {
                this.drawCursor();
                loop.call(this);
            }, 1000);
        }.call(this));

        this.update();
    }

    update(data) {
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
        const { title } = this.term.options;
        this.ctx.fillStyle = this.textColor;
        const { width } = this.ctx.measureText(title);
        this.ctx.fillText(title, this.$canvas.width / 2 - width / 2, this.padding[1]);
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
        if (data) this.logs.push(...this.getLog(data));
        this.ctx.fillStyle = this.textColor;

        for (let i = 0; i < this.totalLine; i += 1) {
            const text = this.logs[this.lineIndex + i];
            if (text) {
                const top = this.padding[0] + (this.fontSize + this.gap) * i;
                this.ctx.fillText(text, this.padding[3], top);
            }
        }
    }

    drawCursor() {
        //
    }

    drawText() {
        //
    }

    getLog(data) {
        const { prefix } = this.term.options;
        const chr = data.text
            .split(/\r?\n/)
            .map(item => item.trim())
            .join(' ')
            .split(' ');
        let temp = [data.type === INPUT ? prefix : ''];
        const lines = [];
        for (let i = 0; i < chr.length; i += 1) {
            const text = [...temp, chr[i]].join(' ').trim();
            if (this.ctx.measureText(text).width > this.width) {
                lines.push(temp.join(' '));
                temp.length = 0;
            } else {
                temp = text.split(' ');
            }
        }
        lines.push(temp.join(' '));
        return lines;
    }

    destroy() {
        clearTimeout(this.timer);
    }
}
