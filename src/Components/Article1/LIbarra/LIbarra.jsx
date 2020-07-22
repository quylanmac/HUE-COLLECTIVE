import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './LIbarra.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class LIbarra extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
        window.scrollTo(0,0);
        this.props.setTheme('white');

    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <Container>
                <Row>
                     {/* LEFT COLUMN */}
                     <Col className="column1" xs={12} md={4}>
                    <Row className="inner">
                        <Row>
                            <Link to = {{
                                        pathname: "/Article1",
                                    }}>
                                        <img className="backarrow" src={require('../Pictures/Cover/generalpics/backbutton.png')}></img>
                                    </Link>
                        </Row>
                        <Row>
                            <Col>
                                <img class="profile" src={profile} alt="profile"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <p className="name">LAUREN IBARRA</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2021</p>
                            </Col>
                            
                        </Row>

                        </Row>
                    </Col>
                    {/* White Column Space */}
                    <Col md={1}></Col>


                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col>
                            <p className="role">SERVICE DESIGN</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor listicker1" draggable="false" src={require('../Pictures/Cover/generalpics/emeraldsticker.png')} />
                                </Draggable>
                                <p className="paragraph">&emsp;&emsp;&emsp;Lauren Ibarra is a UCSD student majoring in Biochemistry, and has found a calling in <span className="paragraphbig">health education</span>. During high school, Lauren founded a literacy-promotion campaign, exposing her to the discipline of service design.  From this initial exposure, her interest in raising up others bloomed into her current goal of creating <span className="paragraphbig">preventative health measures for underrepresented people</span> in our society.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                        <Col>
                            <img style={{maxWidth:"100%"}} src={require('./pic1.png')}></img>
                            <Draggable {...dragHandlers}>
                                <img className="cursor listicker2" draggable="false" src={require('../Pictures/Cover/generalpics/beesticker.png')} />
                            </Draggable>
                            <Draggable {...dragHandlers}>
                                <img className="cursor listicker3" draggable="false" src={require('../Pictures/Cover/generalpics/beesticker.png')} />
                            </Draggable>
                            <Draggable {...dragHandlers}>
                                <img className="cursor listicker4" draggable="false" src={require('../Pictures/Cover/generalpics/beesticker.png')} />
                            </Draggable>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <p className="paragraph">Always keeping busy, Lauren is associated with a <span className="paragraphbig">variety of organizations</span> on and off the UC San Diego campus.  The <span className="paragraphbig">International Health Clinic</span>, one of the groups Lauren works with, educates community leaders in Tijuana on public health and creates free health clinics for the local communities.  Another organization, <span className="paragraphbig">RE:dsgn</span>, formerly known as Education Equity Project, devotes itself to creating equality of education within San Diego County.  Between North and South County, severe disparities exist in the quality of education.  To help amend these differences, Lauren partners with IBM to help teach <span className="paragraphbig">collaborative and critical skills</span> to High Tech Elementary.  Between the International Health Collective and RE:dsgn, Lauren has had significant experience working with children, learning that younger students don’t need concepts to be simplified for them to understand.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} xs={5}>
                            <Draggable {...dragHandlers}>
                                <img className="cursor listicker5" draggable="false" src={require('../Pictures/Cover/generalpics/starsticker.png')} />
                            </Draggable>
                                <img style={{maxWidth:"100%"}} src={require('./pic2.png')}></img>
                                
                            </Col>

                            <Col md={8} xs={7}>
                                <p className="paragraphbig">In her experience, Lauren found it best to push her younger students rather than allowing educators’ pre-existing biases about disadvantaged communities limit their curriculum.</p>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor listicker6" draggable="false" src={require('../Pictures/Cover/generalpics/leafsticker.png')} />
                                </Draggable>
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                            <p className="paragraph">As she grew into her journey as a designer, Lauren found inspiration in those closest to her.  Her parents, who immigrated to the United States from Mexico, worked hard to provide their daughter the tools she needed to pursue her passions.  And now, as a college student, Lauren has devoted herself to improving the lives of others.  She finds inspiration in her mentor Dr. Weena Joshi, a UCSD faculty and leader within the International Health Collective who also works with children in the Tijuana clinic.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor listicker7" draggable="false" src={require('../Pictures/Cover/generalpics/housesticker.png')} />
                                </Draggable>
                            </Col>

                            <Col md={9} xs={9}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor listicker8" draggable="false" src={require('../Pictures/Cover/generalpics/flowersticker.png')} />
                                </Draggable>
                                <p style={{marginTop:"4rem"}} className="paragraphbig">Balancing between her demands as a pre-med student and a designer, Lauren advises that it’s better to pursue your passions, rather than following someone else’s path.</p>
                            </Col>

                        </Row>

                        <Row className="regularrow">
                            <Col>
                                <p className="paragraph"><span className="paragraphbig">“RE:dsgn”</span> focuses on creating <span className="paragraphbig">education equity</span> between North and South San Diego County by implementing “learner-centered thinking” design programs in under-resourced schools throughout South county.  By contextualizing educational curriculum in a real-world context, Lauren and her other team-members who began RE:dsgn hope to enact <span className="paragraphbig">sustainable and adaptable change</span> across many classrooms.  However, RE:dsgn’s first testing ground will be High Tech Elementary, where a classroom of fourth grade students will participate in a 10-week design curriculum, learning the basic concepts of <span className="paragraphbig">ideation and prototyping</span> while working to solve problems they have identified within their own communities.</p>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <p className="upnexttext">UP NEXT</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/JFunes",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/JONATHAN FUNES.png')} alt ="Jonathan Funes" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/ALee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ALICE LEE.png')} alt ="Alice Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/ERichards",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ERIC RICHARDS.png')} alt ="ERichards" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(LIbarra);
