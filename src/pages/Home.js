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
              <p>My name is Josephine Collins, but I go by Josie. I am nearly 20 years old and currently studying to be a programmer. I am interested in a career in writing, coding, and video game development.</p>
              <p>I graduated from the School of Environmental Studies in 2019. After this, I went to Normandale Community College, and tried a couple of classes. I found computer science the most compelling, and decided to pursue a career in it. I'll be continuing to study computer science after this program, as I will be attending the University of Wisconsin: Stout in fall of 2021. I will be taking the video game specific course, in order to learn programming for video games.</p>
              <p>Thanks to this course, I have made several script-intensive projects, which have greatly helped me gain an understanding of coding. These projects have not necessarily been easy but they have been necessary in my journey to become a better programmer. View some of these either on my github or on my portfolio page.</p>
            </div>
          </div>
        </Col>
        <Col size="md-2" />
      </Row>
    </Container>
  );
};

export default Home;