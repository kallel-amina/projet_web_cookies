
require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



app.post('/contact', async (req, res) => {
  const { name, email, message, type } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kallelamina03@gmail.com',
        pass: 'jwti hjaz fadn pbmp'
      }
    });

    await transporter.sendMail({
      from: `"SweetBites 🍪" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `SweetBites Contact – ${type}`,
      text: `
Name: ${name}
Email: ${email}
Type: ${type}

Message:
${message}
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});