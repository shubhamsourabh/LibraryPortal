const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/user')
const router = express.Router();
const jwt = require('jsonwebtoken')


// router.get('/', async (req,res) => {
//   res.send("Hello World!")
// })


router.post("/login", async (req, res) => {
    //Check if user exists or not
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(500).json({
        message: "User Doesn't Exists",
      });
      
    //Looging in and generating token
    const token = jwt.sign({ _id: user._id }, "secretkey");
    res.header("auth-token", token).json({
      message: "Successfully logged In",
      token: token,
    });
    console.log(token);
  });














module.exports = router