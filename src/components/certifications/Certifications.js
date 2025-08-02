// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import CertificateCard from "./CertificateCard";
// // import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import cert1 from "../../Assets/Certificates/image.png";
// import cert2 from "../../Assets/Certificates/cert2.png";
// import cert3 from "../../Assets/Certificates/cert3.png";
// import cert4 from "../../Assets/Certificates/cert4.png";
// import cert5 from "../../Assets/Certificates/cert5.png";
// import cert6 from "../../Assets/Certificates/cert6.png";

import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import cert1 from "../../Assets/Certificates/image6.png";
import cert2 from "../../Assets/Certificates/image2.png";
import cert3 from "../../Assets/Certificates/image3.png";
import cert4 from "../../Assets/Certificates/image4.png";
import cert5 from "../../Assets/Certificates/image5.png";
import cert6 from "../../Assets/Certificates/image1.png";

const certificates = [
  {
    imgPath: cert1,
    title: "HTML, CSS, Javascript for Web Developers",
    description:
      "Completed a full-stack web development course covering HTML, CSS, and JavaScript with hands-on React projects.",
    certLink: "https://drive.google.com/file/d/1BwOiO18zGnvATdm2rqYN1zTlaWG71Der/view?usp=drive_link",
  },
  {
    imgPath: cert2,
    title: "Server side JavaScript with Node.js",
    description:
      "An online course authorized by NIIT and offered through Coursera, Gained expertise in backend development with Node.js, Express, and REST APIs through Coursera and NIIT.",
    certLink: "https://drive.google.com/file/d/19ehJuhII5DXu8mA_IBw9SY8dp81hh4Ak/view?usp=drive_link",
  },
  {
    imgPath: cert3,
    title: "Object Oriented Programming",
    description:
      "Mastered Object-Oriented Programming concepts and applied them using Java and C++ on the iamneo platform.",
    certLink: "https://drive.google.com/file/d/1eeX5XM5pxBI_unlHLSMqyh81jC8I7X13/view?usp=drive_link",
  },
  {
    imgPath: cert4,
    title: "Dynamic Programming",
    description:
      "Solved advanced optimization problems using Dynamic Programming in a university-authorized Coursera course.",
    certLink: "https://drive.google.com/file/d/14w_WcKkk6Vuas2kWW8T8Z4KiYXiwLbzF/view?usp=drive_link",
  },
  {
    imgPath: cert5,
    title: "Complete Interview Preparation.",
    description:
      "Completed an extensive interview preparation program focusing on DSA, DBMS, OS, and system design. on the GEEKS FOR GEEKS PLATFORM",
    certLink: "https://drive.google.com/file/d/19NIKRT-mXau_87rDz-bFof4vP6c1T-Gj/view?usp=drive_link",
  },
  {
    imgPath: cert6,
    title: "Introduction to MongoDB",
    description:
      "Learned NoSQL fundamentals and built real-world applications using MongoDB with Node.js and Express.",
    certLink: "https://drive.google.com/file/d/1LZ4uixCUOGEqCQ74j2fJ11_oXZK7GPMk/view?usp=sharing",
  },
];

function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalCertLink, setModalCertLink] = useState("");

  const handleImageClick = (imgPath, title, certLink) => {
    setModalImg(imgPath);
    setModalTitle(title);
    setModalCertLink(certLink);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          These certifications reflect my passion for continuous learning and my commitment to mastering both core and cutting-edge technologies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <CertificateCard
                imgPath={cert.imgPath}
                title={cert.title}
                description={cert.description}
                certLink={cert.certLink}
                onImageClick={() =>
                  handleImageClick(cert.imgPath, cert.title, cert.certLink)
                }
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <img
            src={modalImg}
            alt="certificate-large"
            style={{
              maxWidth: "100%",
              maxHeight: "70vh",
              marginBottom: "20px",
              filter: "none" // Ensure original color, no grayscale or color filter
            }}
          />
          <div>
            {modalCertLink && (
              <a
                href={modalCertLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  textDecoration: "underline",
                  background: "rgba(80, 36, 143, 0.7)",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#50248f";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "rgba(80, 36, 143, 0.7)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                View Certificate
              </a>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certifications;
