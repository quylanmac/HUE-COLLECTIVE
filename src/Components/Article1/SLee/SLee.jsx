import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './SLee.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class SLee extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('white');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        return (
            <Container>
                <Row>
                    {/* LEFT COLUMN */}
                    <Col className="column1" xs={12} md={4}>
                        <Row>
                            <Link to = {{
                                        pathname: "/Article1",
                                    }}>
                                        <button class="backarrow"><img src={require('../Pictures/Cover/generalpics/backbutton.svg')} /*alt ="Sophia Lee" onClick={() => this.handleTheme("white")}*/></img></button>
                                    </Link>
                        </Row>
                        <Row>
                            <div>
                                <img class="profile" src={profile} alt="profile"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="name">
                                <p>SOPHIA LEE</p>
                            </div>
                            <div className="year">
                                <p>Class of 2022</p>
                            </div>
                            
                        </Row>

                        <Row>
                            <a href="https://www.google.com"><img className="socials" src={require('../Pictures/Cover/generalpics/websitebutton.svg')}></img></a>
                        </Row>
                        <Row>
                            <a href="https://www.instagram.com"><img className = "socials" src={require('../Pictures/Cover/generalpics/igbutton.svg')}></img></a>
                        </Row>
                        <Row>
                            <a href="https://www.linkedin.com"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                        </Row>
                    </Col>

                    {/* White Column Space */}
                    <Col md={1}></Col>


                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col>
                            <p className="role">SPECULATIVE DESIGN</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">	As a 2nd year Speculative Design major and an Urban Studies minor in UC San Diego, Sophia directs her creative talents on abstract art and speculative design. As a freshman, she entered UC San Diego as a Global Health Major. She later had a change of heart and decided to pursue speculative design. According to Sophia, UCSD has an amazing blend of <span className="paragraphbig">science, technology, and art</span>. These three elements are at the heart of what speculative design and of Sophia’s work. As a former student of an all-girl school, Sophia incorporates strong <span className="paragraphbig">feminist elements</span> in her work.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={9} xs={9}>
                                <p className="paragraphbig">In her creative work, Sophia uses a plethora of editing and design software. </p>
                            </Col>

                            <Col md={3} xs={3}>
                                {/* STICKER HERE */}
                            </Col>
                        </Row>
                        
                        <Row style={{marginTop:"-1rem"}}>
                            <Col>
                                <p className="paragraph">One of these is Autocad which is a 2D and 3D design software. She also uses Blender and Arduino Integrated Development Environment (IDE) software in which she wished that she had learned way earlier in her artistic journey in order to build up her proficiency for it. Through the classes that she takes in UC San Diego, such as Vis 147A and Vis 30, she develops her skills and takes inspiration from them. <span className="paragraphbig">Feedback and conversations with professors</span> in the same field are some of the important sources of help that Sophie gets. </p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <img style={{maxWidth:"100%"}} src={require('./pic1.png')}></img>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">As a fan of many different varieties of art and design, <span className="paragraphbig">Sophia takes inspiration from artists Maia Ruth Lee and Lee Bul</span>. Maia Ruth Lee is an artist that covers different types of mediums such as modeling or sculpting, and operates as the director of an art-focused non-profit organization called Wide Rainbow. Lee Bul is a contemporary sculpture artist; her work focuses on questioning patriarchal authority and the marginalization of women by exposing societal problems.</p>
                            </Col>
                        </Row>
                        

                        <Row>
                            <Col md={6} xs={6}>
                                <img style={{maxWidth:"100%"}} src={require('./pic2.png')}></img>
                            </Col>

                            <Col md={6} xs={6}>
                                 <p className="paragraph">Sophie’s eye for design and abstract art can be seen in her project called Techno Cowboy. Techno Cowboy is an audio-visual synthesizer and was part of her VIS 147A class, where RGB lights respond to various audio inputs where noise is reflected as a visual product. Another project from one of her classes, VIS 30, is GARBarch. GARBarch is a speculative design intervention project. It focuses on </p>   
                            </Col>
                        </Row>

                        <Row style={{marginTop:"-1rem", marginBottom:"3rem"}}>
                            <Col>
                                <p className="paragraph">integrating architecture to the global warming crisis. Her <span className="paragraphbig">passion in integrating green architecture</span> with her creativity in specular design is what we need more in young designers. </p>
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
                                    pathname: "/RSinghal",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/RISHABH SINGHAL.png')} alt ="Rishabh Singhal" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/HLiner",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/HARRY LINER.png')} alt ="Harry Liner" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/JWolf",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/JONAH WOLF.png')} alt ="Jonah Wolf" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(SLee);
