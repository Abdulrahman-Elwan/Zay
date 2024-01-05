import React from 'react'
import './Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Zay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="bage">
                            <Nav.Link className='active1 act' href="#home">Home</Nav.Link>
                            <Nav.Link className='active2' href="#about">About</Nav.Link>
                            <Nav.Link className='active3' href="#shop">Shop</Nav.Link>
                            <Nav.Link className='active4' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
