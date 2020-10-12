import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Contact/Contact.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import contact from '../../img/SP20/contact.jpg';
import pageBreak from '../../img/pagebreak.png';
import Marquee from 'react-double-marquee';
import NavBar from 'react-bootstrap/Navbar';
import Recruit from '../../img/Issue2/JOIN.gif';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                            <a href="https://docs.google.com/document/d/119WbGNpObYxrE8r0RxY6_ZAQRS1KrxjTXHA3HRX4QSA/edit" target="_blank">
                    <img src={Recruit} className="Recruitment" />
                </a>
            <Container>
                <Row>
                    <Col>
                        <div className="margin1 header">
                            <p>connect with us</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="margin2">
                            <img className="image" src={contact} />
                        </div>
                    </Col>
                </Row>
                <div className="breakMargin">
                    <img src={pageBreak} style={{ maxWidth: '100%' }} />
                </div>
                <div className="subtext">
                    <Row>
                        <Col xs={4}>
                            <p>instagram</p>
                        </Col>
                        <Col xs={4}>
                            <p>linkedin</p>
                        </Col>
                        <Col xs={4}>
                            <p>facebook</p>
                        </Col>
                    </Row>

                    <div className="underline">
                    <Row>
                        <Col xs={4}>
                            <a href="https://www.instagram.com/hue.collective/">ig/huecollective</a>
                        </Col>
                        <Col xs={4}>
                            <a href="https://www.linkedin.com/company/huecollective/">in/huecollective</a></Col>
                        <Col xs={4}>
                            <a href="https://www.facebook.com/HUEcollectives/">fb/HUECollectives</a></Col>
                    </Row>
                    </div>

                    <Row style={{marginTop:"3rem"}}>
                        <Col xs={4}>
                            <p>email</p>
                        </Col>
                    </Row>
                    <div className="underline">
                    <Row>
                        <Col xs={4}>
                            <a href="mailto:huecollectives@gmail.com">huecollectives@gmail.com</a>
                        </Col>
                    </Row>
                    </div>
                    <div style={{marginBottom:"3rem"}}/>
                </div>
            </Container>
            <NavBar className="myNav secondaryNav" style={{marginTop:"8rem"}}>
                        <div
                            style={{
                                width: '100%',
                                whiteSpace: 'nowrap',
                            }}
                            className="announcement"
                        >
                            <Marquee speed="0.08" direction="right">Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective |</Marquee>
                        </div>


                    </NavBar>
            </>
        )
    }
}
export default connect()(Contact);