import React, { useState } from "react";
import { Collapse, NavbarToggler, Navbar, Nav } from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="nav-bar">
      <Navbar color="light" light expand="md" className="mb-3">
        <img className="logo" src="./img/reasLogo.png" alt="reas logo"></img>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            Click on me to get some bananas!
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
};

export default Navigation;
