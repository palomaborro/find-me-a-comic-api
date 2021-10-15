const express = require('express');
const comicsController = require('../controllers/comics.controller');
const router = express.Router();
const commentsController = require('../controllers/comment.controller')
const authMiddleware = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const listController = require('../controllers/list.controller');
const upload = require('./storage.config');

// Comics
router.get('/new', comicsController.newComicsList);
router.get('/new/:id', comicsController.newComicDetail);
router.get('/comics', comicsController.comicList);
router.get('/comics/:id', comicsController.comicDetail);

// Comments
router.post('/comics/:id/comments', commentsController.addComicComment);
router.post('/new/:id/comments', commentsController.addComicComment);

// Auth
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);

// User
router.get('/mycollection', authMiddleware.isAuthenticated, userController.getCurrentUser);
router.post('/users', authMiddleware.isNotAuthenticated, upload.single('image'), userController.createUser);

// Lists
router.get('/lists', authMiddleware.isAuthenticated, listController.getLists);
router.get('/mycollection/:list', authMiddleware.isAuthenticated, listController.getUserList);
router.post('/mycollection/:lists', authMiddleware.isAuthenticated, listController.createList);
router.put('/lists/:id', authMiddleware.isAuthenticated, listController.addComicToList);
router.delete('/mycollection/lists/:id', authMiddleware.isAuthenticated, listController.deleteList);

module.exports = router;