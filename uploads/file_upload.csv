const fs = require('fs');

    // leitura

    // 01
    try {
       const resp = fs.readFileSync('testeLeitura.txt', 'utf-8')
       console.log(resp)
    } catch (err) {
        console.log(err);
    };

    // 02
    fs.readFile('./testeLeitura.txt', 'utf-8', (err, data) => {
        if(err) return console.log('Ocorreu um erro', err);

        console.log(data)
    });

    // escrita

    // 01
    fs.writeFile('./testeEscrita.txt', 'Ola mundo!', (err) => err ? console.log(err): true);

    // 02
    // com promisses
   // fs.writeFile('./testeEscrita.txt', 'Ola mundo2').then(() => resp).catch((err) => console.log(err));


  const data = fs.readFileSync('./dados.json', 'utf-8');
  const dataJson = JSON.parse(data);
  
  dataJson.nome = "Cleberton Francisco";
  dataJson.idade = 28;

  fs.writeFile('./dados.json', JSON.stringify(dataJson), (err) => err ? console.log(err) : true)