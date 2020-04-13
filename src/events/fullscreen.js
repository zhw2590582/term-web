import { debounce } from '../share/utils';

export default function (term, events) {
    const { $container, $header } = term.template;

    let isFullscreen = false;

    const debounceResize = debounce(() => {
        const { width, height } = document.body.getBoundingClientRect();
        term.emit('resize', { width, height });
    }, 100);

    term.on('fullscreen', (state) => {
        isFullscreen = state;
        if (state) {
            debounceResize();
            $container.classList.add('is-fullscreen');
            if (events.draggie) {
                events.draggie.disable();
            }
        } else {
            $container.classList.remove('is-fullscreen');
            term.emit('resize', {
                width: term.options.width,
                height: term.options.height,
            });
            if (events.draggie) {
                events.draggie.enable();
            }
        }
    });

    events.proxy($header, 'dblclick', () => {
        term.emit('fullscreen', !isFullscreen);
    });

    events.proxy(window, 'resize', () => {
        if (isFullscreen) {
            debounceResize();
        }
    });
}
