const express = require('express');
const { comicList } = require('../controllers/comics.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/comics', comicList)

module.exports = router;