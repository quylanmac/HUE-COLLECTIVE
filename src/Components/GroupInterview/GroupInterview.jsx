import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './GroupInterview.css';
import Directory from '../../img/Issue2/Directory.png';
import { HashLink } from 'react-router-hash-link';
import EmpowerButton from '../../img/Issue2/Empowerment.png';
class GroupInterview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <HashLink smooth to="/issue2#section1" >
            <img src={Directory}/>
            </HashLink>
            <HashLink smooth to="/issue2#section3" >
            <img src={EmpowerButton}/>
            </HashLink>
            </>
        )
    }
}
export default connect(null, {})(GroupInterview);