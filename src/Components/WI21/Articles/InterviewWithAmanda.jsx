import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../../redux/actions';
import './InterviewWithAmanda.css';
import header from '../../../img/Issue3/Interview_Banner.png';
import disc from '../../../img/Issue3/equitabledesigndisc.jpg';
import moralValue from '../../../img/Issue3/moralValue.png';
import glove from '../../../img/Issue3/glove.png';
import flowerpot from '../../../img/Issue3/flowerpot.png';
import cellphone from '../../../img/Issue3/cellphone.png';
import sparkle from '../../../img/Issue3/sparkle.png';
import heart from '../../../img/Issue3/heart.png';
import disc1 from '../../../img/Issue3/disc1.png';
import disc2 from '../../../img/Issue3/disc2.png';
import disc3 from '../../../img/Issue3/disc3.png';
import disc4 from '../../../img/Issue3/disc4.png';
import accent_heart from '../../../img/Issue3/accent_heart.png';
import star2 from '../../../img/Issue3/star2.png';
import star_frame from '../../../img/Issue3/star_frame.png';
import rectangle_frame from '../../../img/Issue3/rectangle_frame.png';
import polygon_frame from '../../../img/Issue3/polygon_frame.png';
import circle_frame from '../../../img/Issue3/circle_frame.png';
import smallArticle1 from '../../../img/Issue3/equitableCover.png';
import smallArticle2 from '../../../img/Issue3/designingCover.png';
import smallArticle3 from '../../../img/Issue3/ethicalCover.png';
import smallArticle4 from '../../../img/Issue3/interviewCover.png';
import backToTop from '../../../img/Issue3/backToTop.png';
class InterviewWithAmanda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDisc2: false,
            showDisc3: false,
            showDisc4: false,
        }
        this.setDisc2 = this.setDisc2.bind(this);
        this.setDisc3 = this.setDisc3.bind(this);
        this.setDisc4 = this.setDisc4.bind(this);
    }
    setDisc2() {
        this.setState({
            showDisc2: !this.state.showDisc2
        })
    }
    setDisc3() {
        this.setState({
            showDisc3: !this.state.showDisc3
        })
    }
    setDisc4() {
        this.setState({
            showDisc4: !this.state.showDisc4
        })
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.listenToScroll);
        this.setupLoadingCircle();

    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('white');
        window.removeEventListener('scroll', this.listenToScroll)
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    setupLoadingCircle() {
        var circle = document.querySelector('circle');

        const ZERO_PROGRESS_VAL = 800;
        circle.style.strokeDasharray = `${ZERO_PROGRESS_VAL} ${ZERO_PROGRESS_VAL}`;
        circle.style.strokeDashoffset = `${ZERO_PROGRESS_VAL}`;
    }
    listenToScroll = () => {
        // Calculate Scroll Progress
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const scrolled = winScroll / height
        this.setState({
            theposition: scrolled,
        })

        // Find and update loading circle.
        var circle = document.querySelector('circle');
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
        const offset = circumference - scrolled * circumference;
        circle.style.strokeDashoffset = offset;
        // Circular progress code above is super weird but at least it's pretty lightweight
        // Source : https://css-tricks.com/building-progress-ring-quickly/
        // Useful for other animated line drawings: https://jakearchibald.com/2013/animated-line-drawing-svg/
    }

    render() {
        return (

            <Container fluid className="articleFont">
                <a href="#top" className="backToTopWrapper">
                <img src={backToTop} className="imageBox backToTop"/>
                </a>
                {/* Loading Circle Zone  */}
                <div className="stickyZone">
                    <div className="loadingArea">
                        <svg
                            className="progress-ring"
                            width="100%"
                            height="100%">
                            <circle
                                className="progress-ring__circle"
                                stroke="#000000"
                                strokeWidth="4"
                                fill="#F3F3F3"
                                r="48%"
                                cx="50%"
                                cy="50%" />
                        </svg>
                    </div>
                </div>
                <Row id="top">
                    <img className="imageBox" src={header}/>
                </Row>
                <Row className="introduction_1 mobilePadding">
                    <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="article_question1">To start off - can you elaborate more on your role as Managing Director of UX/UI at Develop for Good and how you came to join the organization? </p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft mobileHidden" xs={0} md={2}>
                        <Row>
                            <div className="diskArea">
                                <div className="linkDiskBase"><img className="imageBox" src={smallArticle4}/></div>
                                {/* Links to articles in these disks. */}
                                <div className="linkDisk">
                                </div>
                                <div className="linkDiskSecondary" 
                                    onMouseEnter={() => this.setDisc2(true)}
                                   >
                                    <img src={disc2} className="disc1" 
                                    />
                                    {this.state.showDisc2 && <Link to={{pathname: "/CommunityDesign"}}><img src={smallArticle2} className="testerDisc"/></Link>}
                                </div>
                                <div className="linkDiskSecondary"
                                    onMouseEnter={() => this.setDisc3(true)}
                                    onMouseLeave={() => this.setDisc3(false)}>
                                    <img src={disc1} className="disc1" 
                                    />
                                    {this.state.showDisc3 && <Link to={{pathname: "/EquitableDesign"}}><img src={smallArticle1} className="testerDisc"/></Link>}
                                </div>
                                <div className="linkDiskSecondary"
                                    onMouseEnter={() => this.setDisc4(true)}
                                    onMouseLeave={() => this.setDisc4(false)}>
                                    <img src={disc3} className="disc1" 
                                    />
                                    {this.state.showDisc4 && <Link to={{pathname: "/EthicalDesign"}}><img src={smallArticle3} className="testerDisc"/></Link>}
                                </div>
                            </div>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    <Col className="columnRight" xs={12} md={7}>
                        <Row className="articleText">
                            <p>I actually graduated from UCSD as a double major in biochemistry and psychology, or the pre-med/pre-health track. During the pandemic, I looked back into my roots and what I wanted to do and  realized I didn’t really want to be on that track anymore.</p>
                        </Row>

                        <Row className="articleText">
                            <p>I scoured online for any opportunity to learn UX/UI design and came across Develop for Good on Linkedin. I applied for both UX/UI and product manager positions and was placed as a product manager. It was a really cool learning experience for me to do something within the world of design, since I knew product managers are a very crucial aspect of design teams.  </p>
                        </Row>

                        <Row className="articleText">
                            <p>In terms of how I got to Managing Director of UI/UX, I just applied for it. I got the position because I had a lot of experience from being a product manager, and I think the experience of leading the team really helped me. So now, in addition to still being a product manager for Care Myanmar, as a Managing Director of UI/UX, I do a lot of back end stuff. </p>
                        </Row>

                        <Row className="articleText">
                            <p>I help a lot with the process of matching applicants to their projects for this Winter 2021 cycle. I was sending out a lot of emails, introducing the teams to their matched clients, and helping with developing the web, the workshops and training, and things like that. At Develop for Good, we are trying to create a system where we’re not just matching applicants to projects blindly. We also want to provide training workshops and mentorship. So it's a lot of behind the scenes work that we're doing right now, trying to bolster the program and make it a lot more well-rounded. That way, both clients and our student participants can be really happy overall. </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="second_section mobilePadding">
                <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={5}>
                        <p className="article_question2">What does ethics and design mean to you? </p>
                        </Col>
                        <Col md={6}/>
                    </Row>
                    <div className="flower_background"/>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <div>
                            {/* <div className="flower_background"/> */}
                        <Row className="articleText">
                            <p>Going into the world of design just in the past year, I feel very fortunate. Since starting, I’ve been involved in many organizations that revolve around ethics and emphasize creating products and designs for accessibility, inclusivity, diversity, and similar values.</p>
                        </Row>
                        </div>
                        <Row className="articleText">
                            <p>That to me I think is everything, because when you create and design products for good, you need to be able to make sure that you're designing for everyone, not just a certain group of people. You want to make sure that everything works well for a diverse variety of users. </p>
                        </Row>
                        <Row className="articleText">
                            <p>And so, from my experience with working for Develop for Good and also the nonprofit Students of UXD, that’s really been the main mission. Students of UXD is an online community where we host events almost every weekend about topics relating to ethics and inclusion, such as creating a more inclusive design for the LGBTQ+ community. There are a bunch more that you can see on the website, </p>
                        </Row>
                        <Row className="articleText">
                            <p>For me especially, I feel very fortunate because these are things that you don't normally learn in class. Even though I wasn't a Cognitive Science major, I know from hearing other students from that major that these are topics you don’t learn in class. Ethics is something very important to learn, and I think I’ve been very fortunate to be surrounded by these organizations that push these ideas forward. </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
{/* ------------------------------------------ */}
                <Row className="third_section mobilePadding">

                <Col md={1}/>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <div> 
                        <Row className="articleText">
                        <img src={star2} className="star_background4"/>
                        <img src={star2} className="star_background5"/>
                        <img src={star2} className="star_background6"/>
                            <p>I don't know if there was any specific moment, since I kind of fell into the whole realm of it. That's why I feel very lucky to have been involved in these projects or these organizations that really drive those values of ethics, and because I feel like if I hadn't been involved in these organizations, I wouldn’t have known anything about designing for ethics, diversity or inclusion. I just feel very fortunate because I know that a lot of students don't get exposure to this, but it’s so important. Regarding ethics in my work,  I can draw upon Care Myanmar, the project that I am a PM for. </p>
                        </Row>
                        </div>
                        <Row className="articleText">
                        <img src={star2} className="star_background7"/>
                     
                            <p>Care Myanmar is an organization in Myanmar located in Southeast Asia, so it's a whole different country, literally another side of the world. Coming in as a PM, I really had to put into consideration the people that I am talking to. They’re Burmese, a whole different culture, a whole different country, and you really have to respect that. I had to make sure that  everyone is on the same page when I'm speaking to them, so when I do joint meetings with my team and the client, we can discuss progress and updates as respectfully  as possible, that we can understand each other on a professional level. Also, establishing ways where we're able to communicate with each other as effectively as possible and understand each other has also been very important for me on that project. </p>
                        </Row>
                        
                    </Col>
                    <Col xs={12} md={4}>
                    <img src={star2} className="star_background1"/>
                    <img src={star2} className="star_background2"/>
                    <img src={star2} className="star_background3"/>
                    </Col>
                </Row>

                {/* ------------------------------------------------------------ */}

                <Row className="fourth_section mobilePadding">
                <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={6}/>
                        <Col xs={12} md={5}>
                        <p className="article_question3">From your experience working with Develop of Good, how have they incorporated ethics into their work? </p>
                        </Col>
                        <Col md={1}/>
                    </Row>
                    </Col>

                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <div>
                        <Row className="articleText">
                            <p>Well, I think in Develop for Good, we do try to make sure that we're very transparent with each other; we're very honest, open, and welcoming to every person that participates on our team or  applies. We have guidelines for all of our students and our clients as well, because we want to make sure that our clients are willing and open to work with students no matter who they are, and vice versa. Our goal is to match applicants and clients who are passionate about each other and actually want to make a difference and do good for the world. I do try to keep that in mind, in everything that I do, but obviously it depends on the project. You know, some projects do have a much bigger impact on ethics, and ethics have a bigger role in them. Then for others, you know you don't really think or see that as much, but overall I do try to make sure that I'm creating a product ethically, that I do consider all facets of it, in the whole design process and journey too. </p>
                        </Row>
                        </div>
                        <Row className="articleText">
                            <p>And again,  I think my most concrete example of that would be my project for Care Myanmar, because we're working with a totally different group of people in a whole different country. There's a language barrier, differences in customs and how we speak to each other, even through email. The way that I speak to them is a lot different than how I speak normally or how I write emails normally, because I want to make sure that I'm very respectful of them and their time. </p>
                        </Row>
                        <Row>
                            <Col>
                                <img src = {accent_heart} className="heart1"/>
                            </Col>
                            <Col>
                                <img src = {accent_heart} className="heart2"/>
                            </Col>
                            <Col>
                                <img src = {accent_heart} className="heart3"/>
                            </Col>
                            <Col>
                                <img src = {accent_heart} className="heart4"/>
                            </Col>
                        </Row>

                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    <Col md={1}></Col>
                </Row>


                <Row className="fifth_section mobilePadding">
                    <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="article_question3">We talked about this with UCSD classes incorporating more ethics classes, but do you have an area in design that you think needs improvement in terms of ethics? </p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    <Col md={4}>
                        <img src={rectangle_frame} className="rectangle_frame"/>
                    </Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                    <img src={circle_frame} className="circle_frame"/>
                    <img src={star_frame} className="star_frame"/>
                    <img src={polygon_frame} className="polygon_frame"/>
                        <Row className="articleText beginQuestion">
                            <p className="articleText">I don't know if there's a specific area because I feel like you should try to bring ethics into every single area if you can. I think that starts at the root of the design process, too. If you're designing a product or something, you should make sure that at the beginning stages, when you're doing UX research or the secondary research, that you’re doing it ethically and making sure that you're targeting the right audience, targeting the right users for the end goal of your product. That could be a specific group of people or it could be the larger range. If you start off with a bad foundation and you don't know who you're designing for, what you're designing for, or even why you're designing, how are you going to design the rest of the product for the people that you’re supposed to be helping? You need to make sure that the beginning stages are done ethically. </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>

                <Row className="sixth_section mobilePadding">
                    <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="article_question3">Do you have any advice for any younger students who are interested in pursuing design? I know you had a bit of  a less traditional pathway to getting into design, so do you have advice for students like yourself? </p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText beginQuestion">
                            <p className="articleText">I think my advice would just be to just go for it. Be brave and go for it , even if it takes you, like me, an entire four year degree of pre-health/pre-med to get to the point where you're finally confident enough to say, “hey, I want to change career paths,” and then do it. You have so much life to live, and it's not the end of the world. You can always change your mind again, too. Just have that confidence and be brave enough to do something that you want to do, and I'm sure that along the way you’ll probably have a great support system to help you. And even if the haters don't follow along, or if your parents are kind of concerned, don’t worry. It's okay, and it's your life. Do what you go to do, and if you're successful with it, then that's all that matters in the end. And even if you're not successful, as long as you're happy, it's okay, really. </p>
                        </Row>
                        <Row className="articleText beginQuestion">
                            <p className="articleText">Honestly, I didn't even think I would get that far with design. A year ago from now, I was just graduating from UCSD.  If you asked me a year ago if I would be here now, I would be, like, “what are you talking about? That’s so crazy. Do I actually have a design portfolio now? Did I actually do all these projects? Am I actually the managing director of UX/UI for Develop for Good? Oh my gosh that's crazy!” So I do reflect back to myself a year ago; I can't believe I grew so much in that time and I did so much, even during a pandemic. So, if you really want something, if you put your mind to it, you can achieve anything. </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(InterviewWithAmanda);