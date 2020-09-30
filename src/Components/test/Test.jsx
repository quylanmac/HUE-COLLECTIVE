import React, { Component, useState } from 'react';
import { setTheme } from '../../redux/actions';
import promoVid from '../../img/promo.mp4';
import TestComponent from 'react-background-video-player';
import playIcon from '../../img/thumbnail.png';
import playVid from '../../img/testplayvideo.png';
import { connect } from 'react-redux';
import './Test.css';
class Test extends Component {
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
    componentDidMount() {
        this.props.setTheme('transparent');
    }
    componentWillUnmount() {
        this.props.setTheme('black');
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
        this.props.setTheme('hidden');
    }
    handleOnPlay = () => {
        this.setState({ isPlaying: true });
    };

    handleOnPause = () => {
        this.setState({ isPlaying: false });
        this.props.setTheme('transparent');
    };
    render() {
        return (
            <>
             <div className="responseVid" style={{  width: ' 100%', height: '100%' }}>
                    <TestComponent
                        ref={p => this.player = p}
                        containerWidth={this.state.windowWidth}
                        containerHeight={this.state.windowHeight}
                        src={promoVid}
                        poster={playIcon}
                        onPlay={this.handleOnPlay}
                        onPause={this.handleOnPause}
                        onMute={this.handleOnMute}
                        onUnmute={this.handleOnUnmute}
                        onTimeUpdate={this.handleTimeUpdate}
                        startTime={0}
                        autoPlay={false}
                        volume={0.5}
                        loop={false}
                        className={this.state.isPlaying ? 'normalOpacity' : 'lightOpacity'}
                    />
                    <nav className="promoLayer">
                       <p className={"karla promo " + (!this.state.isPlaying ? 'show' : 'hidden')}>Expressing ubiquity and ambiguity through different perspectives in design.</p>
                        <button onClick={this.toggleTest} className="playButton"><img src={playVid} /></button>
                    </nav>
                </div>

            </>
        )
    }
}
export default connect(null, { setTheme })(Test);