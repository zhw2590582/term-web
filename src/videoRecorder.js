import { errorHandle, download } from './utils';
import { recorderOptions } from './constant';

export default class VideoRecorder {
    constructor(term) {
        this.term = term;
        this.blobs = [];
    }

    get recording() {
        return this.recorder && this.recorder.state === 'recording';
    }

    get size() {
        return this.blobs.reduce((result, item) => {
            return result + item.size;
        }, 0);
    }

    get duration() {
        return this.blobs.length;
    }

    start() {
        errorHandle(!this.recording, 'The recorder is recording...');
        const { $canvas } = this.term.template;
        this.stream = $canvas.captureStream(30);
        errorHandle(this.stream, 'Cannot get MediaStream of canvas');
        errorHandle(
            MediaRecorder && MediaRecorder.isTypeSupported(recorderOptions.mimeType),
            'Does not support recording webm video',
        );

        this.recorder = new MediaRecorder(this.stream, recorderOptions);
        this.recorder.ondataavailable = (event) => {
            if (this.recording && event.data && event.data.size > 0) {
                this.blobs.push(event.data);
                this.term.emit('recording', {
                    size: this.size,
                    duration: this.duration,
                });
            }
        };
        this.recorder.onstart = () => {
            this.term.emit('start');
        };
        this.recorder.onstop = () => {
            const url = URL.createObjectURL(new Blob(this.blobs));
            download(url, `${Date.now()}.webm`);
            URL.revokeObjectURL(url);
            this.blobs = [];
            this.term.emit('end');
        };
        this.recorder.start(1000);
    }

    end() {
        this.term.emit('creating');
        this.recorder.stop();
    }
}
