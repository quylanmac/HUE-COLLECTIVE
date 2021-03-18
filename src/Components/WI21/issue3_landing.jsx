import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './WI21.css';
import recordOpen from './recordOpen.png';
import recordClosed from './recordClosed.png';
import {Link} from 'react-router-dom';




class issue3_landing extends Component {
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

    render() {
        return (
            <Container>
                <div className="row nopad">
                        <div className="viewResponsive sec1" id="section1">
                            <Row className="nopad">
                                <Col md={4}>
                                <Link to={{pathname: "/issue3"}}></Link>
                                    <Row xs={10} md={10}> 
                                        <Col xs={4} md={4}>
                                        <Row className="recordOpen_row">
                                            <Link to = {{pathname:"/issue3"}} style={{zIndex:'3'}}>
                                                <img className="recordOpen" src={recordOpen} />
                                            </Link>
                                        </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                </div>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(issue3_landing);