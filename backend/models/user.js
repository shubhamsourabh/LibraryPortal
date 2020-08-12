const mongoose = require("mongoose");
const book = require("./book");

const users = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String },
  email: { type: String },
  username: { type: String },
  password: { type: String },
  // book: [book],
  // book_id :
});

module.exports = mongoose.model("User", users);
