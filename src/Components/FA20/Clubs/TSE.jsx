import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TSE.css'

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
                        <p className="tse_text">Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites and mobile applications pro-bono for social good, while giving our developers practical, real world experience.</p>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row><img src={require('./Pictures/TSE.svg')}/></Row>
                    <Row>
                    {/* <Col md={7} className="tse_col"> */}
                    <div className="tse_div">
                        <div>
                            <div className="blackbutton">
                                <p>FACEBOOK</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </div>
                            <div className="blackbutton">
                                <p>INSTAGRAM</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </div>
                            <div className="blackbutton">
                                <p>LINKEDIN</p>
                                <img src={require('./Pictures/whitearrow.svg')}/>
                            </div>
                        </div>
                            <img src={require('./Pictures/Arrows3.png')}/>
                        </div>
                    </Row>
                </Col>

                </Row>
                </Container>
        )
    }
}
export default connect(null, {setTheme})(TSE);