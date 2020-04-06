import { errorHandle } from './utils';

export default class Template {
    constructor(term) {
        this.term = term;
        const { container, width, height, pixelRatio, borderRadius, boxShadow } = term.options;

        this.$container = container;
        if (typeof term.options.container === 'string') {
            this.$container = document.querySelector(term.options.container);
        }

        errorHandle(
            term.constructor.instances.every((ins) => ins.template.$container !== this.$container),
            'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.',
        );

        this.$container.style.position = 'relative';
        this.$container.classList.add('term-container');

        this.$canvas = document.createElement('canvas');
        this.$canvas.classList.add('term-canvas');
        this.$canvas.style.width = `${width}px`;
        this.$canvas.style.height = `${height}px`;
        this.$canvas.width = width * pixelRatio;
        this.$canvas.height = height * pixelRatio;
        this.$canvas.style.borderRadius = `${borderRadius}px`;
        this.$canvas.style.boxShadow = boxShadow;
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

        this.$main = document.createElement('div');
        this.$main.classList.add('term-main');
        this.$main.style.position = 'absolute';
        this.$main.style.width = '100%';
        this.$main.style.height = '100%';
        this.$main.style.top = '0';
        this.$main.style.right = '0';
        this.$main.style.bottom = '0';
        this.$main.style.left = '0';
        this.$main.style.overflow = 'auto';
        this.$container.appendChild(this.$main);

        this.$scrollbar = document.createElement('div');
        this.$scrollbar.style.height = '0';
        this.$main.appendChild(this.$scrollbar);

        if (!document.getElementById('term-ui-style')) {
            this.$style = document.createElement('style');
            this.$style.id = 'term-ui-style';
            this.$style.textContent = [
                '.term-main:hover{cursor: text}',
                '.term-container ::-webkit-scrollbar{width: 5px;}',
                '.term-container ::-webkit-scrollbar-thumb{background-color: #666;border-radius: 5px;}',
                '.term-container ::-webkit-scrollbar-thumb:hover{background-color: #ccc;}',
            ].join('');
            document.head.appendChild(this.$style);
        }
    }

    destroy() {
        this.$container.innerHTML = '';
        if (!this.term.constructor.instances.length) {
            document.head.removeChild(this.$style);
        }
    }
}
