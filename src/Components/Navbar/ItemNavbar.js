import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from './logo_zapa.png';
import '../../Style/Navbar.css';
import { useCartContext } from '../CartContext/cartContext';

const ItemNavbar = () => {
    const { count } = useCartContext();

    return(
    <React.Fragment>
        <Navbar bg="dark" expand="lg" className="marginMenu">
            <Navbar.Brand href="/home"><img src={logo}alt="" className="inicioLogo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="menu">
                <Link to='/'><Nav className="itemMenu">Inicio</Nav></Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown" className="prod">
                    <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Adidas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Jordan</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav className="itemMenu">Nosotros</Nav>
                <Nav className="itemMenu">{count}<CartWidget /></Nav>
            </Navbar.Collapse>
        </Navbar>
    </React.Fragment>
    )
}

export default ItemNavbar