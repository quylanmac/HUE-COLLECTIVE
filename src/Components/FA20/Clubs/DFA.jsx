import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFA.css';
<<<<<<< HEAD
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
=======
import HorizontalScroll from 'react-scroll-horizontal';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';

>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
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
<<<<<<< HEAD
        return (
            <Container>
            <Row>
=======
        const parent = { width: `100%`, height: `100%` }
        const child = { width: `1110px`, height: `100%` }
        return (
        <Container className="container-fluid">
            <div style={parent} className="row nopad">
                <HorizontalScroll className="">
                    <div className="viewResponsive sec1" id="section1">
                        <Row className="nopad">
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                <Col md={4}>
                    <Row md={2}>
                    <Col md={12} className="issue_2">
                            <p>ISSUE 2</p>
                            <p>PLUGGED IN</p>
                    </Col>
                    </Row>
                    <Row xs={10} md={10}>
<<<<<<< HEAD
                        <Col md={4}>
=======
                        <Col xs={4} md={4}>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                            <Row>
                                <img className="plug_1" src={require('../Plug2.svg')} />
                            </Row>
                            <Row>
                                <img className="outlet" src={require('../Outlet.svg')} />
                            </Row>
                        </Col>

<<<<<<< HEAD
                        <Col md={8}>
=======
                        <Col xs={8} md={8}>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                            <Row md={9}>
                                <Directory/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

                <Col md={3}>
<<<<<<< HEAD
                    <Row style={{backgroundColor:'#ce5cf6'}}>
                        <p className="dfa_text">We design people-centered products, services, and experiences to tackle local challenges. Our studio aims to build a community of interdisciplinary students of all majors who fully embraces the Human-Centered Design process to aid in social innovation.</p>
                    </Row>
                    <Row>
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/DFAlogo.png')}/>
=======
                    <Row>
                        <p className="dfa_text">We design people-centered products, services, and experiences to tackle local challenges. Our studio aims to build a community of interdisciplinary students of all majors who fully embraces the Human-Centered Design process to aid in social innovation.</p>
                    </Row>
                    <Row>
                        <img style={{maxWidth:'100%', zIndex:"1"}} src={require('./Pictures/DFAlogo.png')}/>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                    </Row>
                </Col>

                <Col md={5}>

                    <Row className="dfa_row">
                        <div className="dfa_div">
                            <div>
<<<<<<< HEAD
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
=======
                                <a  className="whitebutton" href="https://www.google.com/url?q=https://ucsd.zoom.us/j/8230996088&sa=D&source=calendar&ust=1599450524299000&usg=AOvVaw3BbwlHdGHRbBhli5o6XWCw" target="_blank">
                                    <p>INFO NIGHT 10/5</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="whitebutton" href="https://www.instagram.com/dfa.ucsd/" target="_blank">
                                    <p>INSTAGRAM</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="whitebutton" href="http://dfaucsd.org/" target="_blank">
                                    <p>WEBSITE</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                            </div>
                            <img style={{flex:'auto'}} src={require('./Pictures/Arrows3.png')}/>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                        </div>
                    </Row>
                </Col>

                </Row>
<<<<<<< HEAD
                <HashLink smooth to="/issue2#section2" className="end2Button">
                    <img src={groupButton} />
                </HashLink>
                </Container>
=======
                <Row className="horizontal_scroll">
                                <HashLink smooth to="/issue2#section2" >
                                    <img src={groupButton} className="end2Button"/>
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
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
        )
    }
}
export default connect(null, {setTheme})(DFA);