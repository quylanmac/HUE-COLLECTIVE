import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TREND.css';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';
import { Link } from 'react-router-dom';

class TREND extends Component {
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
                                        <Row md={3} id="club">
                                            <img className="trend_img" src={require('./Pictures/TREND.svg')} />
                                        </Row>
                                        <HashLink smooth to="/issue2/trend-magazine#club">
                                        <Row md={3}>
                                            <Col md={12} className="down_arrow">
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </Col>
                                        </Row>
                                        </HashLink>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className="trend_mobile">
                                <Row>
                                    <img className="trend_img1" src={require('./Pictures/TREND.svg')} />
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Row style={{ backgroundColor: '#257a66' }}>
                                    <p className="trend_text">TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer - both print and online versions. We are a team of student artists, designers, writers, photographers, stylists and marketing managers. This student organization is the perfect place to be in for anyone with a creative mind and a love for art and fashion.</p>
                                </Row>
                            </Col>

                            <Col md={5}>

                                <Row className="trend_row">
                                    <div className="trend_div">
                                        <img style={{ flex: 'auto' }} src={require('./Pictures/Arrows5.svg')} />

                                        <div className="trend_div_div">
                                            <a style={{ marginTop: "1rem" }} className="blackbutton" href="https://www.facebook.com/trenducsd" target="_blank">
                                                <p>FACEBOOK</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                            <a className="blackbutton" href="https://www.instagram.com/trenducsd/?hl=en" target="_blank">
                                                <p>INSTAGRAM</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                            <a className="blackbutton" href="https://urldefense.com/v3/__https://issuu.com/trenducsd__;!!Mih3wA!VQYKA6KEXFVAEu9CKWLcfag7zzCp56oFBOvEwuMnzCHF1iIJl0zxxuc5Tohgo9g$" target="_blank">
                                                <p>PAST ISSUES</p>
                                                <img src={require('./Pictures/whitearrow.svg')} />
                                            </a>
                                        </div>
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
export default connect(null, { setTheme })(TREND);
