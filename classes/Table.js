class CreateTable {
    constructor(data) {
        this.header = data[0];
        data.shift();
        this.rows = data;
    }

    get LinesCount () {
        return this.rows.length;
    }

    get ColumnCount () {
        return this.header.length;
    }

}

module.exports = CreateTable;