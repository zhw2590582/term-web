import Log from './log';

export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio } = term.options;
        this.gap = 5 * pixelRatio;
        this.fontSize = 13 * pixelRatio;
        this.padding = [35, 10, 10, 10].map(item => item * pixelRatio);
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.titleColor = '#fff';
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px Arial`;
        this.ctx.textBaseline = 'top';
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
        this.line = Math.floor(this.height / (this.fontSize + this.gap));

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
        this.ctx.fillStyle = this.titleColor;
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
        const {
            options: { backgroundColor },
        } = this.term;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(this.padding[3], this.padding[0], this.width, this.height);

        if (data) this.logs.push(new Log(this, data));
        console.log(this.logs);
    }

    drawCursor() {
        //
    }

    drawText() {
        //
    }

    destroy() {
        clearTimeout(this.timer);
    }
}
