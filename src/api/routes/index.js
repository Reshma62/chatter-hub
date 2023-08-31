const express = require("express");
const _ = express.Router();
const api = require( "./apiRoutes" )
_.use(api);
module.exports = _;
