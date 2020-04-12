import click from './click';
import resize from './resize';
import drag from './drag';
import input from './input';
import record from './record';
import scroll from './scroll';
import copy from './copy';

export default class Events {
    constructor(term) {
        this.destroyEvents = [];
        this.proxy = this.proxy.bind(this);

        click(term, this);
        resize(term, this);
        drag(term, this);
        input(term, this);
        record(term, this);
        scroll(term, this);
        copy(term, this);
    }

    proxy(target, name, callback, option = {}) {
        if (Array.isArray(name)) {
            name.forEach((item) => this.proxy(target, item, callback, option));
        } else {
            target.addEventListener(name, callback, option);
            this.destroyEvents.push(() => {
                target.removeEventListener(name, callback, option);
            });
        }
    }

    destroy() {
        this.destroyEvents.forEach((event) => event());
    }
}
