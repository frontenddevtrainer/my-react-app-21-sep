import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = (props) => {
  //   const applicationName = props.name;
  //   const count = props.count;

  // Object Destructing
  // const {} = Object Value;
  // const [] = Array Value;

  const user = useSelector((state) => {
    return state.user;
  });

  // const flights = useSelector((state) => {
  //   return state.flights;
  // });

  const { name: applicationName, count } = props;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Travel Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            {user && <Link to="/user">{user.name}</Link>}
            {/* Current page has {flights.flights.length} flights */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
