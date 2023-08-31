const mongoose = require("mongoose");
const { Schema } = mongoose;

var userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    Otp: {
      type: Number,
    },
  },
  {
    timestamps: true, // Enable timestamps option
  }
);

//Export the model
module.exports = mongoose.model("User", userSchema);
