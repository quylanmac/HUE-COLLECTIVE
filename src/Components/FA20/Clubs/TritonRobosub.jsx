import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TritonRobosub.css'
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
class TritonRobosub extends Component{
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
                    <Row style={{backgroundColor:'#257a66'}}>
                        <p className="tr_text">We’re Triton Robosub, a multi-disciplinary organization focused on designing, building and testing autonomous underwater vehicles! We compete in an international competition hosted in San Diego every summer, pursue research topics relating to oceanography, machine learning, and robotics, and host outreach activities for the engineering community around us. We’re looking for talented designers to build out our social media and brand, create exciting outreach workshops and events, and design a host of crucial submissions for the competition. You would be in charge of creating a new tech research group’s entire online presence, and help better the engineering community here in San Diego.</p>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row>
                    <div className="ts_div">
                        <img src={require('./Pictures/Arrows5.png')}/>
                        
                            <div className="ts_div_div">
                                <div className="blackbutton" style={{marginTop:"1rem"}}>
                                    <p>WEBSITE</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="blackbutton">
                                    <p>FACEBOOK</p>
                                    <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                                <div className="blackbutton">
                                    <p>APPLICATIONS</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <img className="ts_img" src={require('./Pictures/Robosub.png')}/>
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
export default connect(null, {setTheme})(TritonRobosub);