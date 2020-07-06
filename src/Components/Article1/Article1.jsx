import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Contact/Contact.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import pageBreak from '../../img/pagebreak.png';
import { setTheme } from '../../redux/actions';
import { useEffect } from 'react';

class Article1 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    render() {
        return (
            <Container>

            </Container>
        )
    }
}
export default connect(null, {setTheme})(Article1);