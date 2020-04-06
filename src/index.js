import validator from 'option-validator';
import Emitter from './emitter';
import Events from './events';
import Template from './template';
import Decoder from './decoder';
import Drawer from './drawer';
import Commander from './commander';
import * as utils from './utils';

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

    static get utils() {
        return utils;
    }

    static get default() {
        return {
            container: '#term',
            title: 'Term UI',
            prefix: 'root@linux: ~ <i color="#00f501">$</i> ',
            width: 600,
            height: 500,
            actions: [],
            parseOpt: {},
            borderRadius: 5,
            fontSize: 13,
            fontFamily: 'Arial',
            fontColor: '#b0b2b6',
            welcome: `Last login: ${new Date()}`,
            loading: '<d color="yellow">Loading...</d>',
            boxShadow: 'rgba(0, 0, 0, 0.55) 0px 20px 68px',
            backgroundColor: 'rgb(42, 39, 52)',
            pixelRatio: window.devicePixelRatio,
            notFound: (val) => `-bash: <d color='red'>${val}</d>: command not found`,
        };
    }

    static get scheme() {
        return {
            container: 'string|htmldivelement',
            title: 'string',
            prefix: 'string',
            width: 'number',
            height: 'number',
            actions: [
                {
                    input: 'string|regexp',
                    output: 'string|function',
                },
            ],
            parseOpt: 'object',
            borderRadius: 'number',
            fontSize: 'number',
            fontFamily: 'string',
            fontColor: 'string',
            welcome: 'string',
            loading: 'string',
            boxShadow: 'string',
            backgroundColor: 'string',
            pixelRatio: 'number',
            notFound: 'function',
        };
    }

    constructor(options = {}) {
        super();

        this.options = validator(
            {
                ...Term.default,
                ...options,
            },
            Term.scheme,
        );

        this.template = new Template(this);
        this.events = new Events(this);
        this.decoder = new Decoder(this);
        this.drawer = new Drawer(this);
        this.commander = new Commander(this);

        this.isFocus = false;
        this.isDestroy = false;

        this.input = this.commander.input;
        this.output = this.commander.output;

        id += 1;
        this.id = id;
        instances.push(this);
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
        instances.splice(instances.indexOf(this), 1);
        this.isDestroy = true;
        this.events.destroy();
        this.template.destroy();
    }
}
