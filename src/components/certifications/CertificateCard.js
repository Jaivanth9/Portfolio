import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink45Deg } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>
          <FaCertificate style={{ marginRight: "8px", color: "#f0ad4e" }} />
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.certLink && (
          <Button
            variant="success"
            href={props.certLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLink45Deg /> &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
