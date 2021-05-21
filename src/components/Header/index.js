import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
      <div className="sticky-top">
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
          <a className="navbar-brand" style={{marginLeft: '10px'}} href="/">
            Josie Collins
          </a>
          
        <Navbar.Toggle />
          
          <Navbar.Collapse>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
              </li>
              <li className="nav-item active">
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              </li>
              <li className="nav-item active">
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="jcollresume.pdf" download>Download Resume</a>
              </li>
            </ul>
            </Navbar.Collapse>
        </Navbar>
      </div>

  );
}

export default Header;

