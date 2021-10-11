const List = require("../models/List.model");

module.exports.createList = (req, res, next) => {
  const list = { ...req.body, author: req.currentUser };
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
  const { listId } = req.body;
  const id = req.params.id;
  console.log(listId, id)
  List.findById(listId)
    .then((list) => {
      list.comics = [...list.comics, id];
      list.save().then((response) => res.json(response));
    })
    .catch(next);
};
