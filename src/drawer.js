export default class Drawer {
    constructor(term) {
        this.term = term;
        const { pixelRatio } = term.options;
        this.fontSize = 12 * pixelRatio;
        this.padding = [50, 20, 20, 20].map(item => item * pixelRatio);
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.titleColor = '#fff';
        this.$canvas = term.template.$canvas;
        this.ctx = this.$canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px Arial`;
        this.update();
    }

    update() {
        this.drawBackground();
        this.drawTopbar();
        this.drawWelcome();
        this.drawBody();
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
        this.ctx.fillText(title, this.$canvas.width / 2 - width / 2, this.padding[1] * 1.2);
        this.btnColor.forEach((item, index) => {
            this.ctx.beginPath();
            this.ctx.arc(this.padding[3] + index * this.btnSize * 3.6, this.padding[1], this.btnSize, 0, 360, false);
            this.ctx.fillStyle = item;
            this.ctx.fill();
            this.ctx.closePath();
        });
    }

    drawWelcome() {
        //
    }

    drawBody() {
        //
    }
}
