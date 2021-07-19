const Reader = require('./classes/Reader');
const processFile = require('./classes/ProcessFile');
const CreateTable = require('./classes/Table');
const HTMLparser = require('./classes/HTMLpaser');
const writeFile = require('./classes/writeFile');

const L1 = new Reader();

async function main () {
    const data = await L1.read('./pessoas.csv');
    const  processData = processFile.Process(data);

    const Table = new CreateTable(processData);

    const html = await HTMLparser.Parser(Table);

    writeFile.Write(`${Date.now()}.html`, html)
}

main();