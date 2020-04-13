import validator from 'option-validator';
import Emitter from './share/emitter';
import Events from './events';
import Template from './template';
import Drawer from './drawer';
import Commander from './commander';
import Video from './recorder/video';
import Gif from './recorder/gif';
import Inquirer from './inquirer';
import Style from './style';
import * as utils from './share/utils';

let id = 0;
const instances = [];
export default class Term extends Emitter {
    static get instances() {
        return instances;
    }

    static get version() {
        return '__VERSION__';
    }

    static get utils() {
        return utils;
    }

    static get default() {
        return {
            container: '#term',
            width: 600,
            height: 500,
            actions: [],
            parseOpt: {},
            recorder: true,
            recordType: 'video',
            gifshotOpt: {},
            draggable: true,
            dragOpt: {},
            fontSize: 13,
            watermark: '',
            fontFamily: 'Arial',
            fontColor: '#b0b2b6',
            title: 'Term Web',
            prefix: 'root@linux: ~ <d color="#00f501">$</d> ',
            welcome: `Last login: ${new Date()}`,
            loading: () => '<d color="yellow">Loading...</d>',
            backgroundColor: 'rgb(42, 39, 52)',
            pixelRatio: window.devicePixelRatio,
            notFound: (val) => `-bash: <d color='red'>${val}</d>: command not found`,
        };
    }

    static get scheme() {
        return {
            container: 'string|htmldivelement',
            width: 'number',
            height: 'number',
            actions: [
                {
                    input: 'string|regexp',
                    output: 'string|function',
                },
            ],
            parseOpt: 'object',
            recorder: 'boolean',
            recordType: 'string',
            gifshotOpt: 'object',
            draggable: 'boolean',
            dragOpt: 'object',
            fontSize: 'number',
            watermark: 'string',
            fontFamily: 'string',
            fontColor: 'string',
            title: 'string',
            prefix: 'string',
            welcome: 'string',
            loading: 'function',
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

        this.isDestroy = false;
        this.isFocus = false;

        this.template = new Template(this);
        this.events = new Events(this);
        this.drawer = new Drawer(this);
        this.commander = new Commander(this);
        this.inquirer = new Inquirer(this);
        this.style = new Style(this);
        this.video = new Video(this);
        this.gif = new Gif(this);

        this.ask = this.commander.ask;
        this.type = this.commander.type;
        this.input = this.commander.input;
        this.output = this.commander.output;
        this.clear = this.drawer.clear;
        this.radio = this.inquirer.radio;
        this.checkbox = this.inquirer.checkbox;
        this.table = this.style.table;

        id += 1;
        this.id = id;
        instances.push(this);
    }

    destroy() {
        instances.splice(instances.indexOf(this), 1);
        this.events.destroy();
        this.template.destroy();
        this.emit('destroy');
        this.isDestroy = true;
    }
}
