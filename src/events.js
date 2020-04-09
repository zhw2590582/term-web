import Draggabilly from 'draggabilly';

export default class Events {
    constructor(term) {
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);

        const {
            options: { recorder, draggable, dragOpt },
            template: { $recorder, $recorderSize, $recorderDuration, $recorderBtn },
            template: { $container, $textarea, $content, $scrollbar, $header, $footer },
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
            if (term.recorder.recording) {
                term.recorder.end();
            } else {
                term.recorder.start();
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

        term.on('scroll', ({ scrollHeight, scrollTop }) => {
            if (scrollHeight) {
                $scrollbar.style.height = `${scrollHeight}px`;
            }
            if (scrollTop) {
                if (canRenderByTop) {
                    canRenderByTop = false;
                } else {
                    $content.scrollTop = scrollTop;
                }
            }
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
                $recorderSize.innerText = `${Math.floor(size / 1024) || 0}kb`;
                $recorderDuration.innerText = `${duration || 0}s`;
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
