import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


index.propTypes = {};

function index() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Michi Travel</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/Home" exact>Home</Nav.Link>
              <Nav.Link href="/Blog">Blog</Nav.Link>
              <Nav.Link href="/Destinations">Destinations</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default index;