// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 📧 Gmail SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourgmail@gmail.com',        // अपनी gmail डाल
    pass: 'your_app_password',          // App Password (नीचे बताया है कैसे बनाना)
  },
});

app.post('/contact-us', (req, res) => {
  const { fullname, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'yourgmail@gmail.com',  // जहां mail जाना है
    subject: `New Contact from ${fullname}`,
    text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error sending message');
    }
    res.send('Message sent successfully');
  });
});

app.listen(3001, () => {
  console.log('✅ Server running on http://localhost:3001');
});
