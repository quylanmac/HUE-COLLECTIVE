import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFA.css';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';
import arrows3 from './Pictures/Arrows3.svg';
import logo from './Pictures/DFAlogo.svg';

class DFA extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        // window.scrollTo(0,0);
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
                    <div className="viewResponsive sec1" id="section1">
                        <Row className="nopad">
                            <Col md={4}>
                                <Link to={{ pathname: "/issue2" }}>
                                    <Row md={2}>
                                        <Col md={12} className="issue_2">
                                            <p>ISSUE 2</p>
                                            <p>PLUGGED IN</p>
                                        </Col>
                                    </Row>
                                </Link>
                                <Row xs={10} md={10}>
                                    <Col xs={4} md={4}>
                                    <Row className="plug_1_row">
                                            <img className="plug_1" src={require('../Plug2.svg')} />
                                        </Row>
                                        {/* <Row>
                                                <img className="outlet" src={require('../Outlet.svg')} />
                                            </Row> */}
                                    </Col>

                                    <Col xs={8} md={8}>
                                        <Row md={9}>
                                            <Directory />
                                        </Row>
                                        <HashLink smooth to="/issue2/design-for-america#club">
                                        <Row md={3}>
                                            <Col md={12} className="down_arrow">
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </Col>
                                        </Row>
                                        </HashLink>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={3} id="club">
                                <Row>
                                    <p className="dfa_text">We design people-centered products, services, and experiences to tackle local challenges. Our studio aims to build a community of interdisciplinary students of all majors who fully embraces the Human-Centered Design process to aid in social innovation.</p>
                                </Row>
                                <Row className="dfa_row2">
                                    <img style={{ width: '100%', zIndex: "1" }} src={logo} />
                                </Row>
                            </Col>

                            <Col md={5} className="alignEnd">

                                <Row className="dfa_row">
                                    <div className="dfa_div">
                                        <div>
                                            <a className="whitebutton" href="https://www.google.com/url?q=https://ucsd.zoom.us/j/8230996088&sa=D&source=calendar&ust=1599450524299000&usg=AOvVaw3BbwlHdGHRbBhli5o6XWCw" target="_blank">
                                                <p>INFO NIGHT 10/5</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                            <a className="whitebutton" href="https://www.instagram.com/dfa.ucsd/" target="_blank">
                                                <p>INSTAGRAM</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                            <a className="whitebutton" href="http://dfaucsd.org/" target="_blank">
                                                <p>WEBSITE</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                        </div>
                                        <img style={{ flex: 'auto' }} src={arrows3} />
                                    </div>
                                </Row>
                            </Col>

                        </Row>
                        <Row className="horizontal_scroll justifyEnd">
                            <HashLink smooth to="/groupinterview" className="">
                                <img src={groupButton} className="end2Button responseImg2" />
                            </HashLink>
                        </Row>
                    </div>

                </div>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(DFA);
