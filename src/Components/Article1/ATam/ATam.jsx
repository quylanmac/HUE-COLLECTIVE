import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './ATam.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class ATam extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
        this.props.setTheme('white');

        window.scrollTo(0,0);
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
                                <p className="name">ALICIA TAM</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2021</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/alicia-tam/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col>
                            <p className="role">ARCHITECTURE</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <p className="paragraph">For Alicia, a 3rd year here at UCSD, it was the call to <span className="paragraphbig">think critically</span> and <span className="paragraphbig">challenge the norm</span> that drew her to the discipline of speculative design.  You may think, “I wonder, what is spec design?”</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={3} xs={3}>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor atsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/starsticker.png')} />
                                </Draggable>
                            </Col>

                            <Col md={9} xs={9}>
                                <p className="paragraphbig" style={{marginTop:"3rem"}}>In Alicia’s own words, if a traditional designer creates the automobile, the speculative designer “foresees the traffic.”</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">Speculative design can encompass most any field and focuses on solving <span className="paragraphbig">tomorrow’s problems</span>.  As Alicia pursued Speculative Design, she found a home in architecture and urban planning, where she hopes to emphasize <span className="paragraphbig">sustainability</span> and <span className="paragraphbig">human well-being</span>, all while straying away from the norm.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={9} xs={9}>
                                <p className="paragraph">Though it may seem surprising due to the sheer size of the school, UCSD does not actually have a formal architecture program. Despite this disadvantage, Alicia still managed to <span className="paragraphbig">find mentors</span> in the discipline, citing UCSD professors Teddy Cruz and Brett Stalbaum as individuals who helped her navigate her major change and dive into <span className="paragraphbig">urban ecology</span> and <span className="paragraphbig">public culture</span>.  On any given day, Alicia utilizes a menagerie of tools to create her <span className="paragraphbig">models and designs</span>. For 3-D modeling, programs such as Revit, AutoCad, and SketchUp offer a variety of amenities for both novel and expert designers.  The Adobe Suite is the industry standard for visual designs, and to round out her skills, Alicia can write in Python to meet any of her coding needs.  As is quite apparent, Alicia has some handy <span className="paragraphbig">technical skills</span>.</p>
                            </Col>

                            <Col md={3} xs={3}>
                                {/* <Row>
                                <Col> */}
                                    <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker2" draggable="false" src={require('../Pictures/Cover/generalpics/purplegem.png')} />
                                    </Draggable>
                                    {/* </Col>
                                </Row>
                                <Row>
                                <Col> */}
                                    <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker3" draggable="false" src={require('../Pictures/Cover/generalpics/trianglesticker.png')} />
                                    </Draggable>
                                    {/* </Col>
                                </Row>
                                <Row> 
                                <Col> */}
                                    <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker4" draggable="false" src={require('../Pictures/Cover/generalpics/emeraldsticker.png')} />
                                    </Draggable>
                                    {/* </Col>
                                </Row> */}
                            </Col>
                        </Row>
                       
                       <Row className="regularrow">
                           <Col>
                           <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker5" draggable="false" src={require('../Pictures/Cover/generalpics/beesticker.png')} />
                                    </Draggable>
                               <img className="pic1" src={require('./pic1.png')}></img>
                           </Col>
                       </Row>

                       <Row className="regularrow">
                           <Col>
                               <p className="paragraph">However, as president of Architecture @UCSD, it’s been Alicia's <span className="paragraphbig">leadership and resilience</span> that helped the org grow and succeed. During her first year, Alicia joined the club to work on a <span className="paragraphbig">campus redesign project</span>, but by her second year, club activity had fizzled out. At this point, Alicia restarted the club twice, and under her guidance as president, it’s mission is more <span className="paragraphbig">focused</span> than ever. Over this past year, Architecture @ UCSD held regular weekly meetings, organized software workshops, visited active construction sites, and invited local planners and architects to speak with students.  In the future, Alicia hopes to <span className="paragraphbig">expand</span> the club’s activities and continue to <span className="paragraphbig">provide a space</span> where students can explore their interests in architecture.</p>
                           </Col>
                       </Row>

                       <Row className="regularrow">
                           <Col>
                               <p className="paragraphbig">Just like any design discipline, it’s important for architects to consider different perspectives in their work and projects.</p>
                               <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker7" draggable="false" src={require('../Pictures/Cover/generalpics/rainbowsticker.png')} />
                                    </Draggable>
                           </Col>
                       </Row>


                       <Row>
                           <Col md={6} xs={6}>
                               <img className="pic2" src={require('./pic2.png')}></img>
                               <Draggable {...dragHandlers}>
                                        <img className="cursor atsticker6" draggable="false" src={require('../Pictures/Cover/generalpics/flowersticker.png')} />
                                    </Draggable>
                           </Col>

                           <Col md={6} xs={6}>
                               <p className="paragraph">Unfortunately, it’s often easier said than done.  Whenever she <span className="paragraphbig">collaborates</span>, Alicia strives to design with <span className="paragraphbig">everyone’s ideas</span> in mind, creating a final product that everyone can be <span className="paragraphbig">proud</span> of.  As a designer, she also has to keep in mind the aspects of the <span className="paragraphbig">environment</span>, </p>
                           </Col>
                       </Row>

                       <Row style={{marginTop:"-1rem", marginBottom:"4rem"}}>
                            <Col>
                                <p className="paragraph">taking into account the natural landscape, climate, local culture, and stakeholders.  With the increasing effects of <span className="paragraphbig">climate change</span> and our focus on <span className="paragraphbig">mental health</span>, Alicia wants to focus on the <span className="paragraphbig">adaptability of her creations</span>.  However, because cities are currently designed to be unsustainable and inequitable, <span className="paragraphbig">straying from the status quo</span> will always be a priority for her.</p>
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
                                    pathname: "/SKato",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/SOPHIEKATO.png')} alt ="Sophie Kato" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/LIbarra",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/LAUREN IBARRA.png')} alt ="Lauren Ibarra" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/ERichards",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ERIC RICHARDS.png')} alt ="Eric Richards" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(ATam);
