import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import './Architecture.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
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
class Architecture extends Component{
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
                    <Row className="arch_row" style={{backgroundColor:'#257a66'}}>
<<<<<<< HEAD
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/Arrows4.png')}/>
                        <div style={{marginTop:'2rem'}} className="whitebutton">
                            <p>URBAN DESIGN CHALLENGE 2020</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        <div className="whitebutton">
                            <p>FACEBOOK</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        <div className="whitebutton">
                            <p>INSTAGRAM</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
                        <div style={{marginBottom:'3rem'}} className="whitebutton">
                            <p>EMAIL</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </div>
=======
                        <img style={{maxWidth:'100%', flex:'auto'}} src={require('./Pictures/Arrows4.png')}/>

                        <a style={{marginTop:"1rem"}} className="whitebutton" href="https://plandesignbuild.ucsd.edu/news/challenge.html" target="_blank">
                            <p>URBAN DESIGN CHALLENGE 2020</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
                        <a  className="whitebutton" href="https://www.facebook.com/architectureatucsd" target="_blank">
                            <p>FACEBOOK</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
                        <a  className="whitebutton" href="https://www.instagram.com/archatucsd" target="_blank">
                            <p>INSTAGRAM</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
                        <a  className="whitebutton" href="archatucsd@gmail.com" target="_blank">
                            <p>EMAIL</p>
                            <img src={require('./Pictures/whitearrow.svg')}/>
                        </a>
>>>>>>> 707ae0f34d6f67094fbcab2945778a08721590ac
                    </Row>
                </Col>

                <Col md={5}>

                    <Row className="arch_row2"><img className="arch_img" src={require('./Pictures/Architecture.png')}/></Row>
                    <Row className="arch_row3">
                        <p className="arch_text">Architecture@UCSD is a student-run club, under the Construction Management Association of America (CMAA), founded to establish a space for students who are interested in the field of architecture and urban design. This club welcomes students from all majors, backgrounds, and experiences. We host software workshops (such as SketchUp, CAD, and Revit), professional speaker events, and site visits. We also have a project team that redesigns certain areas on campus from a student perspective and presents these plans to the UCSD Campus Planning Board. Our project team is usually active from the beginning of winter quarter to the end of spring quarter. For this 2020-21 school year, Architecture@UCSD will be withholding official activities and member recruitment until Winter 2021.</p>
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
export default connect(null, {setTheme})(Architecture);