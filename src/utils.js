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
