import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import Particle from "../Particle"; // Updated Particle is used here
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputRefs = {
    name: React.createRef(),
    email: React.createRef(),
    message: React.createRef(),
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.keys(validationErrors)[0];
      inputRefs[firstError]?.current?.focus();
      return;
    }
  
    setSubmitting(true);
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };
  

  const contactIcons = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:jaivanthkoppula999@gmail.com",
      color: "#0d6efd",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      href: "tel:+919948469694",
      color: "#198754",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jaivanth-koppula",
      color: "#0a66c2",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Jaivanth9",
      color: "#333",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      href: "https://www.google.com/maps/place/Tadepalligudem,+Andhra+Pradesh",
      color: "#dc3545",
    },
  ];

  return (
    <>
      <Particle />
      <section style={{ position: "relative", zIndex: 1 }}>
        <Container
          fluid
          className="home-section"
          id="contact"
          style={{
            padding: "0",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container
            className="home-content d-flex flex-column justify-content-center"
            style={{ flex: 1 }}
          >
            <Row className="mb-4">
              <Col xs={12} className="text-center">
                <h1 className="heading">
                  <span className="main-name">Contact Me</span>
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-3 mb-2 flex-wrap contact-icons-row">
                  {contactIcons.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="contact-icon-link"
                      style={{
                        color: item.color,
                        fontSize: "1.7rem",
                        margin: "0 0.5rem",
                        transition: "transform 0.2s, color 0.2s",
                      }}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
                <p className="text-white fs-5">
                  Let’s get in touch — happy to connect!
                </p>
              </Col>
            </Row>

            <Row className="flex-grow-1">
              {/* Map & Info */}
              <Col md={6} className="d-flex flex-column">
                <div
                  className="map-container"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 0 16px rgba(0,0,0,0.25)",
                    flex: "1 1 auto",
                    minHeight: "260px",
                  }}
                >
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.9219597036613!2d81.53315709901113!3d16.82091784265394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4b0bbc92bb3%3A0x1f27672b7735020a!2sTadepalligudem%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1754144604805!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    loading="eager"
                  ></iframe>
                </div>
                <div
                  className="contact-info text-white mt-3 p-3 rounded"
                  style={{
                    fontSize: "1.05rem",
                    background: "#1a1a2e", // keep background color same as form
                  }}
                >
                  <p>
                    <FaMapMarkerAlt className="me-2 text-primary" /> Tadepalligudem,
                    Andhra Pradesh
                  </p>
                  <p>
                    <FaEnvelope className="me-2 text-primary" />{" "}
                    jaivanthkoppula999@gmail.com
                  </p>
                  <p>
                    <FaPhoneAlt className="me-2 text-primary" /> +91 9948469694
                  </p>
                </div>
              </Col>

              {/* Form */}
              <Col md={6}>
                <Form
                  onSubmit={handleSubmit}
                  className="contact-form p-4 rounded shadow"
                  autoComplete="off"
                  style={{
                    backgroundColor: "#1a1a2e", // dark background color
                    color: "#fff", // white text for contrast
                    border: "1px solid #22223b",
                  }}
                >
                  <Form.Group className="mb-3" controlId="contactName">
                    <Form.Label className="fw-bold" style={{ color: "#fff" }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      ref={inputRefs.name}
                      isInvalid={!!errors.name}
                      placeholder="Your Name"
                      style={{
                        backgroundColor: "#23234a",
                        color: "#fff",
                        border: "1px solid #39396a",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactEmail">
                    <Form.Label className="fw-bold" style={{ color: "#fff" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      ref={inputRefs.email}
                      isInvalid={!!errors.email}
                      placeholder="Your Email"
                      style={{
                        backgroundColor: "#23234a",
                        color: "#fff",
                        border: "1px solid #39396a",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactMessage">
                    <Form.Label className="fw-bold" style={{ color: "#fff" }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      ref={inputRefs.message}
                      isInvalid={!!errors.message}
                      placeholder="Your Message"
                      style={{
                        backgroundColor: "#23234a",
                        color: "#fff",
                        border: "1px solid #39396a",
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" variant="primary" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                  {submitted && (
                    <Alert variant="success" className="text-center mt-3">
                      ✅ Message sent successfully!
                    </Alert>
                  )}
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>

        <style>
          {`
            @media (max-width: 767.98px) {
              .contact-icons-row {
                font-size: 1.3rem;
              }
              .contact-form {
                padding: 1.2rem !important;
              }
            }
            .contact-icon-link:hover {
              transform: scale(1.18);
              color: #6610f2 !important;
              text-decoration: none;
            }
            .contact-form input, .contact-form textarea {
              background: #23234a !important;
              color: #fff !important;
              border-radius: 6px;
              border: 1px solid #39396a;
            }
            .contact-form input:focus, .contact-form textarea:focus {
              border-color: #0d6efd;
              box-shadow: 0 0 0 0.2rem rgba(13,110,253,.15);
              background: #23234a !important;
              color: #fff !important;
            }
          `}
        </style>
      </section>
    </>
  );
}

export default Contact;
