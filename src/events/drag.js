import Draggabilly from 'draggabilly';

export default function (term, events) {
    const { dragOpt, draggable } = term.options;
    const { $container } = term.template;

    if (draggable) {
        events.draggie = new Draggabilly($container, {
            handle: '.term-header',
            ...dragOpt,
        });

        term.on('destroy', () => {
            events.draggie.destroy();
        });
    }
}
