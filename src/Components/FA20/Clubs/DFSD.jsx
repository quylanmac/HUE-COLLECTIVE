import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './DFSD.css';

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
                            <Row md={3}>
                                <img className="dfsd_img" src={require('./Pictures/DFSD.png')}/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

                <Col md={3}>
                    <Row className="dfsd_row">
                    
                        <img style={{maxWidth:'100%'}} src={require('./Pictures/Arrows2.png')}/>
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
                    </Row>
                </Col>

                <Col md={5}>
                    <Row className="dfsd_row2">
                        <p className="dfsd_text">Design for San Diego (D4SD) is a civic design challenge focused on bringing together our community and leveraging collective intelligence to address complex issues in the San Diego region. D4SD 2020 focused on how to improve the safety, emotional health, and economic prosperity of all San Diegans during the COVID pandemic. We support inclusion by all ages, skill-levels, and cultural backgrounds by motivating hundreds of diverse citizens to take part in facilitated activities, stakeholder research, and brainstorming to create design proposals for how to enact positive change in our region. D4SD has provided a unique position to make direct social impacts, while also advancing research on "collective innovation", where we explore how we can organize collective action through design thinking tools & strategies.</p>
                    </Row>
                </Col>

                </Row>
                </Container>
        )
    }
}
export default connect(null, {setTheme})(DFSD);