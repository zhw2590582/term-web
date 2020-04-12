export default function (term, events) {
    const { $content, $scrollbar } = term.template;

    let canRenderByTop = false;
    events.proxy($content, 'scroll', () => {
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
}
