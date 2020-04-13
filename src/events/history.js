import { INPUT } from '../share/constant';

export default function (term) {
    const { $textarea } = term.template;
    let currentIndex = 0;

    function history(step) {
        const { cacheEmits } = term.drawer;
        const inputs = cacheEmits.filter((item, index) => {
            return item.type === INPUT && item.text.trim() && index !== cacheEmits.length - 1;
        });
        const input = inputs[inputs.length + currentIndex + step];
        if (input) {
            currentIndex += step;
            $textarea.value = input.text;
            term.drawer.emit({
                type: INPUT,
                text: input.text,
                replace: true,
            });
        }
    }

    term.on('enter', () => {
        currentIndex = 0;
    });

    term.on('history', (step) => {
        history(step);
    });
}
