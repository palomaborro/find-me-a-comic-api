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
    list: {
        type: mongoose.Types.ObjectId,
        required: "A list is required",
        ref: "List"
    }
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