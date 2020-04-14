export default function (term, list) {
    const h = '-';
    const v = '|';
    const s = ' ';

    function getString(array, deep = 0) {
        return array
            .map((item) => {
                const hasChild = item.child && item.child.length;
                const border = deep ? v : '';
                const value = `${s.repeat(deep ? deep * 4 - 1 : 0)}${v + h.repeat(2)} ${item.value}`;
                const child = hasChild ? `\n${getString(item.child, deep + 1)}` : '';
                return border + value + child;
            })
            .join('\n');
    }

    return term.output(getString(list));
}
