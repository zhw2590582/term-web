export class TermError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TermError';
    }
}

export function errorHandle(condition, msg) {
    if (!condition) {
        throw new TermError(msg);
    }
    return condition;
}

export function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

export function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
