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

export function download(url, name) {
    const elink = document.createElement('a');
    elink.style.display = 'none';
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
}
