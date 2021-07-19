const router = require('express').Router();

const ConvertController = require('../controllers/ConvertController');
const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callbac) => {
        callbac(null, "file_upload.csv");
    }
})

const upload = multer({storage});

router.get('/', (req, resp) => {
    resp.render('index');
});

router.post('/upload', upload.single("file"), (req, resp) => {
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
        fs.unlink('./uploads/file_upload.csv', (err) => err ? console.log(err) : true);

        console.log('Deletou');
    }, 8000);
   
});

module.exports = router;
