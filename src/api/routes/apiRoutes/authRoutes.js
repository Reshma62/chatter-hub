const express = require("express");
const _ = express.Router();
const { registationControler, loginController } = require( "../../controllers/authController" );

_.post("/registation", registationControler);
_.post("/login", loginController);
module.exports = _;
