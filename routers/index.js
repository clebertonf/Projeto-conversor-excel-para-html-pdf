const router = require('express').Router();
const ConvertRouter = require('./ConvertRouter');

router.use('/', ConvertRouter);

module.exports = router;
