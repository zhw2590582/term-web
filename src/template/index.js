import { errorHandle } from '../share/utils';

export default class Template {
    constructor(term) {
        this.term = term;
        const { container, pixelRatio, width, height, recorder } = term.options;

        this.$container = container;
        if (typeof term.options.container === 'string') {
            this.$container = document.querySelector(term.options.container);
        }

        errorHandle(
            term.constructor.instances.every((ins) => ins.template.$container !== this.$container),
            'Cannot mount multiple instances on the same dom element, please destroy the previous instance first.',
        );

        this.$container.classList.add('term-container');
        this.$container.style.width = `${width}px`;
        this.$container.style.height = `${height}px`;

        this.$canvas = document.createElement('canvas');
        this.$canvas.classList.add('term-canvas');
        this.$canvas.width = width * pixelRatio;
        this.$canvas.height = height * pixelRatio;
        this.$container.appendChild(this.$canvas);

        this.$textarea = document.createElement('textarea');
        this.$textarea.classList.add('term-textarea');
        this.$container.appendChild(this.$textarea);

        this.$header = document.createElement('div');
        this.$header.classList.add('term-header');
        this.$container.appendChild(this.$header);

        this.$content = document.createElement('div');
        this.$content.classList.add('term-content');
        this.$container.appendChild(this.$content);

        this.$scrollbar = document.createElement('div');
        this.$scrollbar.classList.add('term-scrollbar');
        this.$scrollbar.style.height = '0';
        this.$content.appendChild(this.$scrollbar);

        this.$footer = document.createElement('div');
        this.$footer.classList.add('term-footer');
        this.$container.appendChild(this.$footer);

        this.$resize = document.createElement('div');
        this.$resize.classList.add('term-resize');
        this.$footer.appendChild(this.$resize);

        if (recorder) {
            this.$recorder = document.createElement('div');
            this.$recorder.classList.add('term-recorder');
            this.$recorder.innerHTML = `
                <div class="term-recorder-size"></div>
                <div class="term-recorder-duration"></div>
                <div class="term-recorder-btn"></div> 
            `;
            this.$recorderSize = this.$recorder.querySelector('.term-recorder-size');
            this.$recorderDuration = this.$recorder.querySelector('.term-recorder-duration');
            this.$recorderBtn = this.$recorder.querySelector('.term-recorder-btn');
            this.$header.appendChild(this.$recorder);
        }
    }

    destroy() {
        this.$container.innerHTML = '';
    }
}
