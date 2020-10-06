import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './ALee.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class ALee extends Component{
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
                                <p className="name">ALICE LEE</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2020</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.alicelee.design/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/websitebutton.svg')}></img></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/alicelee1998/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col>
                            <p className="role">UI/UX DESIGN</p>
                            </Col>
                        </Row>
                        
                        
                        <Row className="smallrow">
                            <Col>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor alsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/flowersticker.png')} />
                                </Draggable>
                                <p className="paragraph">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;With a double major in Cognitive Science and Political Science, Alice is fascinated by the <span className="paragraphbig">interaction between design and the world</span> around it. Inspired by friends who applied their design specializations to their passions for sustainability, healthcare, and mobility, Alice decided to pursue product design to <span className="paragraphbig">improve technologies</span> that are made to help people. Currently, she’s working on a project to help older adults shop for high-tech devices even if they can’t get to the store, a product of her love for <span className="paragraphbig">inclusive design</span> aimed at people whose needs often aren’t accommodated in product design.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">Alice wasn’t always so sure about pursuing design; she was initially looking into a <span className="paragraphbig">career in business</span> because of its universal application, but she has since taken up <span className="paragraphbig">social design research</span> because of its impact on marginalized groups.</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={5} xs={4}>
                                <img className="alpic1" src={require('./pic1.png')}></img>
                            </Col>

                            <Col md={7} xs={8}>
                                <p className="paragraphbig">She’s especially interested in designing for people with diabetes and other medical conditions, which she believes is an important consideration for designing a better world. </p>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor alsticker2" draggable="false" src={require('../Pictures/Cover/generalpics/carsticker.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">Since declaring her CogSci major, Alice has been able to engage with design firsthand through several internships. While <span className="paragraphbig">studying abroad</span> in Hong Kong, she worked for a social design lab where she researched sound, lighting, and building structures to facilitate better learning among <span className="paragraphbig">special needs students</span>. Interning with the lab allowed Alice to explore design in depth in a way she had never experienced before, exposing her to accessible design that was opposed to the typical idea of designing to make a profit, rather than helping people. The experience drew her into the kind of socially conscious design that she is so passionate about today, and remains her favorite experience with design thus far. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={7} xs={7}>
                                <p className="paragraph">Alice also worked as a research intern for HP, where she researched <span className="paragraphbig">augmented technologies</span>, specifically using augmented reality to provide real time information on how to repair computers. The experience showed Alice what it’s like working for a traditional tech company, and that her passion lies in finding ways to <span className="paragraphbig">improve technology</span> for more practical use. </p>
                            </Col>
                            <Col md={5} xs={5}>
                                <img className="alpic2" src={require('./pic2.png')}></img>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor alsticker3" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker2.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">In her current work, Alice uses tools like Adobe XD, Sketch, and Figma to bring her ideas to life. Her dream project would be to <span className="paragraphbig">redesign healthcare systems</span> to be more inclusive, blending her political awareness with her passion for design. As for advice she has for aspiring designers, Alice urges you to <span className="paragraphbig">explore and go out of your comfort zone</span> to see what you’re most interested in.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={9} xs={9}>
                                <p className="paragraphbig">Working on your own project focused on your particular design interest is one of the best ways to engage with design and open you up to new opportunities.</p>
                            </Col>

                            <Col md={3} xs={3}>
                                    <Draggable {...dragHandlers}>
                                    <img className="cursor alsticker4" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker.png')} />
                                </Draggable>
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
                                    pathname: "/SLee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/SOPHIE LEE.png')} alt ="Sophia Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/RSinghal",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/RISHABH SINGHAL.png')} alt ="Rishabh Singhal" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(ALee);
