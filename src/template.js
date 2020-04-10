import { errorHandle } from './utils';

export default class Template {
    constructor(term) {
        this.term = term;
        const {
            container,
            fontFamily,
            fontSize,
            fontColor,
            pixelRatio,
            width,
            height,
            borderRadius,
            boxShadow,
            recorder,
        } = term.options;

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

        this.$textarea = document.createElement('textarea');
        this.$textarea.classList.add('term-textarea');
        this.$container.appendChild(this.$textarea);

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

        if (!document.getElementById('term-ui-style')) {
            this.$style = document.createElement('style');
            this.$style.id = 'term-ui-style';
            this.$style.textContent = [
                `.term-container{font-family:${fontFamily};font-size:${fontSize}px;color:${fontColor};position:relative;user-select:none;}`,
                '.term-container ::-webkit-scrollbar{width:5px;}',
                '.term-container ::-webkit-scrollbar-thumb{background-color:#666;border-radius:5px;}',
                '.term-container ::-webkit-scrollbar-thumb:hover{background-color:#ccc;}',
                `.term-canvas{width:100%;height:100%;border-radius:${borderRadius}px;box-shadow:${boxShadow};}`,
                '.term-textarea{position:absolute;width:20px;height:20px;opacity:0;pointer-events:none;}',
                '.term-content{position:absolute;width:100%;right:0;left:0; overflow: auto;}',
                '.term-content:hover{cursor:text}',
                '.term-recorder{display:flex;align-items:center;position:absolute;right:10px;top:10px;}',
                '.term-recorder-size, .term-recorder-duration{display:none;margin-right:10px;}',
                '.term-recorder-btn{height:18px;width:18px;background:#F44336;border-radius:3px;cursor:pointer;}',
                '.term-recorder.recording .term-recorder-btn{background:#FFC107;}',
                '.term-recorder.recording .term-recorder-size{display:block;}',
                '.term-recorder.recording .term-recorder-duration{display:block;}',
                '.term-header{position:absolute;width:100%;top:0;left:0;right:0;}',
                '.term-footer{position:absolute;width:100%;bottom:0;left:0;right:0;}',
                '.term-resize{position: absolute;right: 0;bottom: 0;width: 20px;height: 20px;cursor: nwse-resize;}',
                '.is-dragging.term-container{opacity:.95};',
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
