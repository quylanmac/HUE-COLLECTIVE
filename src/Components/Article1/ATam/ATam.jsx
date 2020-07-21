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
        window.scrollTo(0,0);
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('white');
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
                                <p className="year">Class of 2020</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/alicia-tam/"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
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
                                <p className="paragraph">For Alicia, a 3rd year here at UCSD, it was the call to think critically and challenge the norm that drew her to the discipline of Speculative Design.  You may think, “I wonder, what exactly is spec design?”  And within your simple question, you’d already find your answer. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">According to Alicia,</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={3} xs={3}>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor atsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/starsticker.png')} />
                                </Draggable>
                            </Col>

                            <Col md={9} xs={9}>
                                <p className="paragraphbig" style={{marginTop:"2rem"}}>Spec design can encompass most any field; she says, “you can design at any scale, [any] medium.”</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={9} xs={9}>
                                <p className="paragraph">Though it may seem surprising due to the sheer size of the school, UCSD does not actually have a <span className="paragraphbig">formal architecture major</span>.  Despite this disadvantage, Alicia still managed to find mentors in the discipline, citing Professors Teddy Cruz and Brett Stalbaum as individuals who helped her navigate her major change and dive into architecture.  On any given day, Alicia utilizes a menagerie of tools to create her <span className="paragraphbig">models and designs</span>.  For three dimensional creations, programs such as Revit, AutoCad, and SketchUp offer a variety of amenities for both novel and expert architects.  The Adobe Suite is industry standard for visual designs, and to round out her skills, Alicia can write in C++ to meet any of her coding needs.  As is quite apparent, Alicia has some handy <span className="paragraphbig">technical skills</span>.  </p>
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
                                        <img className="cursor atsticker5" draggable="false" src={require('../Pictures/Cover/generalpics/rainbowsticker.png')} />
                                    </Draggable>
                               <img className="pic1" src={require('./pic1.png')}></img>
                           </Col>
                       </Row>

                       <Row>
                           <Col>
                               <p className="paragraphbig">However, as president of Architecture @UCSD, it’s been Alicia's leadership and resilience that helped the org grow and succeed. </p>
                           </Col>
                       </Row>

                       <Row className="regularrow">
                           <Col>
                               <p className="paragraph">During her first year, Alicia joined the club to work on a <span className="paragraphbig">campus redesign project</span>, but by her second year, club activity had fizzled out.  At this point, Alicia has restarted the club twice, and under her guidance as president, it’s mission is more <span className="paragraphbig">focused</span> than ever.  Over this past year, Architecture @UCSD held regular weekly meetings, visited active construction sites, and invited local professionals for conversations with students.  In the future, Alicia hopes to <span className="paragraphbig">expand the club’s activities</span>, providing software workshops and continuing to provide a space where students can <span className="paragraphbig">explore their interests</span>.</p>
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
                               <p className="paragraph">Just like any design discipline, it’s important for architects to consider <span className="paragraphbig">different perspectives</span> in their work and projects.  Unfortunately, it’s often easier said than done.  Whenever she collaborates, Alicia strives to design with everyone’s ideas in mind, creating a final product that everyone</p>
                           </Col>
                       </Row>

                       <Row className="regularrow" style={{marginTop:"-1rem"}}>
                            <Col>
                                <p className="paragraph"> can be proud of. As an architect, she also has to keep in mind the restrictions of the <span className="paragraphbig">environment</span>, designing around the site’s <span className="paragraphbig">elevation, climate, and population</span>.  In the future, Alicia dreams of designing for the <span className="paragraphbig">well-being</span> of both the environment and her structure’s occupants.  With the increasing effects of climate change and our focus on mental health, Alicia wants to focus on the <span className="paragraphbig">adaptability of her creations</span>.  However, straying from the norm, she says, will always be a priority for her.</p>
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
