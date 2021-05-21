import React from "react";
import { Col, Row, Container } from "../components/Grid"



const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-4" />
        <Col size="md-4">
          <div className="contact">
            <h3>Contact Info</h3>
            <hr></hr>
            <h5>Email:</h5>
            <h6>josiecollinsrc@gmail.com</h6>
            <h5 className="phone">Phone:</h5>
            <h6>952-737-2209</h6>
          </div>
        </Col>
        <Col size="md-3" />
         
      </Row>
    </Container>
  );
};

export default Contact;