import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  // SiSolidity,
  SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /><h6>CPP</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><h6>HTML</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /><h6>CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><h6>Javascript</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><h6>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><h6>ReactJS</h6>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><h6>MongoDb</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /><h6>Next.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis /><h6>Redis</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><h6>Postgresql</h6>
      </Col>
      
    </Row>
  );
}

export default Techstack;
