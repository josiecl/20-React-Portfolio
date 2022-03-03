import React from "react";
import { Col, Row, Container } from "../components/Grid"
import ProfileImage from "../assets/IMG_20201003_184121_197.jpg"


const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-2" />
        <Col size="md-2">
          <img src={ProfileImage} alt="profile image" className="profile img img-thumbnail"></img>
        </Col>
        <Col size="md-5">
          <div className="aboutMeBorder">
            <div  className="aboutMe">
              <h1 className="titleWord">About Me</h1>
              <p>My name is Josie Collins, and I am a software developer.</p>
              <p>I currently attend the University of Wisconsin, Stout. I am studying computer science, with a concentration in game design and development. So far, I have learned both C++ and Java while attending UW Stout.</p>
              <p>Prior to attending Stout, I took a full-stack flex coding bootcamp through the University of Minnesota. This program gave me several skills to help me become a better programmer and taught me how to create and design my own websites while also working and communicating with a team.</p>
            </div>
          </div>
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
};

export default Home;