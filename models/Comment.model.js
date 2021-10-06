const mongoose = require("mongoose");
require("./List.model");
require("./User.model");

const commentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: "Write a comment",
    },
    author: {
      type: mongoose.Types.ObjectId,
      required: "An author is required",
      ref: "User",
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comicId: {
      type: String,
      required: 'A comic id is required'
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;