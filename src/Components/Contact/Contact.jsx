import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Contact/Contact.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import contact from '../../img/SP20/contact.jpg';
import pageBreak from '../../img/pagebreak.png';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
        )
    }
}
export default connect()(Contact);