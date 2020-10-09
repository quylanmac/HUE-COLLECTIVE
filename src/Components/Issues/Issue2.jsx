import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../SP20/SP20.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../redux/actions';
import Cover from '../../img/Issue2/Cover.png';
import './Issue2.css';
class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            }
        }
    }
    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

        return (
            <Container>
                <Row>
                        <div>
                            <Link to={{
                                pathname: "/issue2_landing",

                            }}>
                                <img src={Cover} className="issue2cover" />
                            </Link>
                        </div>

                </Row>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(Issues);