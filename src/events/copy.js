export default function (term) {
    const { $content } = term.template;
    const { pixelRatio, backgroundColor } = term.options;

    const $copy = document.createElement('textarea');
    $copy.style.position = 'fixed';
    $copy.style.left = '-999px';
    $copy.style.top = '-999px';
    document.body.appendChild($copy);

    let lastLogs = [];
    let lastDblclickTime = 0;

    term.on('click', () => {
        term.drawer.render(false);
        if (lastDblclickTime && lastLogs.length && Date.now() - lastDblclickTime <= 300) {
            const { fontSize, ctx, contentWidth, contentPadding } = term.drawer;
            const text = lastLogs.reduce((result, item) => result + item.text, '');
            ctx.fillStyle = '#fff';
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
        const contentRect = $content.getBoundingClientRect();
        const left = (event.pageX - contentRect.left) * pixelRatio;
        const top = (event.pageY - contentRect.top) * pixelRatio;
        const { renderLogs, logGap, fontSize, ctx } = term.drawer;
        const index = Math.floor(top / (logGap + fontSize));
        const logs = renderLogs[index] || [];
        const target = logs.find((log) => left > log.left && log.left + log.width >= left);
        lastLogs = [];
        lastDblclickTime = 0;
        if (!target) return;
        lastLogs = logs;
        lastDblclickTime = Date.now();
        ctx.fillStyle = '#fff';
        ctx.fillRect(target.left, target.top, target.width, fontSize);
        ctx.fillStyle = backgroundColor;
        ctx.fillText(target.text, target.left, target.top);
        $copy.value = target.text;
        $copy.focus();
        $copy.select();
    });

    term.on('destroy', () => document.body.removeChild($copy));
}
