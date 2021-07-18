const ejs = require('ejs');

class HTMLparser {
    static Parser(){
        ejs.renderFile("./tableStructure/table");
    }
}

module.exports = HTMLparser;