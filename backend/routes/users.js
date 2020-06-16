const express = require("express");
const mongoose = require("mongoose");
const User = require('../models/user')
const router = express.Router();


router.get('/', async (req,res) => {
    res.send("Hello World!")
})

















module.exports = router