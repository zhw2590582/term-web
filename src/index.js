import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';

let id = 0;
const instances = [];
export default class Term extends Emitter {
    static get instances() {
        return instances;
    }

    static get version() {
        return '__VERSION__';
    }

    static get env() {
        return '__ENV__';
    }

    static get default() {
        return {};
    }

    static get scheme() {
        return {};
    }

    constructor(options = {}) {
        super();

        this.events = new Events(this);

        id += 1;
        this.id = id;
        instances.push(this);
    }

    destroy() {
        this.isDestroy = true;
        this.events.destroy();
        instances.splice(instances.indexOf(this), 1);
    }
}
