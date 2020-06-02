import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar
      className="navbar-styles"
      collapseOnSelect
      expand="lg"
      bg="danger"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="#home" className="red-heading">
        Top headlines of the day !
      </ReactBootStrap.Navbar.Brand>

      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          {/* <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link> */}
          {/* <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link> */}
        </ReactBootStrap.Nav>

        <ReactBootStrap.Nav className="link-styles">
          <ReactBootStrap.Nav.Link href="/" className="red-text">
            <b>General</b>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/health" className="red-text">
            <b> Health</b>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/science" className="red-text">
            <b> Science</b>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/sports" className="red-text">
            <b> Sports</b>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/entertain" className="red-text">
            <b> Entertainment</b>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/tech" className="red-text">
            <b> Technology</b>
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;
