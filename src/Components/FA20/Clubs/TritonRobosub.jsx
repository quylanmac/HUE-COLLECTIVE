import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TritonRobosub.css';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';

class TritonRobosub extends Component {
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
                                        <HashLink smooth to="/issue2/triton-robosub#club">
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

                            <Col md={3} id="club">
                                <Row style={{ backgroundColor: '#257a66' }}>
                                    <p className="tr_text">We’re Triton Robosub, a multi-disciplinary organization focused on designing, building and testing autonomous underwater vehicles! We compete in an international competition hosted in San Diego every summer, pursue research topics relating to oceanography, machine learning, and robotics, and host outreach activities for the engineering community around us. We’re looking for talented designers to build out our social media and brand, create exciting outreach workshops and events, and design a host of crucial submissions for the competition. You would be in charge of creating a new tech research group’s entire online presence, and help better the engineering community here in San Diego.</p>
                                </Row>
                            </Col>

                            <Col md={5}>

                                <Row>
                                    <Col className="nopad">
                                        <div className="ts_div">
                                            <img src={require('./Pictures/Arrows5.svg')} />

                                            <div className="ts_div_div">
                                                <a style={{ marginTop: "1rem" }} className="blackbutton" href="https://robosub.ucsd.edu/" target="_blank">
                                                    <p>WEBSITE</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                                <a className="blackbutton" href="https://www.facebook.com/TritonRobosub/" target="_blank">
                                                    <p>FACEBOOK</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                                <a className="blackbutton" href="https://robosub.ucsd.edu/apply/!" target="_blank">
                                                    <p>APPLICATIONS</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <img className="ts_img" src={require('./Pictures/Robosub.svg')} />
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
export default connect(null, { setTheme })(TritonRobosub);
