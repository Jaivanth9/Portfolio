import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf1.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/crm-platform1.png";
import chatify from "../../Assets/Projects/Recipe-hub.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/hardware-store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Recipe-Hub"
              description="RecipeHub is a full-stack web application that allows users to collaboratively create, scale, and manage recipes in real time. It’s designed for home cooks, food bloggers, and culinary teams to share ideas, adjust ingredients based on servings, and track cooking timers—together and interactively."
              ghLink="https://github.com/Jaivanth9/Recipie-Hub"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hardware-Store"
              description="HardwareStore is a full-featured equipment rental and inventory management system designed for hardware shops, tool rental businesses, and construction vendors. It allows users to browse, reserve, and rent tools, while admins can manage inventory, track availability, and monitor rental history—all from a centralized dashboard."
              ghLink="https://github.com/Jaivanth9/Hardware_store"
              demoLink="https://hardware-store-kvbj39ocf-jaivanths-projects.vercel.app/eshwar-traders"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CRM-Platform"
              description="The CRM Platform is a powerful full-stack application designed to help businesses manage customer interactions, sales pipelines, and internal team collaboration. Built with the MERN stack, it offers a responsive, role-based dashboard with real-time insights into leads, deals, support tickets, and performance analytics."
              ghLink="https://github.com/Jaivanth9/CRM-Platform"
              demoLink="https://crm-platform-main.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Component Generator Platform"
              description="Component Generator Platform is a full-stack web application that allows users to generate components for their projects. It's designed for software developers, engineers, and students to create reusable code snippets, diagrams, and other digital assets quickly and efficiently."
              ghLink="https://github.com/Jaivanth9/Component-Generator"
              demoLink="https://component-generators.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Travel-App"
              description="The Travel App is a modern, responsive web application designed to help users explore travel destinations, get inspired, and connect with trip planners seamlessly. With an intuitive UI and visually rich experience, users can view interactive maps, send inquiries through the contact form, and discover locations across the globe."
              ghLink="https://github.com/Jaivanth9/Travel-App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Recipe-Manager App(Mobile)"
              description="A beautiful cross-platform mobile app built with React Native & Expo to help users explore, search, and view delicious recipes with ease.

🔧 Tech Stack: React Native, Expo, JavaScript, React Navigation, TheMealDB API (or local JSON), useState/useEffect"
              ghLink="https://github.com/Jaivanth9/Meal-App"
              demoLink="https://expo.dev/accounts/jaivanth9/projects/instafood-recipes-app/builds/b43b14e2-dac5-4471-a00e-e766ab162abe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
