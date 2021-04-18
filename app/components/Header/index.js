import React from 'react';

import LocaleToggle from 'containers/LocaleToggle';
import { Nav, Navbar } from 'react-bootstrap';
import Brand from './brand.png';

function Header() {
  return (
    <Navbar bg="info" variant="dark">
      <Navbar.Brand href="#home">
        <img alt="brand-logo" src={Brand} height="30" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">Update</Nav.Link>
        <Nav.Link href="#home">Donasi</Nav.Link>
        <Nav.Link href="#contact">Kontak</Nav.Link>
      </Nav>
      <LocaleToggle />
    </Navbar>
  );
}

export default Header;
