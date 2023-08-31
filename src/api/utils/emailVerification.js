const nodemailer = require("nodemailer");

const mailVerifiacation = async (email, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `Reshme Nila < ${process.env.APP_USER} >`,
    to: email,
    subject: "Verification For Real user",
    html: template,
  });
};
module.exports = mailVerifiacation;
