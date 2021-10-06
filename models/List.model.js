const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Write a title",
    },
    author: {
      type: mongoose.Types.ObjectId,
      required: "An author is required",
      ref: "User",
    },
    description: {
      type: String,
      required: "Write a list",
    },
    comics: {
        type: [String],
        default: [],
        required: "You must add at least a comic",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const List = mongoose.model("List", listSchema);

module.exports = List;