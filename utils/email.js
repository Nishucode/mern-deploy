// server/utils/email.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Your email configuration
});

const sendNotificationEmail = async (email, message) => {
  try {
    await transporter.sendMail({
      to: email,
      subject: 'Inactive User Notification',
      text: message
    });
    console.log('Notification email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendNotificationEmail;
