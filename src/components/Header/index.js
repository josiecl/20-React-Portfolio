import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" style={{marginLeft: '10px'}} href="/">
            Josie Collins
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <section className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="/Home">
                  Home
                </a> */}
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
              </li>
              <li className="nav-item active">
                {/* <a className="nav-link" href="/Portfolio">
                  Portfolio
                </a> */}
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
              </li>
              <li className="nav-item active">
                {/* <a className="nav-link" href="/Contact">
                  Contact
                </a> */}
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="jcollresume.pdf" download>Download Resume</a>
              </li>
              
            </ul>
            
          </section>
        </nav>
      </div>
      

  );
}

export default Header;

