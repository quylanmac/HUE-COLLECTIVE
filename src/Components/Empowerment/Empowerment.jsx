import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './Empowerment.css';
import Directory from '../../img/Issue2/Directory.png';
import { HashLink } from 'react-router-hash-link';
import Group from '../../img/Issue2/Group.png';
import rightDesign from '../../img/Issue2/rightDesign.png';
class Empowerment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <HashLink smooth to="/issue2#section2" >
            <img src={Group}/>
            </HashLink>
            <HashLink smooth to="/issue2#section1" >
            <img src={rightDesign}/>
            </HashLink>
            
            </>
        )
    }
}
export default connect(null, {})(Empowerment);