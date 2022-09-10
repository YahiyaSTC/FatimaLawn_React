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
        <Navbar bg="dark" expand="lg" className=''>
            <Container className=''>
                <Navbar.Brand ><span> Fatima Lawn </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className=''>



                    <Nav
                        className="me-auto my-2 my-lg-0 w-100 d-flex flex-column align-items-end"
                        navbarScroll
                    >
                        <ListGroup as='ul' >
                            <ListGroupItem as='li'><i class="fa-brands fa-facebook-f"></i></ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-brands fa-instagram"></i></ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-brands fa-twitter"></i></ListGroupItem>
                        </ListGroup>

                        <ListGroup as='ul' >
                            <ListGroupItem as='li'><i class="fa-solid fa-phone"></i> <a href='tel:03486816243'>03486816243</a> </ListGroupItem>
                            <ListGroupItem as='li'><i class="fa-solid fa-envelope"></i> <a href='mailto:fatimalawn@gmail.com'>fatimalawn@gmail.com</a> </ListGroupItem>
                        </ListGroup>
                    </Nav>


                    {/* <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1" active>Home</Nav.Link>
                        <Nav.Link href="#action2" active>Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav> */}


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header