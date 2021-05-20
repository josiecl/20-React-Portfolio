import React from "react";
import { Col, Row, Container } from "../components/Grid"



const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-4" />
        <Col size="md-3">
          <div className="contact">
            <h3>Contact info:</h3>
            <hr></hr>
            <h5>Email: josiecollinsrc@gmail.com</h5>
            <h5 className="phone">Phone: 952-737-2209</h5>
          </div>
        </Col>
        <Col size="md-3" />
         
      </Row>
    </Container>
  );
};

export default Contact;