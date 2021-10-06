const express = require('express');
const { newComicsList, newComicDetail, comicList, comicDetail } = require('../controllers/comics.controller');
const router = express.Router();
const { addComicComment } = require('../controllers/comment.controller')
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const upload = require('./storage.config');

// Comics
router.get('/new', newComicsList);
router.get('/new/:id', newComicDetail);
router.post('/new/:id/comments', authMiddleware.isAuthenticated, addComicComment);
router.get('/comics', comicList);
router.get('/comics/:id', comicDetail);
router.post('/comics/:id/comments', authMiddleware.isAuthenticated, addComicComment);

// Auth
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);

// User
router.get('/mycollection', authMiddleware.isAuthenticated, userController.getCurrentUser);
router.post('/users', authMiddleware.isNotAuthenticated, upload.single('image'), userController.createUser);


module.exports = router;