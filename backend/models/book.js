const mongoose = require("mongoose");

const books = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  copies: { type: Number },
});

module.exports = mongoose.model("Books", books);
