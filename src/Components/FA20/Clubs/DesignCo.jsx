import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../FA20.css';
import { setTheme } from '../../../redux/actions';

class DesignCo extends Component{
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
                                <img className="plug_2" src={require('../Plug2.svg')} />
                            </Row>
                            <Row>
                                <img className="outlet" src={require('../Outlet.svg')} />
                            </Row>
                        </Col>

                        <Col md={8}>
                            <Row md={9}>
                                <Col className="org_directory">
                                <h1>DESIGN ORGS DIRECTORY</h1>
                                <p style={{backgroundColor:"green", color:"white"}}>Design Co</p>
                                <p>Triton Software Engineering (TSE)</p>
                                <p>Design for America (DFA)</p>
                                <p>Architecture @ UCSD</p>
                                <p>Trend Magazine</p>
                                <p>ACM Design</p>
                                <p>Design for San Diego</p>
                                <p>Triton Robosub</p>
                                <p>Young Planners Society</p>
                                </Col>
                            </Row>
                        </Col> 
                    </Row>
                </Col>

                <Col>
                    
                </Col>

                </Row>
                </Container>
        )
    }
}
export default connect(null, {setTheme})(DesignCo);