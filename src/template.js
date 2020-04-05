import { errorHandle } from './utils';

export default class Template {
    constructor(term) {
        this.term = term;

        this.$container = term.options.container;
        errorHandle(
            term.constructor.instances.every((ins) => ins.options.container !== this.$container),
            'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.',
        );

        this.$container.style.position = 'relative';
        this.$container.classList.add('term-container');

        this.$canvas = document.createElement('canvas');
        this.$canvas.classList.add('term-canvas');
        this.$container.appendChild(this.$canvas);

        this.$textarea = document.createElement('textarea');
        this.$textarea.classList.add('term-textarea');
        this.$textarea.style.position = 'absolute';
        this.$textarea.style.width = '20px';
        this.$textarea.style.height = '20px';
        this.$textarea.style.top = '0';
        this.$textarea.style.left = '0';
        this.$textarea.style.opacity = '0';
        this.$textarea.style.pointerEvents = 'none';
        this.$textarea.style.userSelect = 'none';
        this.$container.appendChild(this.$textarea);

        this.$scrollbar = document.createElement('div');
        this.$textarea.classList.add('term-scrollbar');
        this.$scrollbar.style.position = 'absolute';
        this.$scrollbar.style.width = '100%';
        this.$scrollbar.style.height = '100%';
        this.$scrollbar.style.top = '0';
        this.$scrollbar.style.right = '0';
        this.$scrollbar.style.bottom = '0';
        this.$scrollbar.style.left = '0';
        this.$scrollbar.style.overflow = 'auto';
        this.$container.appendChild(this.$scrollbar);

        this.$inner = document.createElement('div');
        this.$inner.style.height = '0';
        this.$scrollbar.appendChild(this.$inner);

        if (!document.getElementById('term-ui-style')) {
            this.$style = document.createElement('style');
            this.$style.id = 'term-ui-style';
            this.$style.textContent = [
                '.term-container:hover{cursor: text}',
                '.term-container ::-webkit-scrollbar{width: 5px;}',
                '.term-container ::-webkit-scrollbar-thumb{background-color: #666;border-radius: 5px;}',
                '.term-container ::-webkit-scrollbar-thumb:hover{background-color: #ccc;}',
            ].join('');
            document.head.appendChild(this.$style);
        }

        this.update();
    }

    update() {
        const { width, height, pixelRatio, borderRadius, boxShadow } = this.term.options;
        this.$canvas.style.width = `${width}px`;
        this.$canvas.style.height = `${height}px`;
        this.$canvas.width = width * pixelRatio;
        this.$canvas.height = height * pixelRatio;
        this.$canvas.style.borderRadius = `${borderRadius}px`;
        this.$canvas.style.boxShadow = boxShadow;
    }

    destroy() {
        this.$container.innerHTML = '';
    }
}
