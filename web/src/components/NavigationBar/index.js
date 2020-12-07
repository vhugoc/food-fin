import React from 'react';
import { useHistory } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import './style.css';

function NavigationBar() {
  const { logout } = require('../../services/auth');
  const history = useHistory();

  const leaveSession = () => {
    logout();
    history.push('/login');
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Dashboard</Nav.Link>
          <Nav.Link>Clientes</Nav.Link>
          <Nav.Link>Colaboradores</Nav.Link>
          <Nav.Link>Produtos</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className="mr-4">Caixa</Button>
          <NavDropdown title="Victor Hugo" id="collasible-nav-dropdown">
            <NavDropdown.Item>Conta</NavDropdown.Item>
            <NavDropdown.Item>Configurações</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={leaveSession} className="leave-item">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
