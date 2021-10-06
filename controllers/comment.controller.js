const Comment = require('../models/Comment.model')

module.exports.addComicComment = (req, res, next) => {
    const comment = {...req.body, author: req.currentUser, comicId: req.params.id}
    Comment.create(comment)
    .then((comment) => {
        return comment.populate('author'), comment.populate('image')
    })
    .then((comment) => {
        res.json(comment)
    })
    .catch(next)
  }