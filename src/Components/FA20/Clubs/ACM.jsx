import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './ACM.css';
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
class ACM extends Component{
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
                    <Row className="acm_row">
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/ACM.png')}/>
                    </Row>
                </Col>

                <Col md={5}>
                    <Row className="acm_row2">
                        <p className="acm_text">The Association for Computing Machinery (ACM) is UCSD’s largest tech organization, with over 1,000 members and more than 100 technical, professional, and social events year-round. We are an org dedicated to helping students interested in computing develop their practical skills and professional networks. Not only are we coders, designers, and entrepreneurs, we are also a community of gamers, boba addicts, bookworms, and much more. ACM also houses ACM Design, a community of designers who host weekly design jams and discuss UI/UX best practices. Every UCSD student, regardless of skill level or background, is welcome to join our online community and explore the realm of computing!</p>
                    </Row>
                    <Row className="acm_row3">
                        <div className="acm_div">
                            <div>
<<<<<<< HEAD
                                <div className="whitebutton">
                                    <p>WEBSITE</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="whitebutton">
                                    <p>FACEBOOK</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="whitebutton">
                                    <p>DISCORD</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                            </div>
                            <img src={require('./Pictures/Arrows6.png')}/>
=======
                                <a  className="whitebutton" href="http://www.acmucsd.com/" target="_blank">
                                    <p>WEBSITE</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="whitebutton" href="https://www.facebook.com/acmucsd" target="_blank">
                                    <p>FACEBOOK</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                                <a  className="whitebutton" href="https://urldefense.com/v3/__https://acmurl.com/discord__;!!Mih3wA!Qpy-HYlORlWzjavi7kWw-klEhQjGmiVale17lkFVcqhBubH8D4L5AK29xD4fgvg$" target="_blank">
                                    <p>DISCORD</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </a>
                            </div>
                            <img style={{flex:'auto'}} src={require('./Pictures/Arrows6.png')}/>
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
                                <HashLink smooth to="/issue2#section2">
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
export default connect(null, {setTheme})(ACM);