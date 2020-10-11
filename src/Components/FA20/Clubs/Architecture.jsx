import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import './Architecture.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';

class Architecture extends Component {
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
                                        <HashLink smooth to="/issue2/architecture@ucsd#club">
                                            <Row md={3}>
                                                <Col md={12} className="down_arrow">
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </Col>
                                            </Row>
                                        </HashLink>
                                        <Row md={3}>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={3} id="club" className="">
                                <Row className="arch_row" style={{ backgroundColor: '#257a66' }}>
                                    <img style={{ maxWidth: '100%', flex: 'auto' }} src={require('./Pictures/Arrows4.svg')} />

                                    <a style={{ marginTop: "1rem" }} className="whitebutton" href="https://plandesignbuild.ucsd.edu/news/challenge.html" target="_blank">
                                        <p>URBAN DESIGN CHALLENGE 2020</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://www.facebook.com/architectureatucsd" target="_blank">
                                        <p>FACEBOOK</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://www.instagram.com/archatucsd" target="_blank">
                                        <p>INSTAGRAM</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="archatucsd@gmail.com" target="_blank">
                                        <p>EMAIL</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                </Row>
                            </Col>

                            <Col md={5}>

                                <Row className="arch_row2"><img className="arch_img" src={require('./Pictures/Architecture.svg')} /></Row>
                                <Row className="arch_row3">
                                    <p className="arch_text">Architecture@UCSD is a student-run club, under the Construction Management Association of America (CMAA), founded to establish a space for students who are interested in the field of architecture and urban design. This club welcomes students from all majors, backgrounds, and experiences. We host software workshops (such as SketchUp, CAD, and Revit), professional speaker events, and site visits. We also have a project team that redesigns certain areas on campus from a student perspective and presents these plans to the UCSD Campus Planning Board. Our project team is usually active from the beginning of winter quarter to the end of spring quarter. For this 2020-21 school year, Architecture@UCSD will be withholding official activities and member recruitment until Winter 2021.</p>
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
export default connect(null, { setTheme })(Architecture);
