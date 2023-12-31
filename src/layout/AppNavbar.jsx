import React from 'react'
import './Nav.css'
import { Navbar, Button, Container, Nav, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const AppNavbar = () => {
    return (
        <React.Fragment>
            <nav>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                    <Container >
                        <Navbar.Brand>HC <span style={{color:"red"}}>0</span> DE</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link className='navLink' as={NavLink} to='/'><small>Developed By Piyas Mahamude Alif !</small></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </React.Fragment>
    )
}

export default AppNavbar