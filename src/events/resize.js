export default function (term, events) {
    const { $container, $content, $resize, $canvas, $header, $footer } = term.template;
    const { pixelRatio } = term.options;

    let isResize = false;
    let lastX = 0;
    let lastY = 0;
    let lastWidth = 0;
    let lastHeight = 0;

    events.proxy($resize, 'mousedown', (event) => {
        isResize = true;
        const { clientWidth, clientHeight } = $container;
        lastWidth = clientWidth;
        lastHeight = clientHeight;
        lastX = event.pageX;
        lastY = event.pageY;
    });

    events.proxy(document, 'mousemove', (event) => {
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

    events.proxy(document, 'mouseup', () => {
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

    term.on('size', ({ header, content, footer }) => {
        $header.style.height = `${header}px`;
        $footer.style.height = `${footer}px`;
        $content.style.top = `${header}px`;
        $content.style.height = `${content}px`;
    });
}
