import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProjectContent from "../components/Project/project.json";
import Project from "../components/Project/index";



const Portfolio = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="sm-3" />
          
        {/* Projects made go here */}
        <Col size="sm-6">
          <h2 class="title ">Websites I've Made</h2>
          {ProjectContent.map((project) => (
            <Project
              title = {project.title}
              image = {project.image}
              description = {project.description}
              repo = {project.repository}
              live = {project.liveLink}
            />
          ))}
        </Col>
        
        <Col size="sm-3" />
      </Row>
    </Container>
  );
};

export default Portfolio;