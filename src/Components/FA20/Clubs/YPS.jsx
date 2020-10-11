import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './YPS.css';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';

class YPS extends Component {
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
                                        <HashLink smooth to="/issue2/young-planners-society#club">
                                            <Row md={3}>
                                                <Col md={12} className="down_arrow">
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </Col>
                                            </Row>
                                        </HashLink>
                                        <Row md={3}></Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={3} id="club" className="alignEnd">
                                <Row className="yps_row">

                                    <img style={{ flex: 'auto', maxWidth: '100%' }} src={require('./Pictures/Arrows2.svg')} />

                                    <a className="whitebutton" href="https://ucsdyoungplanners.weebly.com/" target="_blank">
                                        <p>WEBSITE</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://ucsdyoungplanners.weebly.com/gbm-schedule" target="_blank">
                                        <p>GBM SCHEDULE</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                    <a className="whitebutton" href="https://instagram.com/ucsdyps" target="_blank">
                                        <p>INSTAGRAM</p>
                                        <img src={require('./Pictures/whitearrow.svg')} />
                                    </a>
                                </Row>
                            </Col>

                            <Col md={5}>

                                <Row className="yps_row2"><img style={{ flex: 'auto', maxWidth: "60%" }} src={require('./Pictures/YPS.svg')} /></Row>
                                <Row className="yps_row3">
                                    <p className="yps_text">The Young Planners' Society at UC San Diego is a nationally registered pre-professional networking organization under the American Planning Association (APA) California Chapter for undergraduate students interested in the field of urban planning to come together! Young Planners' Society aims to enhance the student experience by providing social opportunities for undergraduates to get involved not only on campus, but also in the professional community by connecting undergraduates with resources such as guest speakers, panelists, competitions, and involvement opportunities with the American Planning Association.</p>
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
export default connect(null, { setTheme })(YPS);
