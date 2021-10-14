const Comment = require('../models/Comment.model');
const { getNewComics, getNewComic, getComics, getComic} = require("../services/comicVine");

module.exports.newComicsList = (req, res, next) => {
  getNewComics(req.query.search)
    .then((comics) => res.json(comics))
    .catch(next);
};

module.exports.newComicDetail = (req, res, next) => {
  Promise.all([
    getNewComic(req.params.id),
    Comment.find({comicId: req.params.id}).populate('author')
  ])
    .then(([comic, comments]) => res.json({...comic, comments}))
    .catch(next);
};

module.exports.comicList = (req, res, next) => {
  getComics(req.query.search)
    .then((comics) => res.json(comics))
    .catch(next);
};

module.exports.comicDetail = (req, res, next) => {
  Promise.all([
    getComic(req.params.id),
    Comment.find({comicId: req.params.id}).populate('author')
  ])
  .then(([comic, comments]) => res.json({...comic, comments}))
  .catch(next);
};