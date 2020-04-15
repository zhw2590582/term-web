export default function (term, events) {
    const { $copy } = term.template;

    let lastLogs = [];
    let lastDblclickTime = 0;

    term.on('click', () => {
        term.drawer.render(false);
        if (lastDblclickTime && lastLogs.length && Date.now() - lastDblclickTime <= 300) {
            const { fontSize, ctx, contentWidth, contentPadding } = term.drawer;
            const { backgroundColor, fontColor } = term.options;
            const text = lastLogs.reduce((result, item) => result + item.text, '');
            ctx.fillStyle = fontColor;
            ctx.fillRect(contentPadding[3], lastLogs[0].top, contentWidth, fontSize);
            ctx.fillStyle = backgroundColor;
            ctx.fillText(text, contentPadding[3], lastLogs[0].top);
            $copy.value = text;
            $copy.focus();
            $copy.select();
        } else {
            lastLogs = [];
            lastDblclickTime = 0;
            $copy.value = '';
        }
    });

    term.on('dblclick', (event) => {
        term.drawer.render(false);
        const { logs, log } = events.getLogFromEvent(event);
        lastLogs = [];
        lastDblclickTime = 0;
        $copy.value = '';
        if (!log) return;
        const { ctx, fontSize } = term.drawer;
        const { backgroundColor, fontColor } = term.options;
        lastLogs = logs;
        lastDblclickTime = Date.now();
        ctx.fillStyle = fontColor;
        ctx.fillRect(log.left, log.top, log.width, fontSize);
        ctx.fillStyle = backgroundColor;
        ctx.fillText(log.text, log.left, log.top);
        $copy.value = log.text;
        $copy.focus();
        $copy.select();
    });

    term.on('blur', () => {
        term.drawer.render(false);
        lastLogs = [];
        lastDblclickTime = 0;
        $copy.value = '';
    });
}
