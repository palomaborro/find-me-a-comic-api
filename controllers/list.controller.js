const List = require('../models/List.model')


module.exports.createList = (req, res, next) => {
    const list = {...req.body, author: req.currentUser, comicId: req.params.id}
    List.create(list)
    .then((list) => {
        return list.populate('author')
    })
    .then((list) => {
        res.json(list)
    })
    .catch(next)
  };