const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // msg object

  const msg = {
    to: "info@aigokoreanfood.rs", // Change to your recipient
    from: "info@aigokoreanfood.rs", // Change to your verified sender
    subject: `Aigo Contact Form - ${req.body.myName}`,
    text: `${req.body.myMessage}`,
    html: `<p>${req.body.myMessage}</p><p>Please reply to ${req.body.myEmail}</p>   <p>Kind regards</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendEmail;
