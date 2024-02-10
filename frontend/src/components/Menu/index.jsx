import React from 'react';
import './Menu.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname;

  return (
    <Nav.Link 
      className={path === href ? 'active': ''} 
      href={href}
    >
      {children}
    </Nav.Link>
  )
}

function Menu() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Michi Travel</Navbar.Brand>
          <Nav className="m-auto">
            <CustomLink href='/home'>Home</CustomLink>
            <CustomLink href='/blog'>Blog</CustomLink>
            <CustomLink href='/destinations'>Destinations</CustomLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;