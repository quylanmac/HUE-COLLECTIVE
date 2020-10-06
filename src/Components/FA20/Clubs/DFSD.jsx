import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFSD.css';
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
class DFSD extends Component{
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
                            <Row md={3}>
                                <img className="dfsd_img" src={require('./Pictures/DFSD.png')}/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>
<<<<<<< HEAD
=======
                <Col className="dfsd_mobile">
                    <Row>
                        <img className="dfsd_img1" src={require('./Pictures/DFSD.png')}/>
                    </Row>
                </Col>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac

                <Col md={3}>
                    <Row className="dfsd_row">
                    
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/Arrows2.png')}/>
<<<<<<< HEAD
                        <div>
                        <div className="whitebutton">
                            <p>WEBSITE</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        <div className="whitebutton">
                            <p>TWITTER</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        <div className="whitebutton">
                            <p>FACEBOOK</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        </div>
=======
                        <a  className="whitebutton" href="https://d4sd.org/" target="_blank">
                            <p>WEBSITE</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
                        <a  className="whitebutton" href="https://twitter.com/design4sd?lang=en" target="_blank">
                            <p>TWITTER</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
                        <a  className="whitebutton" href="https://www.facebook.com/DesignForSanDiego" target="_blank">
                            <p>FACEBOOK</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                    </Row>
                </Col>

                <Col md={5}>
                    <Row className="dfsd_row2">
                        <p className="dfsd_text">Design for San Diego (D4SD) is a civic design challenge focused on bringing together our community and leveraging collective intelligence to address complex issues in the San Diego region. D4SD 2020 focused on how to improve the safety, emotional health, and economic prosperity of all San Diegans during the COVID pandemic. We support inclusion by all ages, skill-levels, and cultural backgrounds by motivating hundreds of diverse citizens to take part in facilitated activities, stakeholder research, and brainstorming to create design proposals for how to enact positive change in our region. D4SD has provided a unique position to make direct social impacts, while also advancing research on "collective innovation", where we explore how we can organize collective action through design thinking tools & strategies.</p>
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
                                    <img src={groupButton} className="end2Button" />
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
export default connect(null, {setTheme})(DFSD);