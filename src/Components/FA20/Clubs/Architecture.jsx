import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import './Architecture.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
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
                    <Row className="arch_row" style={{backgroundColor:'#257a66'}}>
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
                    </Row>
                </Col>

                <Col md={5}>

                    <Row className="arch_row2"><img className="arch_img" src={require('./Pictures/Architecture.png')}/></Row>
                    <Row className="arch_row3">
                        <p className="arch_text">Architecture@UCSD is a student-run club, under the Construction Management Association of America (CMAA), founded to establish a space for students who are interested in the field of architecture and urban design. This club welcomes students from all majors, backgrounds, and experiences. We host software workshops (such as SketchUp, CAD, and Revit), professional speaker events, and site visits. We also have a project team that redesigns certain areas on campus from a student perspective and presents these plans to the UCSD Campus Planning Board. Our project team is usually active from the beginning of winter quarter to the end of spring quarter. For this 2020-21 school year, Architecture@UCSD will be withholding official activities and member recruitment until Winter 2021.</p>
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
export default connect(null, {setTheme})(Architecture);