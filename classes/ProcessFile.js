class processFile {
    
    static Process(data) {
        const dataProcess = data.split("\n")
        const rows = [];

        dataProcess.forEach(element => {
            let dataLine = element.split(",");
            rows.push(dataLine);
        });

       return rows;
    }
}

module.exports = processFile
