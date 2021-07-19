const express = require('express');
const ConvertController = require('./controllers/ConvertController');
const multer = require('multer');
const fs = require('fs')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callbac) => {
        callbac(null, "file_upload.csv");
    }
})

const upload = multer({storage});

app.get('/', (req, resp) => {
    resp.render('index');
});

app.post('/upload', upload.single("file"), (req, resp) => {
    const { radio } = req.body;
    ConvertController.main();

    setTimeout(() => {
        if(radio === 'html') {
            resp.download('./file_upload.html', 'file_upload.html')
      }
      
      if(radio === 'pdf') {
            resp.download('./file_upload.pdf', 'file_upload.pdf')
      }
    },1000)

    setTimeout(() => {
        fs.unlink('./file_upload.html', (err) => err ? console.log(err) : true);
        fs.unlink('./file_upload.pdf', (err) => err ? console.log(err) : true);

        console.log('Deletou');
    }, 300000);
   
});

app.listen(3000, () => console.log('Online'));
