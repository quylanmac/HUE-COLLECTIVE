import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import Empowerment from '../../Empowerment/Empowerment';
import './DesignCo.css';
import groupButton from '../../../img/Issue2/button.png';
import { Link } from 'react-router-dom';
import arrows from './Pictures/Arrows2.png';

class DesignCo extends Component {
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
                                <Link to={{pathname: "/issue2"}}>
                                    <Row md={2}>
                                        <Col md={12} className="issue_2">
                                            <p>ISSUE 2</p>
                                            <p>PLUGGED IN</p>
                                        </Col>
                                    </Row>
                                    </Link>
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
                                    {/* <Row md={12}>asd</Row> */}
                                    <Row className="designco_row2">
                                        {/* <Col> */}
                                        <img style={{ maxWidth: '100%', display:'flex', justifyContent:'content' }} className="designco_arrows" src={arrows} />

                                        <a className="whitebutton" href="http://ucsddesign.co/" target="_blank">
                                            <p>WEBSITE</p>
                                            <img src={require('./Pictures/whitearrow.svg')} />
                                        </a>

                                        <a className="whitebutton" href="https://www.community.ucsddesign.co/" target="_blank">
                                            <p>COMMUNITY PAGE</p>
                                            <img src={require('./Pictures/whitearrow.svg')} />
                                        </a>
                                        {/* </Col> */}
                                    </Row>
                                </Col>

                                <Col md={5}>

                                    <Row className="designco_row3"><img style={{ maxWidth: '60%', flex: 'auto' }} src={require('./Pictures/designcologo.svg')} /></Row>
                                    <Row className="designco_row4">
                                        <p className="designco_text">Design Co is UC San Diego's pre-professional design organization that bridges the gap between student designers and industry. Their mission is to cultivate a space that fosters opportunity and growth as an inclusive community of designers. Design Co hosts a combination of workshops, events, and career growth opportunities every quarter, and they hope to see you there.</p>
                                    </Row>
                                </Col>

                            </Row>

                            <Row className="horizontal_scroll justifyEnd">
                                <HashLink smooth to="/groupinterview"  className="">
                                    <img src={groupButton} className="end2Button responseImg2" />
                                </HashLink>
                            </Row>
                        </div>
                  
                </div>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(DesignCo);