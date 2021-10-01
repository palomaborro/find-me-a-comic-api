const express = require('express');
const { comicList, comicDetail } = require('../controllers/comics.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

// Comics
router.get('/new', comicList);
router.get('/new/:id', comicDetail);

// User
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);
router.get('/mycollection', authMiddleware.isAuthenticated, userController.getCurrentUser);

module.exports = router;