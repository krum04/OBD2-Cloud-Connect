import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CustomNavbar.css';

export default class CustomNavbar extends Component {
    render(){
        return(            
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to ='/'>OBDII Live Data</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>        
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                         <NavItem eventKey={2} componentClass={Link} href="/demo" to="/demo">
                            Demo
                        </NavItem>
                         <NavItem eventKey={3} componentClass={Link} href="/updates" to="/updates">
                            Updates
                        </NavItem>
                         <NavItem eventKey={3} componentClass={Link} href="/login" to="/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}