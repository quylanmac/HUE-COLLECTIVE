import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import ScrollText from 'react-scroll-text';
import Marquee from 'react-double-marquee';
import star from '../../img/SP20/star.png';
import fire from '../../img/SP20/fire.png';
import hue from '../../img/SP20/hue.png';
import NavBar from 'react-bootstrap/Navbar';
import { Redirect, NavLink, Link } from 'react-router-dom';
import myGif from '../../img/SP20/issue2.gif';
import { NavDropdown, Nav, Image, DropdownButton } from 'react-bootstrap';
import './SP20.css';
import { setTheme } from '../../redux/actions';

class SP20 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            controlledPosition: {
                x: -400, y: 200
            },
            showSP: true,
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
    setShowSP = () => {
        this.setState({ showSP: !this.state.showSP });
    }
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
            <>
                <div style={{ maxWidth: "100%" }}>
                    <Container>
                        <Row>
                            <Draggable handle="strong" {...dragHandlers}>
                                <div className="box no-cursor issue" style={this.state.showSP ? { visibility: 'initial' } : { visibility: 'hidden' }}>
                                    <strong className="moveCursor">
                                        <div className="issueHeader">
                                            <p className="textHeader">/Issue 1</p>

                                            <p className="closeIssue" onClick={() => this.setShowSP(false)}>X</p>
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
                            </Draggable>

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
                    <img className="gif" src={myGif} />
                    <NavBar className="myNav secondaryNav">
                        <div
                            style={{
                                width: '100%',
                                whiteSpace: 'nowrap',
                            }}
                            className="announcement"
                        >
                            <Marquee speed="0.08" direction="right">Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective | Welcome to HUE Collective |</Marquee>
                        </div>


                    </NavBar>
                </div>
            </>
        )
    }
}

export default connect(null, {setTheme})(SP20);