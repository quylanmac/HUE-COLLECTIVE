import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './GroupInterview.css';
import Directory from '../../img/Issue2/Directory.png';
import { HashLink } from 'react-router-hash-link';
import EmpowerButton from '../../img/Issue2/Empowerment.png';
import TranscriptButton from '../../img/Issue2/Transcript.png';
import VideoPlayer from 'react-background-video-player';
import playInterview from '../../img/Issue2/playInterview.png';
import pauseInterview from '../../img/Issue2/pauseInterview.png';
import InterviewCover from '../../img/Issue2/interviewCover.png';
import { Scrollbars } from 'react-custom-scrollbars';
import playVideo from '../../img/Issue2/playVideo.png';
import playVideoHover from '../../img/Issue2/playVideoHover.png';
import pauseVideo from '../../img/Issue2/pauseVideo.png';
import pauseVideoHover from '../../img/Issue2/pauseVideoHover.png';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import ReactPlayer from 'react-player';
import SimpleViewSlider from 'react-view-slider/simple'

class GroupInterview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            progress: 0,
            currentTime: 0,
            duration: 0,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            displayTranscript: false,
            showControls: false,
            hover: false,
        }
    }
    handleHover = () => {
        this.setState({ hover: !this.state.hover });
    }
    handleControlsOpen = () => {
        this.setState({ showControls: true });
    }
    handleControlsClose = () => {
        this.setState({ showControls: false });
    }
    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        })
    };
    handleTranscript = () => {
        this.setState({ displayTranscript: !this.state.displayTranscript })
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
                <Container className="container-fluid">
                    <div className="groupInterview">
                        <HashLink smooth to="/issue2" className="" >
                            <img src={Directory} className="beginButton responseImg2" />
                        </HashLink>
                        <div className="topHeader">
                            <p className="groupHeader">HUE MEMBERS GROUP INTERVIEW</p>
                            <div className="interviewBox">
                                <p className="groupsubHeader">At HUE, our mission is to showcase different perspectives in design. So, we got together and talked about what design meant to each of us. We covered everything from our design inspirations to our most important learning experiences. In doing so, we were able to learn more about each other and our unique experiences with design. We hope you enjoy this interview! Thank you to Mylinh Lac, Braeanne Oribello, Lisa Zhou, Lwin DuMont, Adam Syed, Samantha Cheung, Justin Hwang, Amy An, Quylan Mac, and Alex Padayao for sharing. </p>
                                <div className="responseVid interviewVid" >
                                     <ReactPlayer className="" width={'100%'} maxHeight={'auto'} url={"https://www.youtube.com/embed/vr8cFwWLh90"}
                                    playIcon={<img src={require(`../../img/Issue2/playVideo.png`)} className="playResponse"></img>}
                                    controls={true} playing light={InterviewCover} ></ReactPlayer> 
                                    {/* <VideoPlayer
                                        ref={p => this.player = p}
                                        containerWidth={this.state.windowWidth}
                                        containerHeight={this.state.windowHeight}
                                        src={"https://media.githubusercontent.com/media/quylanmac/HUE-COLLECTIVE/progress/src/img/promo.mp4"}
                                        poster={InterviewCover}
                                        onPlay={this.handleOnPlay}
                                        onPause={this.handleOnPause}
                                        onMute={this.handleOnMute}
                                        onUnmute={this.handleOnUnmute}
                                        onTimeUpdate={this.handleTimeUpdate}
                                        startTime={0}
                                        autoPlay={false}
                                        volume={0.5}
                                        loop={false}
                                        onEnd={this.toggleMute}
                                        className={this.state.isPlaying ? (this.state.showControls ? 'lightOpacity interview' : 'normalOpacity interview') : 'lightOpacity interview'}
                                    />

                                    <nav onMouseEnter={this.handleControlsOpen} onMouseLeave={this.handleControlsClose} className="interviewLayer">
                                        <TransitionGroup component={null}>
                                            <CSSTransition key={this.state.hover} timeout={5000} classNames="tester">
                                                <button onClick={this.toggleTest} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className="playInterviewButton">
                                                    <img src={(!this.state.isPlaying ? (this.state.hover ? playVideoHover : playVideo) :
                                                        (!this.state.controls ? (this.state.hover ? pauseVideoHover : pauseVideo) : null))}
                                                        className={this.state.isPlaying ? (this.state.showControls ? 'visibleButton' : 'invisibleButton') : 'visibleButton'} />
                                                </button>
                                            </CSSTransition>
                                        </TransitionGroup>
                                    </nav> */}
                                </div>
                                <img className="transcriptButton" src={TranscriptButton} onClick={() => this.handleTranscript()} />
                                {
                                    this.state.displayTranscript &&
                                    <Scrollbars className="transcript" renderThumbVertical={({ style, ...props }) =>
                                        <div {...props} style={{
                                            ...style, backgroundColor: '#D35135', width: '16px'
                                        }} />
                                    }>
                                        <p>
                                            Mylinh: Ok, we’re recording
<br /><br />
Amy: Great
<br /><br />
Alex: Hello Internet
<br /><br />
Mylinh: Take it away, Amy and Alex
<br /><br />
Alex: First things first. Hello, my name is Alex and I think to my bottom right thats Amy
<br /><br />
Amy: Hello, I am Amy and we’re writers for HUE Collective and today we will be interviewing HUE members on their inspiration
<br /><br />
Alex: So everyone, our wonderful HUE staff please introduce yourself one by one starting from the top left and we’ll work our way like in a little snake pattern
<br /><br />
Amy: My top left is Mylinh Lac
<br /><br />
Alex: Mine’s as well. Let’s start with Mylinh
<br /><br />
Mylinh: I’m Mylinh. I’m one of the co-creative directors here at HUE. I’m a rising junior majoring in Cognitive Science for design and minoring in urban studies and planning
<br /><br />
Bri: I’m Bri. Also the other co-creative director for HUE. I’m an incoming junior majoring in cognitive science - design and interaction and minoring in ethnic studies
<br /><br />
Lisa: I’m Lisa. I’m a rising sophomore. I'm the marketing “coordinator” but I can take on any title related to marketing. I’m a cognitive science major, sorry I just blanked out completely, and possibly doing a minor in ICAM but currently rethinking that decision
<br /><br />
Lwin: Hi, Im Lwin i'm a rising junior and I’m an editor and sometimes writer here at HUE and I am  a chemical engineering major
<br /><br />
Adam: Hello, I’m Adam. I’m a User Experience designer at HUE and I am a rising Junior studying Cognitive Science with a specialization in design. And I don't have any minors
<br /><br />
Samantha: Hello, I’m Samantha. I’m basically the same as Adam. Same credentials, same major. The same as Adam, UX designer
<br /><br />
Alex: Phenomenal, next we have Quylan Mac
<br /><br />
Quylan: Hi, I’m Quylan Mac. Incoming Third Year. I am a developer at HUE and my major is Computer Science
<br /><br />
Amy: Ok Great. Can everyone tell me what inspired you to pursue design or join HUE
<br /><br />
Quylan: Wait, can someone else go first?
<br /><br />
Alex: I got this, I came ready
<br /><br />
Alex:“For me the main reason I joined was because of fashion. At the time, I was doing intramural basketball and I was following the NBA more so a lot of what I thought design was through fashion. Like if you look at NBA guys like Russell Westbrook, PJ Tucker, guys like that, they have such let's say different, like really out there outfits. So for me I think that’s something that really drew me into HUE. LIke maybe exploring stuff like that. And then after a while I think I realized that doing interviews and interviewing other people. Some people we interviewed were healthcare people or even in music. So I think that wide variety of design is really what not only made me want to join HUE but also want to stay on more and bring more awareness to what design is”
<br /><br />
Amy: “Thank you for that, now who would like to go next?”
<br /><br />
Quylan: Ok I’ll go, I just thought it was the perfect opportunity for me  to expand upon my skills and also create something with all my friends. Because I didn’t even know in the beginning about design then I realized that there are a bunch of different fields like UI/UX, architecture, sound and I thought that was really cool and a lot of people like me wouldn’t know what those fields are if it weren’t for HUE to showcase those aspects. So yea, that's why I joined HUE
<br /><br />
Amy: That is so touching, that really brings tears to my eyes. Thank you so much for that  wonderful insight Quylan. Would anyone like to build off of that. Thank you Adam for volunteering yourself.
<br /><br />
Adam: I dont think anyone can beat that statement, its really touching. I kind of got into design when the first iPhone was released. So it was when no, I didnt get into UX design and all of that
<br /><br />
Amy: When you were seven? Oh my gosh, wow!
<br /><br />
Adam: No, I was interested. I was always thinking about how these apps are going on the phone and how these apps appear on the app store. So that's when I started learning about programming. And then when I started learning about programming, I wanted to make apps and when I was making apps I was just so frustrated because those apps that I built were just so badly designed. There was no foundation behind the apps in terms of design and that's how I learned about design on my own through online courses. Only when I got to UCSD, I kind of got immersed with other different fields in design.  Yeah, thats kind of how I got involved
<br /><br />
Amy: That was so beautiful. I loved how you got started at such a young age. Would anyone else like to talk about how they got started in design.
<br /><br />
Bri: I can talk I guess
<br /><br />
Amy: Thank you Bri
<br /><br />
Bri: “Pretty much, I’ll just talk about what HUE came from and why I decided to start it. But really emphasizing storytelling and community building and trying to bring people together to sort of hear each other’s stories and bring that human aspect to the university because I feel like UCSD is super tech-based and sometimes your creativity is pressured to make something out of it or profit off of it somehow but in reality that not always the case about creativity.  You can just express yourself or like meet other people through it. So, yea
<br /><br />
Amy: Beautiful, Beautiful. Well spoken Bri. Would the other co-creative director like to add on to that
<br /><br />
Mylinh: “Sure yeah. I guess in terms of design, I think it was the end of HS when I was figuring out what I wanted to apply to college as. So I thought about careers that included creativity and came across product design and that’s kind of what I was applying to at that point., so that was like cognitive science. I came into UCSD in Speculative Design because I thought that's what led into product design, but it was not so I changed majors freshman year into cognitive science..I think at that point I was doing projects for other clubs and it felt kinda more structured where it was just  a design process that we know of and I think even with classes and things, I wanted more of an outlet where I can explore other initiatives in the creative realm. So yea, that’s why I decided to join HUE, it's really exciting. A lot of our team is not in the conventional design area to so it's really fun to work with everyone”
<br /><br />
Amy: Wonderful insight. Who would like to go next?
<br /><br />
Bri: I think Lwin raised his hand. Or Lisa. Go
<br /><br />
Lisa Zhou: This year I also took a VIS class where I got into using the Adobe Creative Suite and like poster making and really thinking about graphic design and another subset of design more art and creative based. And so when Bri was like “Oh we have a HUE one, we have some positions that are open”, I was like, “I have no idea what this is but this sounds really creative and cool” and so I can like use my big brain thinking about the fundamentals of design and  how do we reshape systems but then at the same time I can also be like I wanna make some really cool and really cute little graphics, help promote this really cool zine and I feel like I've been able to find outlets in both like a big brain thinky perspective as well as a more fun, more creative little group of people. Yeah”
<br /><br />
Amy: That was so good, that was really cute actually.  Thank you for that Lisa. Alright, who wants to go next?
<br /><br />
Lwin: I don’t know who you’re pointing to, but I don’t think I’ve gone yet so I can go. I joined to gain a different perspective on how to solve a problem because engineering has so many different disciplines but like the way they teach you to go through things can be very rigid sometimes. So I’ve just really appreciated learning different ways of thinking  and showing how important it is to consider different communities' opinions and experiences when trying to solve a problem. I hope to bring that in my own career and I like helping out others and I also like to write and edit a lot so it's in my rule.
<br /><br />
Amy: Alright, and now would Sam like to wrap it up
<br /><br />
Samantha: Yes. Sorry, I’m currently crocheting
<br /><br />
Samantha: I came into college, well actually I came in as a Cog Sci Design and Interaction major because I kinda knew that's what I wanted to do when I was applying to colleges so I was excited to come in here. Didn’t really know that I would be doing UI or UX design but that's kinda what I found that I liked most so I kept sticking  with that and I’m very glad to be part of this organization, this group of friends, this creative team. I met Mylinh because of Design for America (she was on my team) and then she introduced me to Bri when we did the designathon and then they asked me if I wanted to help do this and I was like, “Yes Please”, because I loved working with you guys for Designathon I wanted to keep designing with you guys.
<br /><br />
Lisa: I would also like to add that Design Frontiers, forgot to mention, is where I met Bri, Mylinh, and Amy. and Adam we all worked on a team. So shout out hackathons for bringing us together as well as design co.
<br /><br />
Amy: Thank you everyone for this round of questions. Really great information.
<br /><br />
Alex: I think, just to sum everything up, I think all of us kind of took a big step forward. If I can sum up what everyone was talking about I think for a lot of us we found something new through HUE and that's the most important part. Plant the seeds now we water them everyday
<br /><br />
Bri: Ok, I think this meeting is adjourned
<br /><br />
                                        </p>
                                    </Scrollbars>
                                }
                            </div>

                        </div>
                        <HashLink smooth to="/empowerment" className="" >
                            <img src={EmpowerButton} className="end3Button responseImg2" />
                        </HashLink>
                    </div>
                </Container>
            </>
        )
    }
}
export default connect(null, {})(GroupInterview);