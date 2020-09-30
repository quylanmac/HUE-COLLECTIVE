import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { setTheme } from '../../redux/actions';
import './Home.css';
import { connect } from 'react-redux';
import Test from '../test/Test';
import Test2 from '../Issues/Issues';
import Marquee from 'react-double-marquee';
import NavBar from 'react-bootstrap/Navbar';
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
               <div style={{height:'80vh'}}>
                   <Test/>
               </div>
               <Container>
               <div className="postVid">
               <p className="huearewepre">issues</p>
               <p className="huearewe">We are always looking for exciting designers to feature in our digital zines.</p>
               </div>
               <div>
               <Test2/>
               <Test2/>
               </div>
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