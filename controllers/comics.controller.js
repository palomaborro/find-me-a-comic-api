const Comic = require("../models/Comic.model")
const { getComics } = require("../services/comicVine")

module.exports.comicList = (req, res, next) => {
    getComics(req.query.search)
    .then(comics => res.json(comics))
    .catch(next) 
}