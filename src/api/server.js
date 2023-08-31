

const cors = require("cors");
const express = require("express");
const dotenv = require( "dotenv" );
dotenv.config();
// const signupRoute = require("./routes/signup");

const app = express();
const Routes= require("./routes");
const dbConnection = require( "./config/dbConnect" );

dbConnection()
app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
