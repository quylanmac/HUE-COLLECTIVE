import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../../redux/actions';
import './EthicalDesign.css';
import header from '../../../img/Issue3/EthicalDesignBanner.png';
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
import smallArticle1 from '../../../img/Issue3/equitableCover.png';
import smallArticle2 from '../../../img/Issue3/designingCover.png';
import smallArticle3 from '../../../img/Issue3/ethicalCover.png';
import smallArticle4 from '../../../img/Issue3/interviewCover.png';
import backToTop from '../../../img/Issue3/backToTop.png';
class EthicalDesign extends Component {
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
        window.addEventListener('scroll', this.listenToScroll)
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
                <Row className="introduction mobilePadding">
                    <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="articleQuestion">What social responsibility do we have as designers? Who is really benefiting from the experiences that we create? What does designing for good really mean? </p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft mobileHidden" xs={0} md={2}>
                        <Row>
                            <div className="diskArea">
                                <div className="linkDiskBase"><img className="imageBox" src={smallArticle3}/></div>
                                {/* Links to articles in these disks. */}
                                <div className="linkDisk">
                                </div>
                                <div className="linkDiskSecondary" 
                                    onMouseEnter={() => this.setDisc2(true)}
                                    onMouseLeave={() => this.setDisc2(false)}>
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
                                    <img src={disc4} className="disc1" 
                                    />
                                    {this.state.showDisc4 && <Link to={{pathname: "/interview-with-amanda"}}><img src={smallArticle4} className="testerDisc"/></Link>}
                                </div>
                            </div>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    <Col className="columnRight" xs={12} md={7}>
                        <Row className="articleText">
                            <p>These are the types of complex questions that design ethics can help us break down. Ethical design is made with the intent to do good. It concerns moral behavior and responsibility in design. To understand why this is important, let’s reflect on some current issues and the way technology is designed. Oftentimes human behavior is exploited by design, creating unwanted habits and negative consequences for the user (ex. social media addiction). Other times, design prioritizes the interests of the company at the cost of their users (ex. surveillance capitalism). As we educate ourselves to be the next generation of designers, here are some general guidelines on how we can design technology more ethically. </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="introduction2 mobilePadding myTest">
                    <Col md={3}/>
                    <Col md={1}><img src={glove} className="backgroundImageBox glove glove2"/></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" xs={12} md={7}>
                        <Row className="articleText newQuestion">
                            <p className="articleQuestion">1. Ask Questions</p>
                        </Row>
                        <Row className="articleText endBlock">
                            <p>A crucial part of design is understanding the existing structures and systems. In order to create better designs, it’s important to recognize and deconstruct the reasoning behind why things are designed the way that they are. Some concepts to think about as we question and evaluate existing designs are the consequences, effects, and benefits for society. </p>
                        </Row>
                    </Col>
                    <Col xs={1}/>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
                <Row className="secondSection mobilePadding">
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <div>
                            <div className="flowerBackground"/>
                        <Row className="articleText beginQuestion">
                            <p className="articleQuestion">2. Include Ethical Design Choices During Ideation </p>
                        </Row>
                        <Row className="articleText"v>
                            <p>During the ideation phase of the design process, designers are free to brainstorm wild ideas without any limitations. Novel and even unconventional ideas are welcome during this time since the ideation phase emphasizes creativity and innovation when developing solutions. Including ethical design choices during the ideation phase allows designers to think about ethical concerns freely without constraints. For example, this might look like brainstorming features that create a more accessible experience or exploring different solutions that benefit everyone. Therefore, using this time to generate ethical designs will ultimately lead to a more thoughtful and inclusive solution.</p>
                        </Row>
                        <Row className="articleText newQuestion">
                            <p className="articleQuestion">3. Create a Moral Value Map</p>
                        </Row>
                        </div>
                        <Row className="articleText">
                            <p>A moral value map is a tool which designers use to find values that are relevant to their solution. This is an exercise that maps out values that are relevant to your design, yourself, the company, and stakeholders. Concerns about the design and the potential effects that it may have are also discussed. Moral Value Maps are a great tool for aligning the team’s values and making sure that everyone from the designers, company leaders, and stakeholders are on the same page about the ethics of their design. </p>
                        </Row>
                        <Row className="captionText">
                            <img src={moralValue} className="smallImageBox mobileImage" />
                        </Row>
                        <Row className="captionText">
                            <a href="https://www.ethicsfordesigners.com/moral-value-map" target="_blank">An example of a moral value map</a>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>

                <Row className="thirdSection mobilePadding">
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                        <Row>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}><img src={cellphone} className="backgroundImageBox glove cellphone"/></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText beginQuestion">
                            <p className="articleQuestion">4. Beware of Dark Patterns In UX </p>
                        </Row>
                        <Row className="articleText">
                            <p>A dark pattern is a design that is used to trick or mislead users into doing something that they might not otherwise do. Companies may use these tactics in order to generate more sales, subscriptions, or keep users addicted to their product. While good ethical design creates a better experience for the user, dark patterns in design are used to manipulate the user experience in order to benefit the company. Some examples include sneaking items into your cart, trick questions, privacy zuckering, and misdirection. You can find more examples of dark patterns <span><a className="hoverText" href="https://darkpatterns.org/types-of-dark-pattern">here.</a></span></p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>

                <Row className="fourthSection mobilePadding">
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <div>
                            <div className="starBackground"/>
                        <Row className="articleText beginQuestion">
                            <p className="articleQuestion">5. Incorporate Nielsen’s 10 Usability Heuristics </p>
                        </Row>
                        <Row className="articleText">
                            <p>Designers can use <span style={{color:"#76B19F"}}><a className="hoverText" href="https://www.google.com/search?client=firefox-b-1-d&q=nielsen%27s+10+usability+heuristics" target="_blank">Nielsen’s 10 usability heuristics</a></span> as a guideline to evaluate the user interface to ensure ethical design choices were made. These heuristics were created by Jakob Nielsen, a co-founder of the Nielsen Norman group. These heuristics are standards that determine a product's usability and ensure a straightforward experience for the users. By conducting a heuristic evaluation, designers observe how the user interacts with their product and identifies any major issues with the design. </p>
                        </Row>
                        <Row className="articleText newQuestion">
                            <p className="articleQuestion">6. Educate Yourself</p>
                        </Row>
                        </div>
                        <Row className="articleText endBlock">    
                            <p>There are many great resources out there to learn more about ethics in design. While this article is a great first step towards becoming a well-educated designer, other resources include books, articles, and films. Some of our recommendations include Ruined by Design by Mike Monteiro which describes the harmful effects of products that are working exactly as designed. The Social Dilemma on Netflix is another great resource that highlights some of the major issues with the way social media is designed and how it affects society as a whole. </p>                    
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
                <Row className="fifthSection mobilePadding">
                    <Col xs={12}>
                    <Row className="ethicalQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="articleQuestion">A few tips on applying design ethics </p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}> <img src={sparkle} className="backgroundImageBox sparkle"/></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText beginQuestion">
                            <p className="articleText">The steps above are meant to guide you in your exploration of ethics in design. This approach can be applied to many different facets of design. Now, we’ll be taking a deeper look at what design ethics means for presenting information. </p>
                            <p className="articleText"> When developing consumer-oriented technological media, some major ethical concerns involve how people’s information is handled and presented. The goal here is to maintain honesty and visibility. The consumer should have an easy time discerning what information is presented to them, and it would be ethically responsible to avoid misdirecting their attention or deceiving them. Statistics don’t lie, but they can definitely be used to lead people the wrong way. Here are a few ideas and examples on how to incorporate ethical design choices. </p>
                        </Row>
                        <Row className="articleText newQuestion">
                            <img src={sparkle} className="tinyImageBox sparkle1"/>
                            <p className="articleQuestion">Visualize your data</p>
                            <img src={sparkle} className="tinyImageBox sparkle2"/>
                        </Row>
                        <Row className="articleText">
                            <p>When displaying data, using visuals like charts, graphs, and pictures generally capture the attention of the user more than words or a set of text would. Not only can data be presented in a more clear and concise fashion, but it can also generate more curiosity in the users, which in turn can help them focus their attention and utilize the data presented for their benefit. A great idea is to use a data dashboard, which is a information management tool that visually tracks, analyzes and displays information and metrics. They can be used for anything from application usage to vital measurements to company performances.</p>
                        </Row>
                        <Row className="articleText newQuestion">
                            <p className="articleQuestion">Don’t Make Users Remember Information</p>
                            <img src={heart} className="tinyImageBox"/>
                        </Row>
                        <Row className="articleText">
                            <p>Humans undertake a cognitive load when holding short-term information, which can negatively affect their decision making and awareness capabilities. When the goal is to enable the user to make the best decisions with the information they are given, reducing this cognitive load can relieve them from remembering unnecessary information. If your app, website, or interactable service requires the user to take actions or progress between screens, ensure that the user can see the relevant information at every step of the way.</p>                        
                        </Row>
                        <Row className="articleText newQuestion">
                            <img src={flowerpot} className="tinyImageBox"/>
                            <p className="articleQuestion">Misdirection in Informatics</p>
                        </Row>
                        <Row className="articleText">
                            <p>It is important to be aware of some common dark patterns in order to deliberately avoid them when it comes to handling information. A common one associated with displaying information is misdirection. Presenting information that is not relevant to the user or their decisions can distract them from the information they need. Also, presenting information that pulls the readers towards certain pieces of information over others can be manipulative. For example, let's consider an interface that displays information on how to exercise. Examples of misdirection include the usage of bold colors and fonts that emphasize an advertisement to buy exercise equipment versus the usage of grey or neutral fonts to deemphasize free alternatives. If the interest of the consumer is the priority, it would be in the best interest to emphasize them equally and to provide information on how the paid products compare to the free alternatives. </p>
                            <p>These were just a few examples, on how the responsibility to be ethical can impact design choices. Steps like these are important in embracing social ethics in your own work and setting a standard for the future of design.</p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(EthicalDesign);