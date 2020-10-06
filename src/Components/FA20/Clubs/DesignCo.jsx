import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DesignCo.css';
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';

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
        return (
            <Container>
                <Row>
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
                                    <img className="plug_1" src={require('../Plug2.svg')} />
                                </Row>
                                <Row>
                                    <img className="outlet" src={require('../Outlet.svg')} />
                                </Row>
                            </Col>

                            <Col md={8}>
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
                            <img style={{ maxWidth: '100%' }} src={require('./Pictures/Arrows2.png')} />
                            <div className="whitebutton">
                                <p>WEBSITE</p>
                                <img src={require('./Pictures/whitearrow.svg')} />
                            </div>
                            <div className="whitebutton">
                                <p>COMMUNITY PAGE</p>
                                <img src={require('./Pictures/whitearrow.svg')} />
                            </div>
                            {/* </Col> */}
                        </Row>
                    </Col>

                    <Col md={5}>

                        <Row className="designco_row3"><img style={{ maxWidth: '60%' }} src={require('./Pictures/designcologo.svg')} /></Row>
                        <Row className="designco_row4">
                            <p className="designco_text">Design Co is UC San Diego's pre-professional design organization that bridges the gap between student designers and industry. Their mission is to cultivate a space that fosters opportunity and growth as an inclusive community of designers. Design Co hosts a combination of workshops, events, and career growth opportunities every quarter, and they hope to see you there.</p>
                        </Row>
                    </Col>

                </Row>
                <HashLink smooth to="/issue2#section2" className="endButton">
                    <img src={groupButton} />
                </HashLink>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(DesignCo);