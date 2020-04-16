export default function (term, events) {
    const { $copy } = term.template;

    let lastLine = [];
    let lastDblclickTime = 0;

    term.on('click', () => {
        term.drawer.render(false);
        if (lastDblclickTime && lastLine.length && Date.now() - lastDblclickTime <= 300) {
            const { fontSize, ctx, contentWidth, contentPadding } = term.drawer;
            const { background, color } = term.options;
            const text = lastLine.reduce((result, item) => result + item.text, '');
            ctx.fillStyle = color;
            ctx.fillRect(contentPadding[3], lastLine[0].top, contentWidth, fontSize);
            ctx.fillStyle = background;
            ctx.fillText(text, contentPadding[3], lastLine[0].top);
            $copy.value = text;
            $copy.focus();
            $copy.select();
        } else {
            lastLine = [];
            lastDblclickTime = 0;
            $copy.value = '';
        }
    });

    term.on('dblclick', (event) => {
        term.drawer.render(false);
        const { line, log } = events.getLogFromEvent(event);
        lastLine = [];
        lastDblclickTime = 0;
        $copy.value = '';
        if (!log) return;
        const { ctx, fontSize } = term.drawer;
        const { background, color } = term.options;
        lastLine = line;
        lastDblclickTime = Date.now();
        ctx.fillStyle = color;
        ctx.fillRect(log.left, log.top, log.width, fontSize);
        ctx.fillStyle = background;
        ctx.fillText(log.text, log.left, log.top);
        $copy.value = log.text;
        $copy.focus();
        $copy.select();
    });

    term.on('blur', () => {
        term.drawer.render(false);
        lastLine = [];
        lastDblclickTime = 0;
        $copy.value = '';
    });
}
