import gifshot from 'gifshot';
import { errorHandle, download } from '../share/utils';

export default class GifRecorder {
    constructor(term) {
        this.term = term;
        this.blobs = [];
        this.images = [];

        this.recording = false;
        this.timer = null;
        this.frameRate = 10;
    }

    get size() {
        return this.blobs.reduce((result, item) => {
            return result + item.size;
        }, 0);
    }

    get duration() {
        return Math.floor(this.blobs.length / this.frameRate);
    }

    start() {
        errorHandle(!this.recording, 'The recorder is recording...');
        const { $canvas } = this.term.template;
        this.recording = true;
        this.term.emit('start');
        (function loop() {
            $canvas.toBlob(
                (blob) => {
                    this.blobs.push(blob);
                    this.images.push(URL.createObjectURL(blob));
                },
                'image/png',
                0.5,
            );
            this.term.emit('recording', {
                size: this.size,
                duration: this.duration,
            });
            this.timer = setTimeout(() => loop.call(this), 1000 / this.frameRate);
        }.call(this));
    }

    end() {
        this.recording = false;
        clearTimeout(this.timer);
        this.term.emit('creating');
        const {
            options: { gifshotOpt },
            template: { $container },
        } = this.term;
        gifshot.createGIF(
            {
                gifWidth: $container.clientWidth,
                gifHeight: $container.clientHeight,
                numWorkers: 4,
                ...gifshotOpt,
                images: this.images,
            },
            (data) => {
                if (!data.err) {
                    download(data.image, `${Date.now()}.gif`);
                    this.images.forEach((item) => URL.revokeObjectURL(item));
                    this.blobs = [];
                    this.images = [];
                    this.term.emit('end');
                }
            },
        );
    }
}
