const Reader = require('./Reader');

const L1 = new Reader();

async function main () {
    const resp = await L1.read('./pessoas.csv');
    console.log(resp);
}

main();