const express = require('express');
const { comicList, comicDetail } = require('../controllers/comics.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/new', comicList);
router.get('/new/:id', comicDetail);

module.exports = router;