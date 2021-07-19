const router = require('express').Router();
const { ProcessConvert } = require('../controllers/ProcessController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (_req, _file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (_req, _file, callbac) => {
        callbac(null, "file_upload.csv");
    }
})

const upload = multer({storage});

router.get('/', (_req, resp) => {
    resp.render('index');
});

router.post('/upload', upload.single("file"), ProcessConvert);

module.exports = router;
