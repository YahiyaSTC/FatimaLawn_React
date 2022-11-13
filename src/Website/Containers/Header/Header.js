import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../Assets/Css/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className='header'>
            <Navv />
        </header>
    )
}

function Navv() {
    return (
        <Navbar bg="dark" expand="lg" className='w-100'>
            <Container className=''>
                <Navbar.Brand href="/admin"><span> Fatima Lawn </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className=''>



                    <Nav
                        className="me-auto my-2 my-lg-0 w-100 d-flex flex-column align-items-end "
                        navbarScroll
                    >
                        <ListGroup as='ul' >
                            <ListGroupItem as='li'><i class="fa-brands fa-facebook-f"></i></ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-brands fa-instagram"></i></ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-brands fa-twitter"></i></ListGroupItem>
                        </ListGroup>

                        <ListGroup as='ul' >
                            <ListGroupItem as='li'><i class="fa-solid fa-phone"></i> <a href='tel:03463045416'>03463045416</a> </ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-solid fa-envelope"></i> <a href='mailto:fatimalawn@gmail.com'>fatimalawn@gmail.com</a> </ListGroupItem>
                        </ListGroup>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header