const fs = require('fs');

class writeFile {

   static async Write(fileName, content) {
        try {
           await fs.writeFileSync(fileName, content);
          } catch (err) {
            console.error(err);
            process.exit(1);
          }
    }
}

module.exports = writeFile;
