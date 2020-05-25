import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../images/Logo.svg';

class Navmenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                      <img
                        src={logo}                                                                            
                        alt="Logo"
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                      />{' '}
                      Bmsce 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto justify-content-end">
                        <Nav.Link href="#deets">Sign-up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes"><i className="fa fa-sign-out" aria-hidden="true"></i>Log-out</Nav.Link>
                    </Nav>
            </Navbar>
         );
    } 
}
 
export default Navmenu;