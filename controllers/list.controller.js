const List = require("../models/List.model");

module.exports.createList = (req, res, next) => {
  const list = { ...req.body, author: req.currentUser };
  console.log(req.currentUser)
  List.create(list)
    .then((list) => {
      return list.populate("author");
    })
    .then((list) => {
      res.json(list);
    })
    .catch(next);
};

module.exports.getLists = (req, res, next) => {
  List.find()
    .then((lists) => res.json(lists))
    .catch(next);
};

module.exports.addComicToList = (req, res, next) => {
  const  listId  = req.body.listId;
  const id = req.params.id;
  List.findById(listId)
    .then((list) => {
      list.comics = [...list.comics, id];
      list.save().then((response) => res.json(response));
    })
    .catch(next);
};

module.exports.deleteList = (req, res, next) => {
  List.findByIdAndDelete(req.params.id)
  .then(result => {
    if (!result) {
      res.json({ deleted: false })
    } else {
      res.json({ deleted: true })
    }
  })
  .catch(next)
}

module.exports.getUserList = (req, res, next) => {
  const { list } = req.params;
  List.find({author: req.currentUser, title: list})
  .then(data => res.send(data))
  .catch(next)
}