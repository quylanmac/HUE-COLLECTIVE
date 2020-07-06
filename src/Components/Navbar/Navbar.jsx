import React, { Component, useState, useEffect } from 'react';
import NavBar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, Image, DropdownButton } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { rootState } from '../../redux/reducers';
import { connect } from 'react-redux';
import './Navbar.css';
const mapStateToProps = (state) => {
    return { color: state.color, theme: state.theme };
}
const Navbar = ({ color, theme }) => {
     const [redirect, redirectTo] = useState('/index');
    const [myColor, setColor] = useState("white");
    const [myTheme, setTheme] = useState("black");
    useEffect(() => {
        if (color != undefined) {
            if (color.content != undefined) {
                setColor(color.content);
            }
        }
        console.log(theme);
        if (theme != undefined) {
            if (theme.content != undefined) {
            setTheme(theme.content);
            }
        }
    }, [theme]);

   
    return (
        <div>
           {console.log(myTheme)}
            <NavBar className={myTheme === "white" ? 'myNav2': 'myNav'} expand="lg">
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
                <Nav className="ml-auto">
                    <Nav.Link className={myTheme=== "white" ? 'navLinks2': 'navLinks'} onClick={() => redirectTo('/issues')}>
                        issues
                    </Nav.Link>
                    <Nav.Link className={myTheme=== "white" ? 'navLinks2': 'navLinks'} onClick={() => redirectTo('/about')}>
                        about
                    </Nav.Link>
                    <Nav.Link className={myTheme=== "white" ? 'navLinks2': 'navLinks'} onClick={() => redirectTo('/contact')}>
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