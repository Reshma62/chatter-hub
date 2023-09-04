const bcrypt = require("bcrypt");

const User = require("../models/userModels");
const validateEmail = require("../utils/emailValidation");
const emailOTP = require("../utils/emailOtpSend");
const randomOTP = require("../utils/randomOTP");
const mailVerifiacation = require("../utils/emailVerification");
const registationControler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const existingUser = await User.find({ email });
  if (!firstName) {
    return res.send({ error: { firstName: "First Name is required" } });
    // return res.send({ error: "First Name is required" });
  } else if (!lastName) {
    return res.send({ error: { lastName: "Last Name is required" } });
  } else if (!email) {
    return res.send({ error: { email: "Email is required" } });
  } else if (validateEmail(email)) {
    return res.send({ error: { email: "Email is wrong" } });
  } else if (!password) {
    return res.send({ error: { password: "Password is required" } });
  } else {
    if (existingUser.length > 0) {
      console.log("User already exists");
      return res.status(400).json({ error: "User already exists" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        let user = new User({
          firstName,
          lastName,
          email,
          password: hash,
        });
        const randomotp = randomOTP();

        const emialOtp = emailOTP(randomotp, `${firstName} ${lastName}`);
        mailVerifiacation(email, emialOtp);
        user.save();

        await User.findOneAndUpdate(
          { email },
          { $set: { Otp: randomotp } },
          { new: true }
        );

        setTimeout(async () => {
          await User.findOneAndUpdate(
            { email },
            { $unset: { Otp: "" } },
            { new: true }
          );
        }, 120000);
        res.send({ success: "Registation Successfull" });
      });
    }
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.send({ error: { email: "Email is required" } });
  } else if (validateEmail(email)) {
    return res.send({ error: { email: "Email is wrong" } });
  } else if (!password) {
    return res.send({ error: { password: "Password is required" } });
  } else {
    const existingUser = await User.find({ email });
    const emailCheck = existingUser[0]?.email;
    const passCheck = existingUser[0]?.password;
    if (emailCheck === email) {
      bcrypt.compare(password, passCheck, async function (err, result) {
        if (result) {
          return res.status(200).json({
            success: "Login successful. Please wait for redirection",
            email: emailCheck,
            pass: passCheck,
          });
        } else {
          return res.status(400).json({ error: "Cradential not match" });
        }
      });
    } else {
      return res.status(400).json({ error: "Cradential not match" });
    }
  }
};
module.exports = { registationControler, loginController };
