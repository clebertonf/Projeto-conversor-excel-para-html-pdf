const pdf = require('html-pdf');

class PdfWriter {
    static Writer (fileName, html) {
        pdf.create(html, {})
          .toFile(fileName, (err, _resp) => err ? console.error(err) : true);
    }
}

module.exports = PdfWriter;