import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFA.css';
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
class DFA extends Component{
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
    render(){
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
                                <Directory/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

                <Col md={3}>
                    <Row style={{backgroundColor:'#ce5cf6'}}>
                        <p className="dfa_text">We design people-centered products, services, and experiences to tackle local challenges. Our studio aims to build a community of interdisciplinary students of all majors who fully embraces the Human-Centered Design process to aid in social innovation.</p>
                    </Row>
                    <Row>
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/DFAlogo.png')}/>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row className="dfa_row">
                        <div className="dfa_div">
                            <div>
                                <div className="whitebutton">
                                    <p>INFO NIGHT 10/5</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="whitebutton">
                                    <p>INSTAGRAM</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="whitebutton">
                                    <p>WEBSITE</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                            </div>
                            <img src={require('./Pictures/Arrows3.png')}/>
                        </div>
                    </Row>
                </Col>

                </Row>
                <HashLink smooth to="/issue2#section2" className="end2Button">
                    <img src={groupButton} />
                </HashLink>
                </Container>
        )
    }
}
export default connect(null, {setTheme})(DFA);