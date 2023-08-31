const express = require("express");
const _ = express.Router();

_.get("/registation", (req, res) => {
  res.json("Please registation first");
});
module.exports = _;
