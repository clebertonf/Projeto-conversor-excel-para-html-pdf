const fs = require('fs');

class fileReader {
  async read(filePath) {
    try {
      return await fs.readFileSync(filePath, 'utf-8');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
}

module.exports = fileReader;
