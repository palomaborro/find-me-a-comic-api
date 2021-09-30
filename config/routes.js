const express = require('express');
const { comicList, comicDetail } = require('../controllers/comics.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller')

// Comics
router.get('/new', comicList);
router.get('/new/:id', comicDetail);

// User
router.post('/login', authController.login);

module.exports = router;