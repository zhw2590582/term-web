import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Translate from './translate';
import Drawer from './drawer';

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
        return {
            container: '#term',
            title: 'Term UI',
            prefix: 'root@linux:~$ ',
            width: 400,
            height: 300,
            borderRadius: 5,
            font: 'Arial',
            welcome: '🎉 Welcome to Term UI 🎉',
            boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
            backgroundColor: 'rgb(42, 39, 52)',
            pixelRatio: window.devicePixelRatio,
        };
    }

    static get scheme() {
        return {
            container: 'string|htmldivelement',
            width: 'number',
            height: 'number',
            borderRadius: 'number',
            font: 'string',
            boxShadow: 'string',
            backgroundColor: 'string',
            pixelRatio: 'number',
        };
    }

    constructor(options = {}) {
        super();

        this.options = {};
        this.setOptions(options);

        this.events = new Events(this);
        this.template = new Template(this);
        this.translate = new Translate(this);
        this.drawer = new Drawer(this);

        id += 1;
        this.id = id;
        instances.push(this);
    }

    setOptions(options = {}) {
        if (typeof options.container === 'string') {
            options.container = document.querySelector(options.container);
        }

        this.options = validator(
            {
                ...Term.default,
                ...this.options,
                ...options,
            },
            Term.scheme,
        );

        this.emit('options', this.options);
        return this;
    }

    exportPng() {
        return this;
    }

    exportGif() {
        return this;
    }

    exportVideo() {
        return this;
    }

    destroy() {
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
        instances.splice(instances.indexOf(this), 1);
    }
}
