import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './ACM.css';
import HorizontalScroll from 'react-scroll-horizontal';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';

class ACM extends Component {
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
                                        <Col xs={4} md={4}>
                                            <Row>
                                                <img className="plug_1" src={require('../Plug2.svg')} />
                                            </Row>
                                            <Row>
                                                <img className="outlet" src={require('../Outlet.svg')} />
                                            </Row>
                                        </Col>

                                        <Col xs={8} md={8}>
                                            <Row md={9}>
                                                <Directory />
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={3}>
                                    <Row className="acm_row">
                                        <img style={{ maxWidth: '100%' }} src={require('./Pictures/ACM.png')} />
                                    </Row>
                                </Col>

                                <Col md={5}>
                                    <Row className="acm_row2">
                                        <p className="acm_text">The Association for Computing Machinery (ACM) is UCSD’s largest tech organization, with over 1,000 members and more than 100 technical, professional, and social events year-round. We are an org dedicated to helping students interested in computing develop their practical skills and professional networks. Not only are we coders, designers, and entrepreneurs, we are also a community of gamers, boba addicts, bookworms, and much more. ACM also houses ACM Design, a community of designers who host weekly design jams and discuss UI/UX best practices. Every UCSD student, regardless of skill level or background, is welcome to join our online community and explore the realm of computing!</p>
                                    </Row>
                                    <Row className="acm_row3">
                                        <div className="acm_div">
                                            <div>
                                                <a className="whitebutton" href="http://www.acmucsd.com/" target="_blank">
                                                    <p>WEBSITE</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                                <a className="whitebutton" href="https://www.facebook.com/acmucsd" target="_blank">
                                                    <p>FACEBOOK</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                                <a className="whitebutton" href="https://urldefense.com/v3/__https://acmurl.com/discord__;!!Mih3wA!Qpy-HYlORlWzjavi7kWw-klEhQjGmiVale17lkFVcqhBubH8D4L5AK29xD4fgvg$" target="_blank">
                                                    <p>DISCORD</p>
                                                    <img src={require('./Pictures/whitearrow.svg')} />
                                                </a>
                                            </div>
                                            <img style={{ flex: 'auto' }} src={require('./Pictures/Arrows6.png')} />
                                        </div>
                                    </Row>
                                </Col>

                            </Row>


                            <Row className="horizontal_scroll justifyEnd">
                                <HashLink smooth to="/issue2#section2" className="">
                                    <img src={groupButton} className="end2Button responseImg" />
                                </HashLink>
                            </Row>
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
export default connect(null, { setTheme })(ACM);