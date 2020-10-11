import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFSD.css';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';

class DFSD extends Component {
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
                                        <HashLink smooth to="/issue2/design-for-san-diego#club">
                                        <Row md={3}>
                                            <Col md={12} className="down_arrow">
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </Col>
                                        </Row>
                                        </HashLink>
                                        <Row md={3} id="club">
                                            <img className="dfsd_img" src={require('./Pictures/DFSD.svg')} />
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="dfsd_mobile">
                                <Row>
                                    <img className="dfsd_img1" src={require('./Pictures/DFSD.svg')} />
                                </Row>
                            </Col>

                            <Col md={3} className="alignEnd">
                                <Row className="dfsd_row">

                                    <img style={{ maxWidth: '100%' }} src={require('./Pictures/Arrows2.svg')} />
                                    <a className="whitebutton" href="https://d4sd.org/" target="_blank">
                                        <p>WEBSITE</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://twitter.com/design4sd?lang=en" target="_blank">
                                        <p>TWITTER</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://www.facebook.com/DesignForSanDiego" target="_blank">
                                        <p>FACEBOOK</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                </Row>
                            </Col>

                            <Col md={5}>
                                <Row className="dfsd_row2">
                                    <p className="dfsd_text">Design for San Diego (D4SD) is a civic design challenge focused on bringing together our community and leveraging collective intelligence to address complex issues in the San Diego region. D4SD 2020 focused on how to improve the safety, emotional health, and economic prosperity of all San Diegans during the COVID pandemic. We support inclusion by all ages, skill-levels, and cultural backgrounds by motivating hundreds of diverse citizens to take part in facilitated activities, stakeholder research, and brainstorming to create design proposals for how to enact positive change in our region. D4SD has provided a unique position to make direct social impacts, while also advancing research on "collective innovation", where we explore how we can organize collective action through design thinking tools & strategies.</p>
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
export default connect(null, { setTheme })(DFSD);
