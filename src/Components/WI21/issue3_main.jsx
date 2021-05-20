import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './issue3_landing.css';
import record_player from '../../../src/img/Issue3/record_player.png';
import smallArticle1 from '../../../src/img/Issue3/equitabledesigndisc2.png';
import smallArticle2 from '../../../src/img/Issue3/smallArticle2.png';
import smallArticle3 from '../../../src/img/Issue3/smallArticle3.png';
import smallArticle4 from '../../../src/img/Issue3/smallArticle4.png';

class issue3_main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        console.log('HEELLEELL');
        console.log('Version: ' + process.version);
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
            <Container fluid className="art3Landing">
            <div className="issue3_background"/>
                <Row>
                    <Col md={4} xs={12}>
                        <div className="issue3_landing">
                            <h7>ISSUE 3</h7>
                            <h1> WITHOUT EXCEPTION </h1>
                            <p>How can we design for those who are all too often left behind? As designers, we all want to do good in the world, but in order to do so, we must look far beyond our own lives. Join HUE in our third issue as we dive into ethical design, exploring the amazing things that can happen through advocacy and community engagement.</p>
                        </div>
                        <img src={record_player} className="record_player"/>
                    </Col>
                        
                    <Col md={4} xs={12}>
                    <Link to={{pathname: "/EquitableDesign"}}><img src={smallArticle1} className="issue3_landing1"/></Link>
                    <Link to={{pathname: "/CommunityDesign"}}><img src={smallArticle2} className="issue3_landing2"/></Link>
                    </Col>

                    <Col md={4} xs={12}>
                    <Link to={{pathname: "/EthicalDesign"}}><img src={smallArticle3} className="issue3_landing3"/></Link>
                    <Link to={{pathname: "/interview-with-amanda"}}><img src={smallArticle4} className="issue3_landing4"/></Link>
                    </Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(issue3_main);