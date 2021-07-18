const Reader = require('./classes/Reader');

const L1 = new Reader();

async function main () {
    const resp = await L1.read('./pessoas.csv');
}

main();