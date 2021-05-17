import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../../redux/actions';
import './CommunityDesign.css';
import star from '../../../img/Issue3/star.png';
import cellphone from '../../../img/Issue3/cellphone.png';
import cover from '../../../img/Issue3/designingcommunitylong.png';
import building from '../../../img/Issue3/buildingidk.png';
import smallArticle1 from '../../../img/Issue3/smallArticle1.png';
import smallArticle2 from '../../../img/Issue3/smallArticle2.png';
import smallArticle3 from '../../../img/Issue3/smallArticle3.png';
import smallArticle4 from '../../../img/Issue3/smallArticle4.png';
import backToTop from '../../../img/Issue3/backToTop.png';
import disc1 from '../../../img/Issue3/disc1.png';
import disc2 from '../../../img/Issue3/disc2.png';
import disc3 from '../../../img/Issue3/disc3.png';
import disc4 from '../../../img/Issue3/disc4.png';

class CommunityDesign extends Component{
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
        this.props.setTheme('black');
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
    }

    render() {
        return(
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
                <Row>
                    <img className="community_pic1" src={cover}/>
                </Row>
                <Row>
                <Col className="columnLeft mobileHidden" xs={0} md={2}>
                        <Row>
                            <div className="diskArea">
                                <div className="linkDiskBase"><img className="imageBox" src={smallArticle2}/></div>
                                {/* Links to articles in these disks. */}
                                <div className="linkDisk">
                                </div>
                                <div className="linkDiskSecondary" 
                                    onMouseEnter={() => this.setDisc2(true)}
                                    onMouseLeave={() => this.setDisc2(false)}>
                                    <img src={disc4} className="disc1" 
                                    />
                                    {this.state.showDisc2 && <Link to={{pathname: "/interview-with-amanda"}}><img src={smallArticle4} className="testerDisc"/></Link>}
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
                </Row>
                {/* first section with the black background */}
                <Row className="black_background">
                        <Col md={4}>
                            <p className="community_design_font center special">Then</p>
                            <img src={star} className="community_star1"/>
                            <img src={star} className="community_star2"/>
                            <img src={star} className="community_star3"/>
                            <img src={star} className="community_star4"/>
                            <img src={star} className="community_star5"/>
                        </Col>

                        {/* everything is in this Col code */}
                        <Col className="community_col" md={7}>
                            <Row>
                                <Col className="community_paragraph">
                                <p className="community_design_font">In the United States, the <span className="community_bold">Civil Rights Act </span> provided the impetus for a “great organizational flourishing,” in which many communities banded together in order to advocate and improve their own neighborhoods. The process of combining professional experience with community expertise and participation became known overall as community design. In 1973, a group of architectural students from UC Berkeley, organized as Asian Neighborhood Design, set out to design for the Asian communities of the Bay area, <span className="community_bold">initially focusing on both San Francisco’s and Oakland’s Chinatowns.</span> As they expanded, they branched out into various projects, engaging community members and creating both educational and vocational opportunities.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <img className="community_pic" src={building}/>
                                </Col>

                                <Col md={9}>
                                    <p className="community_design_font">One of their earliest major projects was the renovation of what would come to be known as the <span className="community_bold">Asian Resource Center (ARC),</span> located within Oakland’s Chinatown. Collaborating with the East Bay Asian Local Development Corp, AND volunteers directed the renovations of the 1924 terra cotta building, developing several community programs in the process. Several community organizations found a home within the ARC, including Asian Health Services and Filipinos for Affirmative Action, providing a breadth of social services in one location while sharing useful utilities and staff. Andy Gee, one of AND’s co-founders, saw the renovation as holding </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="trash community_paragraph">
                                    <p className="community_design_font">
                                    significance beyond the material changes; multi-service was a device for “community action.” Through community improvements, and not outsider investment, AND was able to facilitate a collective self-development that improved living conditions far beyond its four walls.
                                    </p>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="community_paragraph">
                                    <p className="community_design_font">Another of AND’s most successful programs has been the Employment Training Center, which sought to train community members in lucrative and reliable trades. In a 14-week, full-time employment with official certifications,<span className="community_bold"> attendees received valuable green construction training while developing soft skills in conflict resolution and GED preparation.</span> Since its inception in 1978, the ETC has trained over 2,500 individuals, with post-program wages averaging around $20.85 an hour.  In its over forty years of operation, AND has grown to service the Bay Area’s continually changing working class communities. Through projects like the Asian Resource Center renovation and the Employment Training Center, AND enables community members to improve their own lives by taking direct action within their towns and cities.</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col md={1}/>
                </Row>

                <Row className="white_background">

                    <Col md={4}>
                     <p className="community_design_font1 center special">Now</p>
                    </Col>

                    <Col className="community_col" md={7}>
                        <Row>
                            <Col className="community_paragraph">
                                <p className="community_design_font1">After it closed as a prison in 2012, <span className="community_bold1">Lancaster Castle</span> in Lanchester, England was found with an overgrown 14 hectares of land in need of some revamping. Thus, the project Beyond the Castle was established in an effort to renovate the open area into some sort of community space. The city council wanted the general public to help brainstorm the specifics of what the community space could be. However, people believed the decision on how to revamp the land was already made and dismissed any outreach as “an exercise in communicating the decisions already made.” Thus, a group of hired designers came up with five implementable methods to promote community involvement for the project. </p>
                            </Col>
                        </Row>

                        <Row>
                            <img src={cellphone} className="community_phone"/>
                        </Row>


                        <Row>
                            <Col className="cancer_column">
                                <p className="community_design_font1 cancer">1. Part of a shopping center was redesigned to mimic the castle’s open space, and shoppers were encouraged to <span className="community_bold1">talk about their experiences</span> with the area and offer potential revamping ideas.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="cancer_column">
                                <p className="community_design_font1 cancer">2. Actors were hired to tell <span className="community_bold1">interactive stories</span> on the open land.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="cancer_column">
                                <p className="community_design_font1 cancer">3. Participants of <span className="community_bold1">all ages</span> were invited to build potential revamp idea models.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="cancer_column">
                                <p className="community_design_font1 cancer">4. Active contributors were <span className="community_bold1">invited for a discussion</span> about ideas produced from the previous methods.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="cancer_column">
                                <p className="community_design_font1 cancer">5. An interactive exhibition was created, involving answering a prompt and thinking of suggestions “that were documented on <span className="community_bold1">cardboard boxes.”</span></p>
                            </Col>
                        </Row>

                        <Row>
                            <Col style={{paddingTop:"6rem"}}>
                                <p className="community_design_font1">Following the methods, the ideas generated were presented to the city council, who used it to move forward with the plan. For more details on the projects and very specific examples of the five methods, a detailed case study can be accessed.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}/>
                </Row>
            </Container>
        )
    }
}
export default connect(null, { setTheme })(CommunityDesign);