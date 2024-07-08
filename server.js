const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json());

// CORS middleware - if your frontend and backend are on different origins
// app.use(cors());

// POST endpoint to send email
app.post('/send-email', async (req, res) => {
  const { message } = req.body;

  try {
    // Configure Nodemailer with your email service credentials
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'maktrnka@gmail.com',
        pass: 'eyeofthenerd12!',
      },
    });

    // Email options
    let mailOptions = {
      from: 'maktrnka@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Message from Contact Form',
      text: message,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
