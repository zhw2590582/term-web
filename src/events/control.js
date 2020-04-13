import { debounce } from '../share/utils';

export default function (term, events) {
    const {
        template: { $container, $header },
        options: { pixelRatio },
    } = term;

    let isMini = false;
    let isFullscreen = false;

    const debounceResize = debounce(() => {
        const { width, height } = document.body.getBoundingClientRect();
        term.emit('resize', { width, height });
    }, 100);

    function miniToggle() {
        if (isMini) {
            $container.classList.remove('is-mini');
            term.emit('resize', {
                width: term.options.width,
                height: term.options.height,
            });
            if (events.draggie) {
                events.draggie.enable();
            }
        } else {
            $container.classList.add('is-mini');
            if (events.draggie) {
                events.draggie.disable();
            }
        }
        isMini = !isMini;
        term.emit('mini', isMini);
    }

    function fullscreenToggle() {
        if (isFullscreen) {
            $container.classList.remove('is-fullscreen');
            term.emit('resize', {
                width: term.options.width,
                height: term.options.height,
            });
            if (events.draggie) {
                events.draggie.enable();
            }
        } else {
            debounceResize();
            $container.classList.add('is-fullscreen');
            if (events.draggie) {
                events.draggie.disable();
            }
        }
        isFullscreen = !isFullscreen;
        term.emit('fullscreen', isFullscreen);
    }

    events.proxy($header, 'click', (event) => {
        const contentRect = $header.getBoundingClientRect();
        const left = (event.pageX - contentRect.left) * pixelRatio;
        const top = (event.pageY - contentRect.top) * pixelRatio;
        const target = term.drawer.controls.findIndex(
            (item) =>
                left > item.left &&
                item.left + item.size * 2 > left &&
                top > item.top &&
                item.top + item.size * 2 > top,
        );
        if (target < 0) return;
        switch (target) {
            case 0:
                term.destroy();
                break;
            case 1:
                miniToggle();
                break;
            case 2:
                fullscreenToggle();
                break;
            default:
                break;
        }
    });

    events.proxy($header, 'dblclick', () => {
        fullscreenToggle();
    });

    events.proxy(window, 'resize', () => {
        if (isFullscreen) {
            debounceResize();
        }
    });
}
