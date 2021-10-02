const express = require('express');
const { comicList, comicDetail } = require('../controllers/comics.controller');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const upload = require('./storage.config');

// Comics
router.get('/new', comicList);
router.get('/new/:id', comicDetail);

// Auth
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);

// User
router.get('/mycollection', authMiddleware.isAuthenticated, userController.getCurrentUser);
router.post('/users', authMiddleware.isNotAuthenticated, upload.single('image'), userController.createUser);

module.exports = router;