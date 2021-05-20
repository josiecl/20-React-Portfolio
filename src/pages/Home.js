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
          <div  className="aboutMe">
            <h1 className="titleWord">About Me</h1>
            <p>My name is Josephine Collins, but I go by Josie. I am 19 years old and currently studying to be a programmer. I am interested in a career in writing, coding, video game development, or something similar to these.</p>
            <p>I graduated from the School of Environmental Studies in 2019. After this, I went to Normandale Community College, and tried a couple of classes. I found computer science the most compelling, and decided to pursue a career in it. I'll be continuing to study computer science after this program, as I will be attending the University of Wisconsin: Eau Claire in fall of 2021.</p>
            <p>I have an extensive background with computers and computer science, but not necessarily coding. In high school, I took a computer hardware/software course which required me to code my own small video game-esque project. I enjoyed this project immensely. I also have spent many hours going through files for video game, somewhat learning how their coding goes into the game to make it what it is. Overall, I'm excited to learn more about coding.</p>
          </div>
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
};

export default Home;