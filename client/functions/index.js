const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const gmailEmail = "ngoteacher123@gmail.com";
const gmailPassword = "ngo@12345";
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
admin.initializeApp();

exports.sendEmailConfirmation = functions.firestore
  .document("SubList/{subId}")
  .onCreate(async (snap, context) => {
    const val = snap.data();
    const mailOptions = {
      from: '"NGO." <noreply@firebase.com>',
      to: val.email
    };

    mailOptions.subject = `Welcome ${val.name}`;
    mailOptions.text = `${val.name} you are now subscribed for Newsletter. We will send you a newsletter about NGO's work every month.`;

    try {
      await mailTransport.sendMail(mailOptions);
      console.log(
        `New ${subscribed ? "" : "un"}subscription confirmation email sent to:`,
        val.email
      );
    } catch (error) {
      console.error("There was an error while sending the email:", error);
    }
    return null;
  });
