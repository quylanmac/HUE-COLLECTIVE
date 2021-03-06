import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './ArticleLayout.css';
class ArticleLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
        this.props.setTheme('white');
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
                <p>Branch Check</p>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(ArticleLayout);