const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "safety.sudisafoundry@gmail.com",
    // pass: "gpgr vsbf qxbs zive",
    pass: "gpgr vsbf qxbs zive",
  },
});

// mailTransporter.sendMail(mailDetails, function (err, data) {
//   if (err) {
//     console.log("Error Occurs", err);
//   } else {
//     console.log("Email sent successfully");
//   }
// });

const SENDMAIL = async (mailDetails, callback) => {
  try {
    // console.log("hey i am  mailDetails.....", mailDetails);
    // console.log("hey i am  callbacksss.....", callback);
    const info = await transporter.sendMail(mailDetails);
    console.log("hey i am infooooooo", info);
    callback(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = SENDMAIL;
