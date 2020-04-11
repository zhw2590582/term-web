import Draggabilly from 'draggabilly';

export default class Events {
    constructor(term) {
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);

        const {
            options: { recorder, draggable, dragOpt, pixelRatio, recordType },
            template: {
                $container,
                $canvas,
                $textarea,
                $content,
                $scrollbar,
                $header,
                $footer,
                $recorder,
                $recorderSize,
                $recorderDuration,
                $recorderBtn,
                $resize,
            },
        } = term;

        this.proxy(document, ['click', 'contextmenu'], (event) => {
            if (event.composedPath && event.composedPath().indexOf($content) > -1) {
                term.isFocus = true;
                term.emit('focus');
            } else {
                term.isFocus = false;
                term.emit('blur');
            }
        });

        let isResize = false;
        let lastX = 0;
        let lastY = 0;
        let lastWidth = 0;
        let lastHeight = 0;

        this.proxy($resize, 'mousedown', (event) => {
            isResize = true;
            const { clientWidth, clientHeight } = $container;
            lastWidth = clientWidth;
            lastHeight = clientHeight;
            lastX = event.pageX;
            lastY = event.pageY;
        });

        this.proxy(document, 'mousemove', (event) => {
            if (isResize) {
                $content.style.visibility = 'hidden';
                const width = lastWidth + event.pageX - lastX;
                const height = lastHeight + event.pageY - lastY;
                if (width >= 300 && height >= 300) {
                    $container.style.width = `${width}px`;
                    $container.style.height = `${height}px`;
                }
            }
        });

        this.proxy(document, 'mouseup', () => {
            if (isResize) {
                isResize = false;
                lastX = 0;
                lastY = 0;
                lastWidth = 0;
                lastHeight = 0;
                $content.style.visibility = 'visible';
                const { clientWidth, clientHeight } = $container;
                term.emit('resize', { width: clientWidth, height: clientHeight });
            }
        });

        term.on('resize', ({ width, height }) => {
            $container.style.width = `${width}px`;
            $container.style.height = `${height}px`;
            $canvas.width = width * pixelRatio;
            $canvas.height = height * pixelRatio;
            term.drawer.init();
        });

        if (draggable) {
            this.draggie = new Draggabilly($container, {
                handle: '.term-header',
                ...dragOpt,
            });
            term.on('destroy', () => {
                this.draggie.destroy();
            });
        }

        this.proxy($textarea, 'input', () => {
            term.emit('input', $textarea.value.trim());
        });

        this.proxy($textarea, 'paste', () => {
            term.emit('input', $textarea.value.trim());
        });

        this.proxy($textarea, 'keydown', (event) => {
            const key = event.keyCode;
            if (key === 13) {
                setTimeout(() => {
                    term.emit('enter', $textarea.value.trim());
                    $textarea.value = '';
                });
            }
            if ([37, 38, 39, 40].includes(key)) {
                $textarea.blur();
                setTimeout(() => $textarea.focus());
            }
            term.emit('keydown', event);
        });

        this.proxy($recorderBtn, 'click', () => {
            if (term[recordType].recording) {
                term[recordType].end();
            } else {
                term[recordType].start();
            }
        });

        let canRenderByTop = false;
        this.proxy($content, 'scroll', () => {
            if (canRenderByTop) {
                term.drawer.renderByTop($content.scrollTop);
            } else {
                canRenderByTop = true;
            }
        });

        term.on('scrollTop', (scrollTop) => {
            if (canRenderByTop) {
                canRenderByTop = false;
            } else {
                $content.scrollTop = scrollTop;
            }
        });

        term.on('scrollHeight', (scrollHeight) => {
            $scrollbar.style.height = `${scrollHeight}px`;
        });

        term.on('cursor', ({ left, top }) => {
            $textarea.style.top = `${top}px`;
            $textarea.style.left = `${left}px`;
        });

        term.on('size', ({ header, content, footer }) => {
            $header.style.height = `${header}px`;
            $footer.style.height = `${footer}px`;
            $content.style.top = `${header}px`;
            $content.style.height = `${content}px`;
        });

        term.on('focus', () => {
            $textarea.focus();
        });

        term.on('start', () => {
            if (recorder) {
                $recorder.classList.add('recording');
            }
        });

        term.on('recording', ({ size, duration }) => {
            if (recorder) {
                $recorderSize.innerText = `${Math.floor(size / 1024 / 1024) || 0}mb`;
                $recorderDuration.innerText = `${duration || 0}s`;
            }
        });

        term.on('creating', () => {
            if (recorder) {
                $recorderSize.innerText = `${recordType} is creating...`;
                $recorderDuration.innerText = '';
            }
        });

        term.on('end', () => {
            if (recorder) {
                $recorder.classList.remove('recording');
            }
        });
    }

    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) {
            name.forEach((item) => this.proxy(target, item, callback, option));
        } else {
            target.addEventListener(name, callback, option);
            this.destroyEvents.push(() => {
                target.removeEventListener(name, callback, option);
            });
        }
    }

    destroy() {
        this.destroyEvents.forEach((event) => event());
    }
}
