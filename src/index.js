import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Decoder from './decoder';
import Drawer from './drawer';
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
            prefix: 'root@linux: ~ $ ',
            width: 600,
            height: 500,
            borderRadius: 5,
            font: 'Arial',
            fontColor: '#b0b2b6',
            welcome: 'Last login: Sat Apr  4 11:06:08 on ttys002',
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
            fontColor: 'string',
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

        this.template = new Template(this);
        this.events = new Events(this);
        this.decoder = new Decoder(this);
        this.drawer = new Drawer(this);

        this.isFocus = false;
        this.isDestroy = false;

        id += 1;
        this.id = id;
        instances.push(this);

        this.draw({
            type: OUTPUT,
            text: this.options.welcome,
        }).draw({
            type: INPUT,
            text: '',
        });
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

        return this;
    }

    draw(data) {
        this.drawer.draw(data);
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
