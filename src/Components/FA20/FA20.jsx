import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import ScrollText from 'react-scroll-text';
import NavBar from 'react-bootstrap/Navbar';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { NavDropdown, Nav, Image, DropdownButton } from 'react-bootstrap';
import './FA20.css';
import { setTheme } from '../../redux/actions';
import HorizontalScroll from 'react-scroll-horizontal';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../GroupInterview/GroupInterview';
import groupButton from '../../img/Issue2/button.png';
import Empowerment from '../Empowerment/Empowerment';
class FA20 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        const parent = { width: `100%`, height: `100%` }
        const child = { width: `1110px`, height: `100%` }
        return (
            <Container className="container-fluid">
                <div style={parent} className="row nopad">
                    <HorizontalScroll className="">
                        <div className="viewResponsive sec1" id="section1">
                            <Row className="nopad">
                                <Col md={4}>
                                    <Row md={2}>
                                        <Col md={12} className="issue_2">
                                            <p>ISSUE 2</p>
                                            <p>PLUGGED IN</p>
                                        </Col>
                                    </Row>
                                    <Row xs={10} md={10}>
                                        <Col md={4}>
                                            <Row>
                                                <img className="plug_1" src={require('./Plug2.svg')} />
                                            </Row>
                                            <Row>
                                                <img className="outlet" src={require('./Outlet.svg')} />
                                            </Row>
                                        </Col>

                                        <Col md={8}>
                                            <Row md={9}>
                                                <Col className="org_directory">
                                                    <h1>DESIGN ORGS DIRECTORY</h1>
                                                    <p>Design Co</p>
                                                    <p>Triton Software Engineering (TSE)</p>
                                                    <p>Design for America (DFA)</p>
                                                    <p>Architecture @ UCSD</p>
                                                    <p>Trend Magazine</p>
                                                    <p>ACM Design</p>
                                                    <p>Design for San Diego</p>
                                                    <p>Triton Robosub</p>
                                                    <p>Young Planners Society</p>
                                                </Col>
                                            </Row>
                                            <Row md={3}>
                                                <Col md={12} className="design_outlet">
                                                    <p>Finding your design outlet at UCSD</p>
                                                </Col>
                                            </Row>
                                        </Col>


                                    </Row>
                                </Col>
                                <Col md={3}>
                                    <Row md={9}>
                                        <img className="clouds" src={require('./Clouds.svg')} />
                                    </Row>
                                    <Row md={3}>
                                        <img className="smiley" src={require('./Smiley.svg')} />
                                    </Row>
                                </Col>

                                <Col md={5}>
                                    <Row md={3}>
                                        <img className="arrows" src={require('./Arrows.svg')} />
                                    </Row>
                                    <Row md={2}>
                                        {/* <Col md={8}> */}
                                        <img className="text" src={require('./Text.svg')} />
                                        {/* </Col> */}
                                        {/* <Col md={4}> */}
                                        {/* <img className="thought" src={require('./Thought.svg')}/> */}
                                        {/* </Col> */}
                                    </Row>
                                    <Row md={5}>
                                        <img className="mug" src={require('./Mug.svg')} />
                                    </Row>
                                    <Row className="title" md={2}>
                                        <p>HUECOLLECTIVE.CO</p>
                                    </Row>
                                </Col>

                            </Row>
                            <HashLink smooth to="/issue2#section2">
                                <img src={groupButton} />
                            </HashLink>
                        </div>
                        <div className="viewResponsive sec2" id="section2">
                            <GroupInterview />
                        </div>
                        <div className="viewResponsive sec3" id="section3">
                            <Empowerment />
                        </div>                    </HorizontalScroll>
                </div>
                 </Container>
           
        )
    }
}
export default connect(null, { setTheme })(FA20);