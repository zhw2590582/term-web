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

export function download(url, name) {
    const elink = document.createElement('a');
    elink.style.display = 'none';
    elink.href = url;
    elink.download = name;
    document.body.appendChild(elink);
    elink.click();
    document.body.removeChild(elink);
}

export function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16),
    );
}

export function escape(str) {
    return str.replace(
        /[&<>'"]/g,
        (tag) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;',
            }[tag] || tag),
    );
}

export function unescape(str) {
    return str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        (tag) =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&quot;': '"',
            }[tag] || tag),
    );
}
