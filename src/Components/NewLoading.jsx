import React, { useState, useEffect, Component } from 'react';
import { Col, Container } from 'react-bootstrap';
import { Loader } from './Loader';
import { ColourWheel } from './ColourWheel';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { rootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { setColor } from '../redux/actions';
class NewLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderVis: false,
            redirect: false,
            background: "white",
        }
        this.setloaderVis = this.setloaderVis.bind(this);
    }
    setloaderVis() {
        const newVis = this.state.loaderVis == true ? false : true;
        this.setState({ loaderVis: newVis });
    }
    componentDidMount() {
        this.interval = setTimeout(() => this.setState({ loaderVis: true }), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    handleUpdate(color) {
        const test = "rgb(0, 0, 0)";
        if (test==color) {
            console.log('please');
            this.props.setColor("white");
        }
        else {
        this.props.setColor(color);
        }
    }

    render() {
        return (
            <>
                <div style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
                    <Container className="d-flex flex-column justify-content-center align-self-center container-fluid my-auto">

                        <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center">

                            <div className="d-flex justify-content-center">
                                <div className="overlay">

                                    <div className="overlay-1 justify-content-center align-self-center" style={{ display: "grid" }}>
                                        <Col className="my-auto">
                                            <Loader></Loader>
                                        </Col>
                                    </div>

                                    {/*This checks for the vis bool to display the colour wheel component which is set after a timed delay*/}
                                    {this.state.loaderVis ?
                                        <div className="overlay-2 animated fadeIn delay2 justify-content-center align-self-center" style={{ display: "grid" }}>
                                            <Col className="my-auto">
                                                <Link to={{
                                                    pathname: "/index",
                                                    state: {
                                                        test: 'hello',
                                                        background: this.state.background,
                                                    }
                                                }}>
                                                    <ColourWheel callback={color => this.handleUpdate(color)} />
                                                </Link>
                                            </Col>
                                        </div> : null}

                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

            </>
        )
    };
}
export default connect(null, { setColor })(NewLoading);