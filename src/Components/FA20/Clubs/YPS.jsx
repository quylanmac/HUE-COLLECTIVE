import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './YPS.css';
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
class YPS extends Component{
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
                <Row className="yps_row">
                    
                    <img style={{maxWidth:'100%'}} src={require('./Pictures/Arrows2.png')}/>
                    <div>
                    <div className="whitebutton">
                        <p>WEBSITE</p>
                        <img src={require('./Pictures/whitearrow.svg')}/>
                    </div>
                    <div className="whitebutton">
                        <p>GBM SCHEDULE</p>
                        <img src={require('./Pictures/whitearrow.svg')}/>
                    </div>
                    <div className="whitebutton">
                        <p>INSTAGRAM</p>
                        <img src={require('./Pictures/whitearrow.svg')}/>
                    </div>
                    </div>
                </Row>
                </Col>

                <Col md={5}>

                    <Row className="yps_row2"><img style={{maxWidth:"60%"}} src={require('./Pictures/YPS.png')}/></Row>
                    <Row className="yps_row3">
                        <p className="yps_text">The Young Planners' Society at UC San Diego is a nationally registered pre-professional networking organization under the American Planning Association (APA) California Chapter for undergraduate students interested in the field of urban planning to come together! Young Planners' Society aims to enhance the student experience by providing social opportunities for undergraduates to get involved not only on campus, but also in the professional community by connecting undergraduates with resources such as guest speakers, panelists, competitions, and involvement opportunities with the American Planning Association.</p>
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
export default connect(null, {setTheme})(YPS);