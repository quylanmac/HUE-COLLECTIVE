import React, {useState, Component} from 'react';
import { connect } from 'react-redux';
import '../SP20/SP20.css';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap';

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
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

        return (
            <Container>
            <Row>
                <Draggable handle="strong" {...dragHandlers}>
                    <div className="box no-cursor issue">
                        <strong className="moveCursor">
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
                            <button className="showMore">
                                <p className="buttonText">
                                    SHOW ME MORE
                                </p>
                            </button>
                        </div>
                    </div>
                </Draggable>
                </Row>
</Container>
        )
    }
}
export default connect()(Issues);