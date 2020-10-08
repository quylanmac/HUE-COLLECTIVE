import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './FA20.css';
import { setTheme } from '../../redux/actions';
import {Link} from 'react-router-dom';
import Directory from './Directory';
import plug_2 from './plug2.png';
import outlet_2 from './outlet.png';

class issue2_landing extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }

    render(){
        return(
            <Container>
                            <Row className="nopad">
                                <Col md={4}>
                                <Link to={{pathname: "/issue2"}}>
                                    <Row md={2}>
                                        <Col md={12} className="issue_2">
                                            <p>ISSUE 2</p>
                                            <p>PLUGGED IN</p>
                                        </Col>
                                    </Row>
                                    </Link>
                                    <Row xs={10} md={10}>
                                        <Col xs={4} md={4}>
                                            <Row>
                                            <Link to = {{pathname:"/issue2"}} style={{zIndex:'3'}}>
                                                <img className="plug_2" src={plug_2} />
                                                </Link>
                                            </Row>
                                            <Row>
                                                <img className="outlet_2" src={require('./Outlet.svg')} />
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                </Row>
                            </Container>
        )

    }
}
export default connect(null, { setTheme })(issue2_landing);