import './AdminHeader.css'
import logo from "../../../assets/img/logo.png"
import cart from "../../../assets/img/cart.png"
import persona from "../../../assets/img/user.png"
import vert_l from "../../../assets/img/vertical_line.png"
import menu_l from "../../../assets/img/menu.png"
import exit_l from "../../../assets/img/exit.png"
import React from 'react';
import { Navbar, Container, Nav, NavLink, NavbarToggler, Collapse } from 'reactstrap';

const AdminHeader = ({logged_in = true}) => {
  return (
    <Navbar id="navbar" expand="lg" fixed="top">
      <Container fluid className='d-flex justify-content-between'>
        <NavLink href="inicio.html" className="navbar-brand ms-2">
          <img width="50%" height="auto" src={logo} alt="Logo" />
        </NavLink>
        <NavbarToggler type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        <Collapse navbar id="navbarSupportedContent">
          <Nav className="custom-navbar-nav navbar-nav ms-0 mb-2 mb-md-0 col justify-content-center">
            <NavLink href="/admin/store_admin" className="nav-link">TIENDA</NavLink>
            <NavLink href="/admin/users" className="nav-link">USUARIOS</NavLink>
            <NavLink href="/admin/orders" className="nav-link">PEDIDOS</NavLink>
          </Nav>

          <ul className="icons d-flex justify-content-end mb-2 mb-md-0 ms-3 justify-self-end">
            <li>
              <NavLink href="\printlab\landing">
                <img className="img-fluid" src={exit_l} alt="Linea" />
              </NavLink>
            </li>
          </ul>
        </Collapse>
      </Container>
    </Navbar>
  );
  
};

export default AdminHeader;