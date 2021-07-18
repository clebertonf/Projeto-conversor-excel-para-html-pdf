const ejs = require('ejs');

class HTMLparser {
   static async Parser(table){
       return await ejs.renderFile("./tableStructure/table.ejs", { header: table.header });
    }
}

module.exports = HTMLparser;