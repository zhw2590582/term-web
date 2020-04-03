import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Translate from './translate';
import Drawer from './drawer';
import { errorHandle } from './utils';
import { INPUT, OUTPUT } from './constant';

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
            prefix: 'root@linux:~$',
            width: 600,
            height: 500,
            borderRadius: 5,
            font: 'Arial',
            welcome: '🎉 Welcome to use the Term UI 🎉',
            boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
            backgroundColor: 'rgb(42, 39, 52)',
            pixelRatio: window.devicePixelRatio,
        };
    }

    static get scheme() {
        return {
            container: 'string|htmldivelement',
            title: 'string',
            prefix: 'string',
            width: 'number',
            height: 'number',
            borderRadius: 'number',
            font: 'string',
            welcome: 'string',
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

        if (this.options.welcome) {
            this.input({
                type: 'output',
                text: this.options.welcome.repeat(10),
            });
            this.input({
                type: 'input',
                text: this.options.title.repeat(100),
            });
        }

        id += 1;
        this.id = id;
        instances.push(this);
    }

    setOptions(options = {}) {
        errorHandle(validator.kindOf(options) === 'object', 'setOptions expects to receive object as a parameter');

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

    input(data = { type: '', text: '' }) {
        errorHandle(
            data.type === INPUT || data.type === OUTPUT,
            `The type of the parameter on the input method must be ${INPUT} or ${OUTPUT}`,
        );
        if (data.text) {
            errorHandle(
                typeof data.text === 'string',
                `The text of the parameter on the input method must be a string`,
            );
        }
        this.drawer.update(data);
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
