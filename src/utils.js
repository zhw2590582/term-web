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

export function mergeDeep(...objects) {
    const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);
    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            } else if (isObject(pVal) && isObject(oVal) && !(oVal instanceof Element)) {
                prev[key] = mergeDeep(pVal, oVal);
            } else {
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}

export function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
}

export function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
