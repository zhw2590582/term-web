import validator from 'option-validator';
import { INPUT, OUTPUT } from '../share/constant';
import { escape, uuid } from '../share/utils';

export default class Drawer {
    constructor(term) {
        this.term = term;

        const { pixelRatio, fontSize, backgroundColor } = term.options;

        this.scrollHeight = 0;
        this.scrollTop = 0;
        this.cursorColor = ['#FFF', backgroundColor];
        this.cursorSize = 5 * pixelRatio;
        this.logGap = 10 * pixelRatio;
        this.fontSize = fontSize * pixelRatio;
        this.btnColor = ['#FF5F56', '#FFBD2E', '#27C93F'];
        this.btnSize = 6 * pixelRatio;
        this.contentPadding = [45, 15, 15, 15].map((item) => item * pixelRatio);
        this.$tmp = document.createElement('div');

        this.cacheEmits = [];
        this.cacheLogs = [];
        this.renderLogs = [];

        this.emit = this.emit.bind(this);
        this.clear = this.clear.bind(this);

        this.init();

        this.cursor = false;
        (function loop() {
            this.cursorTimer = setTimeout(() => {
                this.cursor = !this.cursor;
                this.renderCursor();
                loop.call(this);
            }, 500);
        }.call(this));
    }

    init() {
        const {
            template: { $canvas },
            options: { pixelRatio, fontFamily },
        } = this.term;

        this.canvasHeight = $canvas.height;
        this.canvasWidth = $canvas.width;
        this.contentHeight = this.canvasHeight - this.contentPadding[0] - this.contentPadding[2];
        this.contentWidth = this.canvasWidth - this.contentPadding[3];
        this.maxLength = Math.floor(this.contentHeight / (this.fontSize + this.logGap));

        this.ctx = $canvas.getContext('2d');
        this.ctx.font = `${this.fontSize}px ${fontFamily}`;
        this.ctx.textBaseline = 'top';

        this.term.emit('size', {
            header: this.contentPadding[0] / pixelRatio,
            content: this.contentHeight / pixelRatio,
            footer: this.contentPadding[2] / pixelRatio,
        });

        this.render();
    }

    get lastCacheLog() {
        const logs = this.cacheLogs[this.cacheLogs.length - 1];
        return logs && logs[logs.length - 1];
    }

    get lastRenderLog() {
        const logs = this.renderLogs[this.renderLogs.length - 1];
        return logs && logs[logs.length - 1];
    }

    get cacheEditable() {
        return this.term.isFocus && this.lastCacheLog && this.lastCacheLog.type === INPUT;
    }

    get renderEditable() {
        return this.cacheEditable && this.lastCacheLog === this.lastRenderLog;
    }

    get cursorPos() {
        if (this.renderEditable) {
            const { pixelRatio } = this.term.options;
            const left = this.lastRenderLog.left + this.lastRenderLog.width + pixelRatio * 4;
            const top = this.contentPadding[0] + (this.fontSize + this.logGap) * (this.renderLogs.length - 1);
            return { left, top };
        }
        return { left: 0, top: 0 };
    }

    render(isAutoScroll = true) {
        this.renderBackground();
        this.renderTopbar();
        this.renderContent(isAutoScroll);
        return this;
    }

    renderBackground() {
        const { backgroundColor } = this.term.options;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    renderTopbar() {
        const { title, fontColor } = this.term.options;
        this.ctx.fillStyle = fontColor;
        const { width } = this.ctx.measureText(title);
        this.ctx.fillText(title, this.canvasWidth / 2 - width / 2, this.contentPadding[1] - this.btnSize / 2);
        this.btnColor.forEach((item, index) => {
            this.ctx.beginPath();
            this.ctx.arc(
                this.contentPadding[3] + this.btnSize + index * this.btnSize * 3.6,
                this.contentPadding[1] + this.btnSize,
                this.btnSize,
                0,
                360,
                false,
            );
            this.ctx.fillStyle = item;
            this.ctx.fill();
            this.ctx.closePath();
        });
    }

    renderContent(isAutoScroll) {
        const { pixelRatio, fontColor } = this.term.options;

        if (this.renderLogs.length) {
            for (let i = 0; i < this.renderLogs.length; i += 1) {
                const logs = this.renderLogs[i];
                if (logs && logs.length) {
                    for (let j = 0; j < logs.length; j += 1) {
                        const log = logs[j];
                        const top = this.contentPadding[0] + (this.fontSize + this.logGap) * i;
                        if (log.background) {
                            this.ctx.fillStyle = log.background;
                            this.ctx.fillRect(log.left, top, log.width, this.fontSize);
                        }
                        this.ctx.fillStyle = log.color || fontColor;
                        this.ctx.fillText(log.text, log.left, top);
                    }
                }
            }
        }

        if (this.renderEditable) {
            const { left, top } = this.cursorPos;
            this.term.emit('cursor', {
                left: left / pixelRatio,
                top: top / pixelRatio,
            });
        }

        this.scrollHeight = (this.cacheLogs.length * (this.fontSize + this.logGap)) / pixelRatio;
        this.term.emit('scrollHeight', this.scrollHeight);

        if (isAutoScroll) {
            this.autoScroll();
        }
    }

    autoScroll() {
        const { pixelRatio } = this.term.options;
        const lastlogs = this.renderLogs[this.renderLogs.length - 1];
        const lastIndex = this.cacheLogs.indexOf(lastlogs);
        this.scrollTop = ((lastIndex + 1) * (this.fontSize + this.logGap) - this.contentHeight) / pixelRatio;
        this.term.emit('scrollTop', this.scrollTop);
    }

    renderByIndex(index) {
        this.renderLogs = this.cacheLogs.slice(index, index + this.maxLength);
        this.render(false);
    }

    renderByTop(top) {
        const { pixelRatio } = this.term.options;
        const index = Math.ceil((top * pixelRatio) / (this.fontSize + this.logGap));
        this.renderByIndex(index);
    }

    renderCursor() {
        const { left, top } = this.cursorPos;
        if (this.renderEditable && left && top) {
            this.ctx.fillStyle = this.cursor ? this.cursorColor[0] : this.cursorColor[1];
            this.ctx.fillRect(left, top, this.cursorSize, this.fontSize);
        }
    }

    emit(data) {
        validator(data, {
            type: (type) => {
                if (![INPUT, OUTPUT].includes(type)) {
                    return `The type must be "${INPUT}" or "${OUTPUT}"`;
                }
                return true;
            },
            text: 'string',
            prefix: 'undefined|string',
            replace: 'undefined|boolean',
        });

        if (data.replace) {
            this.cacheEmits.pop();
            const lastLogs = this.cacheLogs[this.cacheLogs.length - 1];
            if (lastLogs && lastLogs.group) {
                this.cacheLogs = this.cacheLogs.filter((item) => item.group !== lastLogs.group);
            }
        }

        this.cacheEmits.push({ ...data });
        const logs = this.parse(data);
        this.cacheLogs.push(...logs);
        this.renderLogs = this.cacheLogs.slice(-this.maxLength);
        this.render();
    }

    parse(data) {
        const { prefix } = this.term.options;

        if (data.type === INPUT) {
            data.text = (data.prefix || prefix) + escape(data.text);
        }

        const group = uuid();
        const result = [];
        const lines = data.text.split(/\r?\n/);
        const scriptReg = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        let index = 0;
        let left = this.contentPadding[3];
        for (let i = 0; i < lines.length; i += 1) {
            const line = lines[i];
            this.$tmp.innerHTML = line.replace(scriptReg, '');
            for (let j = 0; j < this.$tmp.childNodes.length; j += 1) {
                const child = this.$tmp.childNodes[j];
                const word = child.textContent;
                const wordSize = this.ctx.measureText(word).width;
                const color = child.getAttribute ? child.getAttribute('color') : '';
                const background = child.getAttribute ? child.getAttribute('background') : '';

                const nextWordWidth = left + wordSize;
                if (nextWordWidth > this.contentWidth) {
                    let textTmp = '';
                    let isNewLine = false;
                    const lastLeft = left;
                    const letters = [...word];
                    for (let k = 0; k < letters.length; k += 1) {
                        const letter = letters[k];
                        const letterSize = this.ctx.measureText(letter).width;
                        const nextLetterWidth = left + letterSize;
                        if (nextLetterWidth <= this.contentWidth) {
                            textTmp += letter;
                            left = nextLetterWidth;
                        } else {
                            const log = {
                                ...data,
                                width: this.ctx.measureText(textTmp).width,
                                left: isNewLine ? this.contentPadding[3] : lastLeft,
                                text: textTmp,
                                color,
                                background,
                            };

                            if (result[index]) {
                                result[index].push(log);
                            } else {
                                result[index] = [log];
                                result[index].group = group;
                            }

                            index += 1;
                            textTmp = letter;
                            isNewLine = true;
                            left = this.contentPadding[3] + letterSize;
                        }
                    }

                    const log = {
                        ...data,
                        width: this.ctx.measureText(textTmp).width,
                        left: this.contentPadding[3],
                        text: textTmp,
                        color,
                        background,
                    };

                    if (result[index]) {
                        result[index].push(log);
                    } else {
                        result[index] = [log];
                        result[index].group = group;
                    }
                } else {
                    const log = {
                        ...data,
                        width: wordSize,
                        text: word,
                        left,
                        color,
                        background,
                    };
                    if (result[index]) {
                        result[index].push(log);
                    } else {
                        result[index] = [log];
                        result[index].group = group;
                    }
                    left = nextWordWidth;
                }
            }
            index += 1;
            left = this.contentPadding[3];
        }

        return result.filter(Boolean);
    }

    clear() {
        this.cacheLogs = [];
        this.renderLogs = [];
        this.render();
    }
}
