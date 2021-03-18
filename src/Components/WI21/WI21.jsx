import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import { HashLink } from 'react-router-hash-link';
import SimpleViewSlider from 'react-view-slider/simple';
import { Link } from 'react-router-dom';
import recordClosed from './recordClosed.png';
import './WI21.css';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
class WI21 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        // window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        const parent = { width: `100%`, height: `100%` }
        const child = { width: `1110px`, height: `100%` }
        return (
            <Container className="container-fluid">
            <div style={parent} className="row nopad">
                        <div className="viewResponsive sec1" id="section1">
                <Row className="nopad">
                    <Col md={4}>
                        <Link to={{ pathname: "/issue3" }}>
                            <Row md={2}>
                                <Col md={12} className="issue_3">
                                </Col>
                            </Row>
                        </Link>
                        <Row xs={10} md={10}>
                            <Col xs={4} md={4}>
                            <Row className="recordClosed_row">
                                    <img className="recordClosed" src={recordClosed} />
                            </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                        <div className="summary" />
                        </Row>
                    </Col>

                </Row>
                        </div>
            </div>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(WI21);