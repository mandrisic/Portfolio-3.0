const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mirnandrisic@gmail.com", // Zamijeni svojim e-mailom
    pass: "olaf yuyt dtoy bfcg",        // Zamijeni svojom lozinkom
  },
});

app.post("/send-email", (req, res) => {
  const { email, title, message } = req.body;

  const mailOptions = {
    from: email,
    to: "mirnandrisic@gmail.com", // Tvoj e-mail
    title: `Contact form: ${title}`,
    text: `Message: ${email}:\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("There's been an error sending this email.");
    } else {
      res.status(200).send("E-mail was succesfully sent.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
