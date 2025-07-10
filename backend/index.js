/*const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, phone, message } = req.body;

  console.log("📥 New Appointment Received:", req.body);

  try {
   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ankitverma95097@gmail.com',      
        pass: 'hbfi tfty ypfi xlmo',            
      },
    });

    const mailOptions = {
      from: 'ankitverma95097@gmail.com',
      to: 'ankitverma95097@gmail.com',
      subject: `New Appointment from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    };
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error while sending email:', error);
        return res.status(500).send('Error sending message');
      }

      console.log('✅ Email sent successfully:', info.response);
      res.status(200).send('Message sent successfully');
    });

  } catch (err) {
    console.error("❌ Unexpected Server Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
*/