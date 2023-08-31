const express = require("express");
const _ = express.Router();
const { registationControler } = require( "../../controllers/authController" );

_.post("/registation", registationControler);
module.exports = _;
