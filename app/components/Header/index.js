import React from 'react';

import LocaleToggle from 'containers/LocaleToggle';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Baraya Care</Navbar.Brand>
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
