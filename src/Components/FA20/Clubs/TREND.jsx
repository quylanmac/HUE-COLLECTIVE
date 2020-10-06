import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TREND.css';
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
class TREND extends Component{
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
                                <img className="trend_img" src={require('./Pictures/TREND.png')}/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

<<<<<<< HEAD
=======
                <Col className="trend_mobile">
                    <Row>
                    <img className="trend_img1" src={require('./Pictures/TREND.png')}/>
                    </Row>
                </Col>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                <Col md={3}>
                    <Row style={{backgroundColor:'#257a66'}}>
                        <p className="trend_text">TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer - both print and online versions. We are a team of student artists, designers, writers, photographers, stylists and marketing managers. This student organization is the perfect place to be in for anyone with a creative mind and a love for art and fashion.</p>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row>
                    <div className="trend_div">
<<<<<<< HEAD
                        <img src={require('./Pictures/Arrows5.png')}/>
                        
                            <div className="trend_div_div">
                                <div className="blackbutton" style={{marginTop:"1rem"}}>
                                    <p>FACEBOOK</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="blackbutton">
                                    <p>INSTAGRAM</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="blackbutton">
                                    <p>PAST ISSUES</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
=======
                        <img style={{flex:'auto'}} src={require('./Pictures/Arrows5.png')}/>
                        
                            <div className="trend_div_div">
                                <a style={{marginTop:"1rem"}} className="blackbutton" href="https://www.facebook.com/trenducsd" target="_blank">
                                    <p>FACEBOOK</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="blackbutton" href="https://www.instagram.com/trenducsd/?hl=en" target="_blank">
                                    <p>INSTAGRAM</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="blackbutton" href="https://urldefense.com/v3/__https://issuu.com/trenducsd__;!!Mih3wA!VQYKA6KEXFVAEu9CKWLcfag7zzCp56oFBOvEwuMnzCHF1iIJl0zxxuc5Tohgo9g$" target="_blank">
                                    <p>PAST ISSUES</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                            </div>
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
export default connect(null, {setTheme})(TREND);