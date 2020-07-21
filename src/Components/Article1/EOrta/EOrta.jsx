import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './EOrta.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';

class EOrta extends Component{
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
                    <Col className="column1" xs={12} md={1}>
                        <Row className="inner">
                            <Row>
                                <Link to = {{
                                            pathname: "/Article1",
                                        }}>
                                            <img className="backarrow" src={require('../Pictures/Cover/generalpics/backbutton.png')}></img>
                                        </Link>
                            </Row>
                        </Row>
                    
                    </Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={11}>

                        <Row>
                            <Col>
                            <p className="role">EDRIC ORTA - SOUND DESIGN</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <p className="paragraph"><span className="paragraphbig">“Music is the most important part of design”;</span> a bold claim made by 4th year Communications and Music double major Edric Orta. Edric found his start in sound design by enrolling in MUS 15 during his first year at UCSD, creating an EDM song that was received positively by his TA. From there, his journey in sound design has allowed him to not only to test the limits of music, but also <span className="paragraphbig">engage his audience</span> in his passion of storytelling through a medium of communication that he describes as</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={2} xs={2}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor eosticker1" draggable="false" src={require('../Pictures/Cover/generalpics/emeraldsticker.png')} />
                                </Draggable>
                            </Col>
                            <Col md={10} xs={10}>
                                <p className="paragraphbig" style={{marginTop:"1rem"}}>“the closest way to get someone's thoughts into another person’s thoughts and understand what everyone’s thinking.”</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">Our interview with Edric about his passion and devotion for sound design and what goes into his craft provided a new perspective to the <span className="paragraphbig">importance and appreciation</span> for what sound design achieves.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">When explaining what he does, Edric describes sound design as “<span className="paragraphbig">the process of changing sound to get what you want</span>”. In Edric’s case, he creates a specific noise then modulates it to his desire to produce a wide array of sounds. One of the tools Edric uses when modulating his sound is FL Studio, a digital audio workstation that allows him to experiment with <span className="paragraphbig">various pitches, tones, and instruments</span> that eventually combine together to compose music. Another tool he uses is SERUM, an Advancer Wavetable Synthesizer, that is considered to be the gold standard for EDM, and goes more in depth with <span className="paragraphbig">sound modulation</span> with 3D wavetables and oscillators. </p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={9} xs={9}>
                                <p className="paragraph">Looking into Edric’s main focus, sound design falls into two categories, <span className="paragraphbig">mixing and mastering</span>. Mixing is the first step of music production, taking different aspects of music such as vocals, instrumentals etc. to create a desired end <span className="paragraphbig">set of sound</span>. This can include combining 808 drums, specific piano chords, and even samples together then further refining the combination of these elements through processes such as equalization (EQ) and panning. Mastering is the final step of producing sound, the “debugging” of music production, <span className="paragraphbig">optimizing the sound</span> for our listening pleasure. Some of Edric’s work has also been showcased in DVC, a DJ club at UCSD, which he acknowledges in helping him learn how to DJ faster.</p>
                            </Col>
                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor eosticker2" draggable="false" src={require('../Pictures/Cover/generalpics/cometsticker.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={2} xs={2}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor eosticker3" draggable="false" src={require('../Pictures/Cover/generalpics/firesticker.png')} />
                                </Draggable>
                            </Col>

                            <Col md={10} xs={10}>
                                <p className="paragraph">It’s easy to overlook or generalize sound design, but it’s just as important as any other aspect of design. It’s <span className="paragraphbig">utilization of various tools and resources</span> in manipulating sound provides more than <span className="paragraphbig">sensory experience</span>, but also a story that taps into our <span className="paragraphbig">deepest human thoughts and emotions</span>. Without it, those experiences from films or music that we take for granted would cease to exist. When talking about the future of his field, Edric intuitively <span className="paragraphbig">predicts</span> that EDM will go into old tribal drum patterns, similar to those of the Aztecs or Mayans. Some of Edric’s inspirations include Madeon and Daft Punk, both of which are monumental artists in the <span className="paragraphbig">electric art</span> genre. </p>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <p className="upnexttext">UP NEXT</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} xs = {3}>
                                <Link to = {{
                                    pathname: "/SLee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/SOPHIE LEE.png')} alt ="Sophia Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                            
                            <Col md={3} xs = {3}>
                                <Link to = {{
                                    pathname: "/JFunes",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/JONATHAN FUNES.png')} alt ="Jonathan Funes" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={3} xs={3}>
                                <Link to = {{
                                    pathname: "/ALee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ALICE LEE.png')} alt ="Alice Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            
                            <Col md={3} xs={3}>
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
export default connect(null, {setTheme})(EOrta);
