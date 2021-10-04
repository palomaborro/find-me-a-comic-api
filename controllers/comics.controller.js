const { getNewComics, getComic, getComics } = require("../services/comicVine");

module.exports.newComicsList = (req, res, next) => {
  getNewComics(req.query.search)
    .then((comics) => res.json(comics))
    .catch(next);
};

module.exports.comicDetail = (req, res, next) => {
  getComic(req.params.id)
    // .populate({
    //   path: "comments",
    //   populate: {
    //     path: "author",
    //     model: "User",
    //   },
    // })
    .then((comic) => res.json(comic))
    .catch(next);
};

module.exports.comicList = (req, res, next) => {
  getComics(req.query.search)
    .then((comics) => res.json(comics))
    .catch(next);
};