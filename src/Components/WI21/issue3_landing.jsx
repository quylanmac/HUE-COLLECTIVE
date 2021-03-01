import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './issue3_landing.css';

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
                <p>Issue 3 Title Page</p>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(issue3_landing);