const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
//const bookRoutes = require("./routes/books");
//const issueRoutes = require("./routes/issue");
const cors = require('cors');

mongoose.connect(
  'mongodb+srv://shubham:Lucky@123@cluster0-unn4z.mongodb.net/Library_mangement_system?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (!err) {
      console.log('Database Connected...');
    } else {
      console.log(err);
    }
  }
);
//Hello
//world
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', userRoutes);
//app.use()

module.exports = app;
