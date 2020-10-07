import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TSE.css';
import HorizontalScroll from 'react-scroll-horizontal';
import { HashLink } from 'react-router-hash-link';
import GroupInterview from '../../GroupInterview/GroupInterview';
import groupButton from '../../../img/Issue2/button.png';
import Empowerment from '../../Empowerment/Empowerment';

class TSE extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render(){
        const parent = { width: `100%`, height: `100%` }
        const child = { width: `1110px`, height: `100%` }
        return (
        <Container className="container-fluid">
            <div style={parent} className="row nopad">
                <HorizontalScroll className="">
                    <div className="viewResponsive sec1" id="section1">
                        <Row className="nopad">
                <Col md={4}>
                    <Row md={2}>
                    <Col md={12} className="issue_2">
                            <p>ISSUE 2</p>
                            <p>PLUGGED IN</p>
                    </Col>
                    </Row>
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
                                <Directory/>
                            </Row>
                            {/* <Row></Row> */}
                        </Col> 
                    </Row>
                </Col>

                <Col md={3}>
                    <Row style={{backgroundColor:'#257a66'}}>
                        <p className="tse_text">Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites and mobile applications pro-bono for social good, while giving our developers practical, real world experience.</p>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row><img style={{maxWidth:"100%", flex:'auto'}} src={require('./Pictures/TSE.svg')}/></Row>
                    <Row>
                    {/* <Col md={7} className="tse_col"> */}
                    <div className="tse_div">
                        <div>
                        <a  className="blackbutton" href="https://www.facebook.com/TritonSE/" target="_blank">
                                <p>FACEBOOK</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </a>

                            <a  className="blackbutton" href="https://www.instagram.com/ucsd_tse" target="_blank">
                                <p>INSTAGRAM</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </a>

                            <a  className="blackbutton" href="https://www.linkedin.com/company/tritonsoftwareengineering/" target="_blank">
                                <p>LINKEDIN</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </a>
                        </div>
                            <img src={require('./Pictures/Arrows3.png')}/>
                        </div>
                    </Row>
                </Col>

                </Row>
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
        )
    }
}
export default connect(null, {setTheme})(TSE);