import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './RSinghal.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class RSinghal extends Component{
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
                                <p className="name">RISHABH SINGHAL</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2020</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://risingha.wixsite.com/rsinghal-portfolio" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/websitebutton.svg')}></img></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/rishabh-singhal/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <p className="role">UI/UX DESIGN</p>
                        </Row>
                        
                       
                       <Row className="smallrow">
                           <Col>
                           <Draggable {...dragHandlers}>
                                    <img className="cursor rssticker1" draggable="false" src={require('../Pictures/Cover/generalpics/purple45.png')} />
                                </Draggable>
                               <p className="paragraph">&emsp;&emsp;Like many UCSD students, Rishabh was introduced to design through <span className="paragraphbig">Design for America</span> (DFA), an on-campus org dedicated to all things design. He realized that he could apply his <span className="paragraphbig">passion for journalism</span> to his work with the org, and ended up becoming a Cognitive Science major with a focus in Design and Interaction after <span className="paragrapbig">learning more about design</span> from students he interviewed for DFA. Combining elements of Psychology and Computer Science, UI/UX Design was the perfect focus for Rishabh, who says it’s an <span className="paragraphbig">open-ended design discipline</span> that has given him the freedom to pursue a technology-focused approach to design.</p>
                           </Col>
                       </Row>

                       <Row className="smallrow">
                           <Col>
                               <img style={{maxWidth:"100%"}} src={require('./pic1.png')}></img>
                               <Draggable {...dragHandlers}>
                                    <img className="cursor rssticker2" draggable="false" src={require('../Pictures/Cover/generalpics/beesticker.png')} />
                                </Draggable>
                           </Col>
                       </Row>

                       <Row className="smallrow">
                           <Col>
                               <p className="paragraph">Rishabh was a <span className="paragraphbig">team lead</span> for a national project with Design for America. It’s also given him exciting opportunities to participate in projects where he could apply what he’s learned to <span className="paragraphbig">solving real life problems</span> with organizations like the YMCA, where he served as a co-lead on a team seeking to remedy the nationwide shortage of lifeguards by designing a <span className="paragraphbig">lifeguard recruitment program</span> for San Diego. Rishabh also participated in the Diabetes Design Initiative with Dexcom, which was his personal favorite design experience because he was able to navigate a challenging task that gave him a glimpse into the world of design <span className="paragraphbig">beyond the classroom</span>.</p>
                           </Col>
                       </Row>

                       <Row>
                           <Col>
                               <p className="paragraphbig">Design can be used for everything from empathizing with others and engaging with other humans to really technical specific applied use.</p>
                               <Draggable {...dragHandlers}>
                                    <img className="cursor rssticker3" draggable="false" src={require('../Pictures/Cover/generalpics/leafsticker.png')} />
                                </Draggable>
                           </Col>
                       </Row>

                       <Row className="regularrow">
                           <Col md={6} xs={6}>
                           <Draggable {...dragHandlers}>
                                    <img className="cursor rssticker4" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker2.png')} />
                                </Draggable>
                               <img style={{maxWidth:"100%"}} src={require('./pic2.png')}></img>
                           </Col>
                           <Col md={6} xs={6}>
                               <img style={{maxWidth:"100%"}} src={require('./pic3.png')}></img>
                           </Col>
                       </Row>

                       <Row className="regularrow">
                           <Col>
                               <p className="paragraph">When we asked Rishabh if he had any advice for UCSD’s aspiring designers, he suggested they follow in his footsteps and check out <span className="paragraphbig">design orgs</span> like Design for America and Design Co. For those looking for internships, he says the most important thing to do is to find a way to <span className="paragraphbig">focus your applications to a few positions</span> that suit your strengths rather than applying to a ton of positions, and make sure to get referrals from sites like LinkedIn. </p>
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
                                    pathname: "/JWolf",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/JONAH WOLF.png')} alt ="Jonah Wolf" onClick={() => this.handleTheme("white")}></img></button>
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
export default connect(null, {setTheme})(RSinghal);
