import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weship from "../../Assets/Projects/weship.png";
import aida from "../../Assets/Projects/aida.png";
import cover from "../../Assets/Projects/Cover.png";
import tesoro from "../../Assets/Projects/tesoro.png";
import astaaray from "../../Assets/Projects/astaaray.png";
//Wordpress projects
import icare from "../../Assets/Projects/icare.png";
import monse from "../../Assets/Projects/monse.png";
import voorburgsda from "../../Assets/Projects/voorburgsda.png";
import voorburgsda from "../../Assets/Projects/TEMPERATURE.png";
import voorburgsda from "../../Assets/Projects/JAYNEX.png";

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
              imgPath={aida}
              isBlog={false}
              title="aidapro.com"
              description="its a company website that i build for my client using React,node js with express and mongo db.Providing great visual experience with Responsive design."
              demoLink="https://aidapro.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weship}
              isBlog={false}
              title="WeShip"
              description="WeShip.pk is a MERN stack logistics platform for e-commerce, featuring a React.js frontend for real-time shipment tracking and a Node.js/Express.js backend for managing orders and deliveries. MongoDB ensures efficient data storage, while secure authentication and payment integrations enhance reliability. Hosted on cloud infrastructure, it offers a scalable and high-performance solution for e-commerce logistics."
              demoLink="https://www.weship.pk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesoro}
              isBlog={false}
              title="tesoro.pk"
              description="Tesoro.pk is a modern e commerce web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js), designed to deliver a seamless user experience. The project features a responsive frontend built with React.js, a robust backend powered by Node.js and Express.js, and a flexible MongoDB database for efficient data management. Key functionalities include user authentication, product management, and payment integration, supported by third-party services.The application was deployed on cloud platforms, ensuring scalability and reliability.API integration, and cloud-based deployment,"
              demoLink="https://www.tesoro.pk/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astaaray}
              isBlog={false}
              title="astaaray.com"
              description="Astaaray.com is a modern, React-based e-commerce platform designed for a clothing brand, offering a seamless shopping experience. The website features a dynamic and responsive user interface built with React.js, ensuring smooth navigation and an engaging design. Key functionalities include product browsing, a user-friendly shopping cart, Hosted on cloud platforms, Astaaray.com is optimized for performance, scalability, and reliability, making it a standout online destination for fashion enthusiasts."
              demoLink="https://www.astaaray.com/"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Wordpress <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
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
              imgPath={monse}
              isBlog={false}
              title="english-monseheart"
              description="Used Wordpress elementor to design this website,it is a fully customized theme with css and javascript.For backend i have used php and sql to create database."
              demoLink="https://english-monseheart.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voorburgsda}
              isBlog={false}
              title="VISDAC"
              description="Used Wordpress elementor to design this website,it is a fully customized theme with css and javascript.For backend i have used php and sql to create database."
              demoLink="https://www.voorburgsda.nl/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voorburgsda}
              isBlog={false}
              title="VISDAC"
              description="Used Wordpress elementor to design this website,it is a fully customized theme with css and javascript.For backend i have used php and sql to create database."
              demoLink="https://www.voorburgsda.nl/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JAYNEX}
              isBlog={false}
              title="JANEXIT"
              description="Wordpress based website created using elementor,it is a fully customized theme with css and javascript."
              demoLink="https://jaynexit.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TEMPERTURE}
              isBlog={false}
              title="THE TEMPERTURE MEDIA"
              description="A News agency website crafted on wordpress using the elementor builder.Theme and component was customised with javascript and css."
              demoLink="https://thetemperaturemedia.com/"
            />
          </Col>
                  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
