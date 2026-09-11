const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ===============================
// Middleware
// ===============================

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ===============================
// Health Check
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Jaivanth Portfolio API is running 🚀",
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

// ===============================
// Contact Form API
// ===============================

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // -------------------------------
    // Validate input
    // -------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid email address",
      });
    }

    // -------------------------------
    // Check environment variables
    // -------------------------------

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP_USER or SMTP_PASS is missing");

      return res.status(500).json({
        success: false,
        error: "Email service is not configured",
      });
    }

    // -------------------------------
    // Create Gmail transporter
    // -------------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // -------------------------------
    // Verify SMTP connection
    // -------------------------------

    await transporter.verify();

    // -------------------------------
    // Send email to you
    // -------------------------------

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,

      to: process.env.SMTP_USER,

      // Visitor's email is used here instead of spoofing
      // the From address.
      replyTo: email,

      subject: "📩 New Portfolio Contact Message",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
        ">

          <h2 style="color: #333;">
            📩 New Contact Message
          </h2>

          <hr />

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            white-space: pre-wrap;
          ">
            ${escapeHtml(message)}
          </div>

          <hr />

          <p style="color: #777; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>

        </div>
      `,
    });

    // -------------------------------
    // Send confirmation email
    // -------------------------------

    await transporter.sendMail({
      from: `"Jaivanth Koppula" <${process.env.SMTP_USER}>`,

      to: email,

      subject: "✅ Thank you for contacting Jaivanth",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
        ">

          <h2>
            Hi ${escapeHtml(name)} 👋
          </h2>

          <p>
            Thank you for contacting me through my portfolio.
          </p>

          <p>
            I have received your message and will get back to you
            as soon as possible.
          </p>

          <br />

          <p>
            Best regards,<br />
            <strong>Jaivanth Koppula</strong>
          </p>

        </div>
      `,
    });

    // -------------------------------
    // Success response
    // -------------------------------

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("❌ Email error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

// ===============================
// Escape HTML
// Prevent HTML injection in emails
// ===============================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Port: ${PORT}`);
});