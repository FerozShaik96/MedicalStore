import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import MedPlus from "./MedpluIcon";
import CartIcon from "../Cart/CartIcon";
const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex justify-content-between"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home d-flex align-items-center">
          <MedPlus />
          <span className="ps-2 fw-bold text-danger display-5">MedPlus</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto d-flex aligin-items-center ">
            <Button variant="primary" className="text-white">
              <CartIcon className="px-2" />
              <span className="px-2 fw-bold">Cart</span> <span>0</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
