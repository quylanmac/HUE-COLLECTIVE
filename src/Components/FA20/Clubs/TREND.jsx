import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';
import Directory from '../Directory.jsx';
import './TREND.css';
import { HashLink } from 'react-router-hash-link';
import groupButton from '../../../img/Issue2/button.png';
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
                                <img className="trend_img" src={require('./Pictures/TREND.png')}/>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

                <Col md={3}>
                    <Row style={{backgroundColor:'#257a66'}}>
                        <p className="trend_text">TREND is a student-run fashion and lifestyle magazine at UCSD. We release two issues in an academic year - Fall/Winter and Spring/Summer - both print and online versions. We are a team of student artists, designers, writers, photographers, stylists and marketing managers. This student organization is the perfect place to be in for anyone with a creative mind and a love for art and fashion.</p>
                    </Row>
                </Col>

                <Col md={5}>

                    <Row>
                    <div className="trend_div">
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
                            </div>
                        </div>
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
export default connect(null, {setTheme})(TREND);