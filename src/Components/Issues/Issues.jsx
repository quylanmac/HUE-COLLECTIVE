import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../SP20/SP20.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../redux/actions';
import star from '../../img/SP20/star.png';
import fire from '../../img/SP20/fire.png';
import hue from '../../img/SP20/hue.png';
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

                    <div className="box no-cursor issue">
                        <strong className="">
                            <div className="issueHeader">
                                <p className="textHeader">/Issue 1</p>
                                {/*  <p className="closeIssue">X</p> */}
                            </div>
                        </strong>
                        <div className="issueBody">
                            <p className="issueTarget">POINT OF VIEW</p>
                            <div className="d-flex justify-content-center">
                                <p className="issueText">For HUE’s first issue, we decided to highlight a few of the many disciplines
                                across design by interviewing our incredible friends and fellow students. Each article follows our
                                designers on their journey to finding a passion, incorporating their projects, key insights, and most
                                valuable tools. With HUE, we hope you can start your own journey, and answer for yourself, “what is design?”
                              </p>
                            </div>
                            <Link to={{
                                pathname: "/article1",

                            }}>
                                <button className="showMore" onClick={() => this.handleTheme("white")}>
                                    <p className="buttonText">
                                        SHOW ME MORE
                                        </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Draggable {...dragHandlers}>
                        <div className="moveCursor stickerBox">
                            <img draggable="false" src={fire} />
                        </div>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <div className="moveCursor stickerBox2">
                            <img draggable="false" src={hue} />
                        </div>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <div className="moveCursor stickerBox3">
                            <img draggable="false" src={star} />
                        </div>
                    </Draggable>
                </Row>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(Issues);