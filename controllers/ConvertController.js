const Reader = require('../classes/Reader');
const processFile = require('../classes/ProcessFile');
const CreateTable = require('../classes/Table');
const HTMLparser = require('../classes/HTMLpaser');
const writeFile = require('../classes/writeFile');
const PdfWriter = require('../classes/PdfWrite');




async function main () {

    const L1 = new Reader();
    const data = await L1.read('./uploads/file_upload.csv');
    const  processData = processFile.Process(data);

    const Table = new CreateTable(processData);

    const html = await HTMLparser.Parser(Table);

    await writeFile.Write(`file_upload.html`, html);
    
    PdfWriter.Writer(`file_upload.pdf`, html);
}

module.exports = {main};
