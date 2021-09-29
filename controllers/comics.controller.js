const { getComics, getComic } = require("../services/comicVine")

module.exports.comicList = (req, res, next) => {
    getComics(req.query.search)
    .then(comics => res.json(comics))
    .catch(next) 
}

module.exports.comicDetail = (req, res, next) => {
    getComic(req.params.id)
    .then(comic => res.json(comic))
    .catch(next) 
}