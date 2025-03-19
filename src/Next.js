// File: pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate the inputs
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Configure nodemailer with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your preferred service (Gmail, Outlook, etc.)
      auth: {
        user: 'mudavathprajay@gmail.com', // Replace with your email
        pass: 'Prajay@9989' // Replace with your app password or email password
      }
    });

    // Email content to send to yourself
    const mailOptions = {
      from: `"Website Contact" <your-email@gmail.com>`,
      to: 'mudavathprajay@gmail.com', // Your email where you want to receive messages
      replyTo: email,
      subject: `New contact from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}