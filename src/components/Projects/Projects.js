import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import monse from "../../Assets/Projects/monse.png";
//import emotion from "../../Assets/Projects/emotion.png";
import aida from "../../Assets/Projects/aida.png";
import cover from "../../Assets/Projects/Cover.png";
//import suicide from "../../Assets/Projects/suicide.png";
import icare from "../../Assets/Projects/icare.png";

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
              imgPath={cover}
              isBlog={false}
              title="Ai Based Cover letter Generator"
              description="its an Ai based cover letter generator that is written in python works as a desktop application.it will first take data like experience, skills and duration,then generate a professional cover letter and save in docs file.you can make multiple cover letters."
              ghLink="https://github.com/hanjra-1/cover_letter_generator/"
  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icare}
              isBlog={false}
              title="IcaresoIshareintl"
              description="Fund raising website for cheristian community.This website is designed with Wordpress,fully responsive and atteractive UI.i have also raised $5000+ in its digital marketing compaign in 1 week."
              demoLink="https://www.icaresoishareintl.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aida}
              isBlog={false}
              title="aidapro.com"
              description="its a company website that i build for my client using React,node js with express and mongo db.Providing great visual experience with Responsive design."
              demoLink="https://aidapro.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monse}
              isBlog={false}
              title="english-monseheart"
              description="Used Wordpress elementor to design this website,it is a fully customized theme with css and javascript.For backend i have used php and sql to create database."
              
              demoLink="https://english-monseheart.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
