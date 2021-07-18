const Reader = require('./classes/Reader');
const processFile = require('./classes/ProcessFile');

const L1 = new Reader();

async function main () {
    const data = await L1.read('./pessoas.csv');
    const  processData = processFile.Process(data);
}

main();