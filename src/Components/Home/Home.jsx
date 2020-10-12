import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { setTheme } from '../../redux/actions';
import './Home.css';
import { connect } from 'react-redux';
import Issue1 from '../Issues/Issues';
import Issue2 from '../Issues/Issue2';
import Marquee from 'react-double-marquee';
import NavBar from 'react-bootstrap/Navbar';
import Landing from '../Landing/Landing';
import Recruit from '../../img/Issue2/JOIN.gif';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }
    }
    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        })
    };



    handleTimeUpdate = (currentTime, progress, duration) => {
        this.setState({
            progress,
            currentTime,
            duration,
        });
    };

    handleOnMute = () => {
        this.setState({ isMuted: true });
    };

    handleOnUnmute = () => {
        this.setState({ isMuted: false });
    };

    togglePlay = () => {
        this.player.togglePlay();
    };

    toggleMute = () => {
        this.player.toggleMute();
    };
    toggleTest = () => {
        this.player.togglePlay();
        this.player.toggleMute();
        console.log("test");

        console.log(this.state.isPlaying);
    }
    handleOnPlay = () => {
        this.setState({ isPlaying: true });
    };

    handleOnPause = () => {
        this.setState({ isPlaying: false });
    };
    render() {
        return (
            <>
                <a href="https://docs.google.com/document/d/119WbGNpObYxrE8r0RxY6_ZAQRS1KrxjTXHA3HRX4QSA/edit" target="_blank">
                    <img src={Recruit} className="Recruitment" />
                </a>
                <div id="test" className="mainLand">
                    <Landing />
                </div>
                <Container>
                    <div className="postVid" id="issueHome">
                        <p className="huearewepre">issues</p>
                        <p className="huearewe">We are always looking for exciting designers to feature in our digital zines.</p>
                    </div>
                    <Issue2 />
                    <Issue1 />
                </Container>
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
            </>
        )
    }
}
export default connect(null, { setTheme })(Home);