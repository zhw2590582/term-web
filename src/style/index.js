import table from './table';

export default class Style {
    constructor(term) {
        this.table = (args) => table.call(term, args);
    }
}
