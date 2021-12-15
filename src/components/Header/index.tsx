import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
            <Navbar bg="#323232" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Person CRUD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item as={Link} to="/" className="nav-link">Inicio</Nav.Item>
                            <Nav.Item as={Link} to="/pessoas" className="nav-link" >Pessoas</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header