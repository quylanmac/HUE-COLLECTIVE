import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../SP20/SP20.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import Cover from '../../../img/Issue3/Cover.png';
import './Issue3.css';
class Issue3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <Container>
                <Row>
                    <div>
                        <Link to={{
                            pathname: "/issue3_landing",

                        }}>
                            <img src={Cover} className="issue3cover" />
                        </Link>
                    </div>

                </Row>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(Issue3);