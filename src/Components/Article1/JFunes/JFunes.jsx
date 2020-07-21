import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './JFunes.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class JFunes extends Component{
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
                                <p className="name">JONATHAN FUNES</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2020</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.funes-design.com" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/websitebutton.svg')}></img></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/jonathan-funes/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col><p className="role">GRAPHIC DESIGN</p></Col>
                        </Row>
                        
                        <Row>
                            <Col>
                            <Draggable {...dragHandlers}>
                                <img className="cursor jfsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/starsticker.png')} />
                            </Draggable>
                                <p className="paragraph one">&emsp;&emsp; <span className="paragraphbig">M</span>eet Jonathan Funes, a <span className="paragraphbig">graphic designer</span> who turned his passion for art and self-expression into a successful career in design and illustration! His background in graphic design started in his high school advertisement design class, where he was exposed to Photoshop for the first time. He loved design and passionately <span className="paragraphbig">self studied</span> the basics of graphic design by  watching YouTube videos. Now, he is a graphic designer for University Centers and the creator of his own apparel.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                <img style={{maxWidth:"100%"}} className="cursor" draggable="false" src={require('../Pictures/Cover/generalpics/shirtsticker.png')} />
                            </Draggable>
                            </Col>

                            <Col md={9} xs={9}>
                            <p style={{marginTop:"3rem"}} className="paragraphbig"> Jonathan’s journey to get to where he is now was not a direct path. </p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col>
                            <p className="paragraph">He was originally admitted into UCSD as a Computer Science major. However, Jonathan was inspired to <span className="paragraphbig">follow his dreams</span> and changed his major to Communication with minors in Design and Business.</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                            <img style={{marginRight:"1rem", maxWidth:"30%"}}src={require('./pic1.png')}></img>
                            <img style={{marginRight:"1rem", maxWidth:"30%"}}src={require('./pic2.png')}></img>
                            <img style={{maxWidth:"30%"}}src={require('./pic3.png')}></img>
                            <Draggable {...dragHandlers}>
                                <img className="cursor jfsticker2" draggable="false" src={require('../Pictures/Cover/generalpics/idkwhatthisissticker.png')} />
                            </Draggable>
                            </Col>
                        </Row>

                        <Row style={{marginBottom:"1rem"}}>
                            <Col>
                            <p className="paragraph">Before working as a graphic designer at University Centers, Jonathan was a graphic designer for the Career Services Center. He created flyers, maps, layouts, and pamphlets which allowed him to <span className="paragraphbig">gain experience</span> and <span className="paragraphbig">perfect his skills</span>. Once he began working for University Centers, Jonathan was able to channel this experience into creating his own individual style of graphics to use in his work. He enjoys working for University Centers because it allows him to <span className="paragraphbig">express</span> something that he may not be used to. </p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={2} xs={2}>
                            <Draggable {...dragHandlers}>
                                <img style={{maxWidth:"120%"}} className="cursor" draggable="false" src={require('../Pictures/Cover/generalpics/papersticker.png')} />
                            </Draggable>  
                            </Col>
                            <Col md={10} xs={10}>
                                <p className="paragraphbig">He loves experimenting with different colors, textures, and typography in order to create something unique.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={4} xs={4}>
                            <img className="pic4" src={require("./pic4.png")}></img>
                            </Col>

                            <Col md={8} xs={8}> 
                            <p style={{marginTop:"1rem"}} className="paragraph">When asked to elaborate on his design process, Jonathan explained that it all <span className="paragraphbig">starts with a work order</span>. If the work order is from an artist, for example, he’ll draw inspiration from that artist’s <span className="paragraphbig">past album art or music</span>. From there, Jonathan will find photos to retouch or retrace on Procreate (an iPad application). After that he’ll work on details such as the typography so that it really fits with the artist or event.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={8} xs={7}>
                                <p className="paragraph">In his free time, Jonathan likes to be create <span className="paragraphbig">vector and freehand illustrations</span>. One of his projects titled, “Rings and Things,” is an illustration series and product design endeavor in which he created bright and vibrant jewelry pieces in order to combat <span className="paragraphbig">toxic masculinity within the Hispanic community. </span>Jonathan describes</p>
                            </Col>
                            <Col md={4} xs={5}>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor jfsticker3" draggable="false" src={require('../Pictures/Cover/generalpics/trianglesticker.png')} />
                                </Draggable>
                                <img className="pic5" src={require("./pic5.png")}></img>
                            </Col>
                        </Row>

                        <Row className="regularrow" style={{marginTop:"-1rem"}}>
                            <Col>
                            <p className="paragraph"> his personal style includes <span className="paragraphbig">bright colors, loud patterns, and textures</span>. He is inspired by @onlyjoke (Instagram) who also uses bright colors and shapes. For more details on this project and more of Jonathan’s work, check out his website.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <img className="doubleimage" style={{maxWidth:"33%"}}src={require('./pic6.png')}></img>
                            <img style={{maxWidth:"33%"}}src={require('./pic7.png')}></img>
                        </Row>

                        <Row>
                            <Col>
                                <p className="upnexttext">UP NEXT</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/SLee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/SOPHIE LEE.png')} alt ="Sophia Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/RSinghal",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/RISHABH SINGHAL.png')} alt ="Rishabh Singhal" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/HLiner",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/HARRY LINER.png')} alt ="Harry Liner" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(JFunes);
