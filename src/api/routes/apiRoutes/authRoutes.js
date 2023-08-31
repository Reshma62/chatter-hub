const express = require("express");
const _ = express.Router();
const { registationControler } = require( "../../controllers/authController" );

_.get("/registation", registationControler);
module.exports = _;
