const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Write a title",
    },
    description: {
      type: String,
      required: "Write a list",
    },
    comics: {
        type: [String]
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