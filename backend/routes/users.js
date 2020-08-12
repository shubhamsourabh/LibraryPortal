const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");

// router.get('/', async (req,res) => {
//   res.send("Hello World!")
// })

router.get("/details", async (req, res) => {
  try {
    const Userdetails = await User.find({});
    console.log(Userdetails[1].username);
    res.status(200).send({
      Userdetails,
    });
  } catch (error) {
    console.error(error);
  }

  //console.log(res);
});

router.post("/login", async (req, res) => {
  //Check if user exists or not
  const user = await User.findOne({
    username: req.body.username,
  });
  console.log(user);
  if (!user)
    return res.status(500).json({
      message: "User Doesn't Exists",
    });

  // let payloads = {
  //   ,
  // };
  // generating token
  const token = jwt.sign({ _id: user._id, name: user.firstName }, "secret");
  res.header("auth-token", token).json({
    message: "Successfully logged In",
    token: token,
  });
  console.log(token);
});

module.exports = router;
