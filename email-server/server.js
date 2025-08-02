const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Email to You (Owner)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "📩 New Portfolio Contact Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    // 3. Confirmation Email to User
    await transporter.sendMail({
      from: `"Jaivanth Koppula" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Thank you for contacting Jaivanth",
      html: `<p>Hi ${name},</p>
             <p>Thanks for reaching out! I’ve received your message and will respond as soon as possible.</p>
             <p>Warm regards,<br/>Jaivanth Koppula</p>`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
