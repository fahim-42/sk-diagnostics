import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logout } = useFirebase();
    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">SK Diagnostics</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#feedback">Feedback</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/tips">GetTips</Nav.Link>

                        {!(user.displayName || user.email) && <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}

                        {(user.displayName || user.email) && <Button variant="primary" onClick={logout}
                            className="text-center mx-auto">Logout</Button>}

                        {(user.displayName || user.email) &&
                            <Navbar.Text> Hello, <span className="fw-bold text-warning">'{user.displayName}'</span>
                            </Navbar.Text>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;