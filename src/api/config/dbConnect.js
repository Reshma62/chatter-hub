const mongoose = require("mongoose");

const dbConnection = () =>
{
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
};
module.exports = dbConnection;
