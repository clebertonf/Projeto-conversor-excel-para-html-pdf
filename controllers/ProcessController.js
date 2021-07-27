const fs = require('fs');
const ConvertController = require('./ConvertController');

const ProcessConvert = (req, resp) => {
  const { radio } = req.body;

  ConvertController.main();

  setTimeout(() => {
    if (radio === 'html') {
      resp.download('./file_upload.html', 'file_upload.html');
    }

    if (radio === 'pdf') {
      resp.download('./file_upload.pdf', 'file_upload.pdf');
    }
  }, 1000);

  setTimeout(() => {
    fs.unlink('./file_upload.html', (err) => (err ? console.log(err) : true));
    fs.unlink('./file_upload.pdf', (err) => (err ? console.log(err) : true));
    fs.unlink('./uploads/file_upload.csv', (err) => (err ? console.log(err) : true));
  }, 180000);
};

module.exports = { ProcessConvert };
