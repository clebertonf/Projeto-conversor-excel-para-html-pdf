const router = require('express').Router();
const { ProcessConvert } = require('../controllers/ProcessController');
const multer = require('multer');

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

router.post('/upload', upload.single("file"), ProcessConvert);

module.exports = router;
