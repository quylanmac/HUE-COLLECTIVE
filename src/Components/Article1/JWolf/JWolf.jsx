import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './JWolf.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class JWolf extends Component{
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
                                <p className="name">JONAH WOLF</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2022</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/jonah-wolf-7072a421/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://soundcloud.com/onthehousemoney" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/housemoney.svg')}></img></a>
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
                            <p className="role">SOUND DESIGN</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col>
                                <p className="paragraph">Jonah Wolf, a third year Economics major with Accounting and Business minors, boasts more than just an extensive knowledge in the world of economics. In fact, Jonah utilizes his creative talents in a medium much different than statistical models or economic methods. Rather, he makes <span className="paragraphbig">beats</span>. During our interview with Jonah, we were able to learn more about his journey as well as the versatility he brings to the table. Jonah got his start in music from a very young age, starting with the drums then transitioning into guitar and eventually beat making when he was in the 12th grade. After taking a hiatus, Jonah rekindled his passion for beat making after enrolling in UCSD. His experience has led him to produce a versatile array of beats as for him, <span className="paragraphbig">“It’s about sharing ideas and music”</span>.</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={2} xs={2}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/notesticker.png')} />
                                </Draggable>
                            </Col>

                            <Col md={10} xs={10}>
                                <p className="paragraphbig">When creating his beats, Jonah’s main concern is getting to a place that the artists he collaborates with can love.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col>
                                <p className="paragraph">During the beat making process, Jonah uses FL Studio, a digital audio workspace that allows him to combine various musical elements such as <span className="paragraphbig">keyboards, organs, drums, and even electronic sounds</span> to produce beats that he then sends out to various artists to experiment with and refine. His beats span a <span className="paragraphbig">variety of genres</span>, from Lo-Fi to contemporary R&B, and he credits his inspiration to the different artists that he collaborates with during the music making process alongside his own personal inspirations. When specifying some of these inspirations, Jonah credits Taio Cruz’s 2009 smash hit Dynamite as well as various artists of today such as Kanye West, Travis Scott, Young Thug, Thaiboy Digital, 100 gecs, JPEGMAFIA, and Mozart. </p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">Jonah’s devotion to beat making has also led him to be involved in the <span className="paragraphbig">Producers & Remixers Organization (PRO) Club</span> at UCSD, which gave him valuable information with working on digital  audio workspaces as well as a great community to learn from.  </p>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker2" draggable="false" src={require('../Pictures/Cover/generalpics/emeraldsticker.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">Jonah’s work can be found across various online platforms and specifically, his work with his own music collective, <span className="paragraphbig">Housemoney</span>, truly showcases Jonah’s multifaceted talent. Co-founded with fellow UCSD alum Damian Ngo, Jonah is focusing on creating his own music as well as connecting and collaborating with other artists, some of which are from UCSD.  With a strong line of communication between both himself and the artists, he is able to utilize his skills in beat making to <span className="paragraphbig">create works of art that seamlessly complement  the talents of his artists</span>. Housemoney isn’t solely limited to collaboration but also producing original music, instrumentals and playlists for the avid music fan to experience. Some of Housemoney’s productions include curated monthly playlists on Spotify and various instrumentals on Youtube, some of which have garnered over 500,000 views.  </p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col>
                                <img className="singleimage" style={{maxWidth:"60%"}} src={require('./pic1.png')}></img>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker3" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker.png')} />
                                </Draggable>
                            </Col>
                        </Row>
                        

                        <Row>
                            <Col>
                                <p className="paragraph">For Jonah, beat making isn’t only about the end result, but also the future. He is passionate about sharing his own music as well as seeing other artists grow and he hopes to continue working with other  artists and contributing to their sound. When balancing beat making with school, he suggests time management and a strict schedule interlaced with time for rest and relaxation. To explore more of Jonah’s work, visit some of his accounts and bear witness <span className="paragraphbig">to a man of the people</span>.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={4} xs={4}>
                                <Row md={4} xs={4}>
                                    {/* <Col> */}
                                    <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker4" draggable="false" src={require('../Pictures/Cover/generalpics/firesticker.png')} />
                                </Draggable>
                                    {/* </Col> */}
                                </Row>
                                <Row md={4} xs={4}>
                                    {/* <Col> */}
                                    <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker5" draggable="false" src={require('../Pictures/Cover/generalpics/firesticker.png')} />
                                </Draggable>
                                    {/* </Col> */}
                                </Row>
                                <Row md={4} xs={4}>
                                    {/* <Col> */}
                                    <Draggable {...dragHandlers}>
                                    <img className="cursor jwsticker6" draggable="false" src={require('../Pictures/Cover/generalpics/firesticker.png')} />
                                </Draggable>
                                    {/* </Col> */}
                                </Row>
                            </Col>

                            <Col md={8} xs={8}>
                                <img style={{maxWidth:"100%"}} src={require('./pic2.png')}></img>
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
                                    pathname: "/ATam",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ALICIA TAM.png')} alt ="Alicia Tam" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/SKato",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/SOPHIEKATO.png')} alt ="Sophie Kato" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/LIbarra",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/LAUREN IBARRA.png')} alt ="Lauren Ibarra" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(JWolf);
