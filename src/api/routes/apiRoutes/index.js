const express = require("express");
const _ = express.Router();
const authRoute = require( "./authRoutes" )
_.use("/auth", authRoute)

module.exports = _;
