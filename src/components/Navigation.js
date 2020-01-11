import React, { useState } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, NavbarBrand } from "reactstrap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="nav-bar">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        color="light"
        expand="lg"
      >
        <NavbarBrand>
          <img className="logo" src="./img/reasLogo.png" alt="reas logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav-link">Úvod</NavItem>
            <NavItem className="nav-link">O nás</NavItem>
            <NavItem className="nav-link">Blog</NavItem>
            <NavItem className="nav-link">Kontakt</NavItem>
          </Nav>
        </Collapse>
      </nav>
    </section>
  );
};

export default Navigation;
