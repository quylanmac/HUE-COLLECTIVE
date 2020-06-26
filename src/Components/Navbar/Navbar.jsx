import React, { Component, useState, useEffect } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, Image, DropdownButton } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { rootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import './Navbar.css';
const mapStateToProps = (state) => {
    return { color: state.color };
}
const Navbar = ({ color }) => {
    const [myColor, setColor] = useState("white");
    useEffect(() => {
        if (color != undefined) {
            if (color.content != undefined) {
                setColor(color.content);
            }
        }
    }, []);

    const [redirect, redirectTo] = useState('/index');
    return (
        <div>
            <NavBar className="myNav" expand="lg">
                <NavBar.Brand className="navBrand" onClick={() => redirectTo('/index')}>
                    <div className="overlay">
                        <div className="overlay-2">
                            <p className="secondaryLogo" style={{ color: myColor }}>HUE</p>
                        </div>
                        <div class="overlay-1">
                            <p className="mainLogo" style={{ color: myColor }}>HUE</p>
                        </div>
                    </div>

                </NavBar.Brand>
                <NavBar.Toggle aria-controls="responsive-navbar-nav" />
                <NavBar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto navLinks">
                    <Nav.Link onClick={() => redirectTo('/issues')}>
                        issues
                    </Nav.Link>
                    <Nav.Link onClick={() => redirectTo('/about')}>
                        about
                    </Nav.Link>
                    <Nav.Link onClick={() => redirectTo('/contact')}>
                        contact
                    </Nav.Link>

                </Nav>
                </NavBar.Collapse>
            </NavBar>
            <Redirect to={redirect} />
        </div>
    )

}
export default connect(mapStateToProps)(Navbar);