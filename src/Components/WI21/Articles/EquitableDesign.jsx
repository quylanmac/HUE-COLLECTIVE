import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setTheme } from '../../../redux/actions';
import './EquitableDesign.css';
import header from '../../../img/Issue3/EquitableDesign.png';
import disc from '../../../img/Issue3/equitabledesigndisc.jpg';
import corktrailrail from '../../../img/Issue3/corktrailrail.png';
import fleetlibrarycubicle from '../../../img/Issue3/fleetLibraryCubicle.png';

import disc1 from '../../../img/Issue3/disc1.png';
import disc2 from '../../../img/Issue3/disc2.png';
import disc3 from '../../../img/Issue3/disc3.png';
import disc4 from '../../../img/Issue3/disc4.png';
import smallArticle1 from '../../../img/Issue3/equitableCover.png';
import smallArticle2 from '../../../img/Issue3/designingCover.png';
import smallArticle3 from '../../../img/Issue3/ethicalCover.png';
import smallArticle4 from '../../../img/Issue3/interviewCover.png';
import backToTop from '../../../img/Issue3/backToTop.png';
class EquitableDesign extends Component {
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
                    <img className="imageBox displayCenter" src={header}/>
                </Row>
                <Row className="equitableIntroduction mobilePadding">
                <Col md={7}/>
                        <Col xs={12} md={4} className="authorsDark">
                            <p className="corben special lineSpace">Written By: </p>
                            <p className="community_design_font special"> &nbsp;Shaonee Mitra & Alex Padayao </p>
                        </Col>
                        <Col md={1}/>
                <Col xs={12}>
                    <Row className="equitableQuestion">
                        <Col md={1}/>
                        <Col xs={12} md={8}>
                        <p className="articleQuestion">Introduction</p>
                        </Col>
                        <Col md={3}/>
                    </Row>
                    </Col>
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft mobileHidden" xs={0} md={2}>
                        <Row>
                            <div className="diskArea">
                                <div className="linkDiskBase"><img className="imageBox" src={smallArticle1}/></div>
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
                                    <img src={disc3} className="disc1" 
                                    />
                                    {this.state.showDisc3 && <Link to={{pathname: "/EthicalDesign"}}><img src={smallArticle3} className="testerDisc"/></Link>}
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
                    {/* Article Content Column   */}
                    <Col className="columnRight" xs={12} md={7}>
                        <Row className="articleText">
                            <p>Deep within the mountains of New York lies a summer camp whose impact on American lives far outreaches that of smores.
                            This summer camp, known as <span style={{color: "#76B19F"}} className="corbenBold">Camp Jened</span>, and it’s campers challenged the American government into rethinking the way we
                            interact with our society by spurring a nationwide movement for disabled rights that played a pivotal part in the
                            passing of the Americans with Disabilities Act (ADA) in 1990. The ADA not only gave America’s disabled protection from
                            discrimination, but also accomidations within existing structures not designed with them in mind, such as <span style={{color: "#76B19F"}} className="corbenBold">elevators
                            and curb cuts. </span>Camp Jened’s efforts were spearheaded by its campers, who were predominantly high school to college-aged
                            students with disabilities, and it was their call to action that brought awareness to the importance of equitable design.
                            The campers of Camp Jened brought attention to equitable design through demonstration, and today’s designers continue to
                            provide solutions to the problems raised by Camp Janed almost 30 years ago, reimagining how everyday objects can be redesigned.
                            Yet how exactly are these designers redesigning these objects and furthermore what has been done? To answer this question,
                            we first have to understand the concept of <span className="designCircle">Universal Design. </span>
                            </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
                <Row className="universalDesign  mobilePadding">
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                        <Row>
                            <div className="articleLabels">
                                <p className="headerText">Universal Design</p>
                            </div>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText">
                            <p>
                                Universal design. This idea is thrown around often, but what does it truly entail? By definition, the concept of universal
                                design promises to offer <span style={{color:"#5E53D9"}}  className="corbenBold">accessibility and function to anyone regardless of their age, size, ability, or disability.</span> Looking
                                at architecture, it is evident that though some may believe that the foundation of a building lies within its materials,
                                it really should be the inclusivity in design. Access to architecture is not a privilege that only some are allowed; it is a
                                right that must be kept at the forefront of thought. This sentiment was recognized as far back as Camp Jened.

</p><p>
                                Larry Allison, an able-bodied counselor at Camp Janed, expressed how at Camp Janed they realized that the problem of inaccessibility
                                fell on those without disabilities.  As society evolves, so must our ability to be flexible and innovative, not because it is being forced,
                                but because it's necessary. Many of the changes required to be more inclusive do not require a grandiose amount of wealth, resources,
                                and time, but rather <span style={{color:"#5E53D9"}} className="corbenBold">small tweaks that will have large scale impacts</span>- maybe a handrail is built, maybe a layout is changed. While
                                implementing changes for disabled persons, it is crucial to remember that disability cannot be seen just by looking at someone: 
                                <span style={{color:"#5E53D9"}} className="corbenBold"> disability can be a visual, cognitive, or auditory impairment, not just mobile. </span>We have begun to truly see the concept of universal
                                design in motion in places such as the Fleet Library in the Rhode Island School of Design and the Hazelwood School located in Glasgow.
                            </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
                <Row className="fleetlibrary  mobilePadding">
                    {/* Leftmost whitespace*/}
                    <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                        <Row>
                            <div className="articleLabels">
                                <p className="headerText">Fleet Library + The Hazelwood School </p>
                            </div>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText">
                            <Col xs={12} md={7} className="noPad"><p className="articleText">
                                The Fleet Library, founded in 1878, was redesigned under the guidance of Monica Ponce de Leon and her architecture and design firm
                                Office dA in 2006. Ponce de Leon, a Venezuelan-American who immigrated to the US in the 1980’s, discussed with NPR how she incorporated
                                universal design in her work. One of the most notable designs to the Fleet Library was its <span style={{color:"#76B19F"}}  className="corbenBold">cubicles</span>, which varied subtly in size and shape.
                                </p>
                            </Col>
                            <Col xs={0} md={1}/>
                            <Col xs={12} md={4} className="fleetlibrarycubicle" ><img src={fleetlibrarycubicle} className="imageBox mobileImage"/>
                            </Col>
      
                            <p className="articleText">
                                Ponce de Leon explained how this difference was intentional, hoping to “accommodate many different body types in a very subtle way”.
                                Her design encompassed various principles of universal design, some of which included size and space for approach and use as well as
                                being simple and intuitive. The Fleet Library’s cubicles were designed for people with different types of needs to enjoy the same benefit
                                that they provide, an ample learning environment. A person in a wheelchair could comfortably sit in one of the cubicles, and a small child
                                could sit in the same cubicle and not feel the difference. De Leon’s process represents an application of universal design on a small scale,
                                but universal design can also be applied in a bigger scope. The Hazelwood School for the multiple sensory impaired in Glasgow, Scotland applies
                                these principles, but in a way that can be accessible to children with special needs to learn.
                                </p>
                            <Col xs={12} md={4} className="corktrailrail"><img src={corktrailrail} className="imageBox mobileImage"/>
                            </Col>
                            <Col xs={12} md={8} className="noPad"><p className="articleText">
                                The school, which was opened in 2007, answered the challenge of universal design through intuitive features in its architecture,
                                both internal and external. A majority of the school's design features included a <span style={{color:"#76B19F"}}  className="corbenBold">cork “trail rail” </span>which visually impared
                                students could interact with to find their way around the school. Hazelwood also includes Braille, Pictograph, and Moon signage
                                across the school to ensure that all students' needs are met.
                            </p>
                            </Col>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
                <Row className="designingforall  mobilePadding">
                    {/* Leftmost whitespace*/}
                      <Col md={1}></Col>
                    <Col className="columnLeft" md={2}>
                        <Row>
                            <div className="articleLabels">
                                <p className="headerText">The Impacts of Designing for All</p>
                            </div>
                        </Row>
                    </Col>
                    {/* Seperator whitespace */}
                    <Col md={1}></Col>
                    {/* Article Content Column   */}
                    <Col className="columnRight" md={7}>
                        <Row className="articleText">
                            <p>
                                For DeLeon, the design of the Fleet Library was meant to have broad impacts into the future.
                                If universal design is integrated, DeLeon feels the necessity of the wheelchair symbol will be obsolete.
                                If all designs are made with disabled people in mind, distinguishing between able bodied people and disable people won’t matter.
                                
                            </p>
                            <p>
                                She wants to include the notion of “designing for the many'' when thinking about every design.
                                Since we all possess different levels of disability, the concept of universal design being implemented
                                into every project was not only one of her goals for the future, but one that all designers will apply.</p>
                                <p>

                                In the Hazelwood School, continuous improvements are being made to help further the education of the children
                                enrolled. One of their newest additions has been a sensory room that is another mode for learning. The Hazelwood
                                school has been crucial to a new generation of design projects for young people with special needs such as autism.
                                Designs such as these hope to encourage and exercise independence and free learning amongst the children in a secure environment.
                                For both the Fleetwood library and the Hazelwood school, there is always room for more improvement and increased inclusivity.
                                Newer generations of designers can take inspiration from these pieces of architecture and truly incorporate the concept of universal design.
                            </p>
                        </Row>
                    </Col>
                    {/* Rightmost whitespace */}
                    <Col md={1}></Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(EquitableDesign);