import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Translate from './translate';
import Drawer from './drawer';
import { errorHandle } from './utils';
import { INPUT, OUTPUT, NORMAL, CHECKBOX, RADIO } from './constant';

let id = 0;
const instances = [];
export default class Term extends Emitter {
    static get instances() {
        return instances;
    }

    static get INPUT() {
        return INPUT;
    }

    static get OUTPUT() {
        return OUTPUT;
    }

    static get NORMAL() {
        return NORMAL;
    }

    static get CHECKBOX() {
        return CHECKBOX;
    }

    static get RADIO() {
        return RADIO;
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
            prefix: 'root@linux: ~ $',
            width: 600,
            height: 500,
            borderRadius: 5,
            font: 'Arial',
            fontColor: '#b0b2b6',
            welcome: 'Welcome to use the Term UI',
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

        id += 1;
        this.id = id;
        instances.push(this);

        this.input({
            type: OUTPUT,
            text: this.options.welcome,
        }).input({
            type: INPUT,
        });
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

        return this;
    }

    input(data = {}) {
        if (data.type === INPUT) {
            if (data.text) {
                errorHandle(typeof data.text === 'string', `When the type is ${INPUT}, text must be a string`);
            }
        } else if (data.type === OUTPUT) {
            if (data.text) {
                if (data.style === NORMAL) {
                    errorHandle(
                        typeof data.text === 'string',
                        `When the type is ${OUTPUT} and the style is ${NORMAL}, text must be a string`,
                    );
                }
                if (data.style === CHECKBOX) {
                    errorHandle(
                        Array.isArray(data.text),
                        `When the type is ${OUTPUT} and the style is ${CHECKBOX}, text must be an array`,
                    );
                }
                if (data.style === RADIO) {
                    errorHandle(
                        Array.isArray(data.text),
                        `When the type is ${OUTPUT} and the style is ${RADIO}, text must be an array`,
                    );
                }
            } else {
                errorHandle(false, `When the type is ${OUTPUT}, the text cannot be empty`);
            }
        } else {
            errorHandle(false, `The type of the parameter on the input method must be ${INPUT} or ${OUTPUT}`);
        }
        this.drawer.update(data);
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
