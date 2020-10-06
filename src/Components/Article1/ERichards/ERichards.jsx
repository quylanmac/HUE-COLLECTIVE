import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './ERichards.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class ERichards extends Component{
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
                                <p className="name">ERIC RICHARDS</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2020</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/eric-richards/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.atutu.org/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/atutu.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col>
                            <p className="role1">COMMUNITY-DRIVEN DESIGN</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker1" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker.png')} />
                                </Draggable>
                                <p className="paragraph">&emsp;&emsp;&emsp;&emsp;A 5th year at UC San Diego, Eric Richards belongs to a category with relatively few students; he created his own major, called <span className="paragraphbig">Design for Social Innovation</span>. After expressing his interest in minoring in Public Service and Design, a counselor recommended he research the <span className="paragraphbig">individual studies major</span> to further pursue his passion of helping others. By taking <span className="paragraphbig">ownership</span> of his education, Eric combined his academic courses with his personal projects and extracurriculars, devoting himself to organizations that design for <span className="paragraphbig">social good</span>, such as Design for America and Atutu, a <span className="paragraphbig">design-focused nonprofit</span> which he helped found.</p>
                            </Col>
                        </Row>
                        
                        <Row className="smallrow">
                            <Col md={9} xs={9}>
                                <p className="paragraphbig" style={{marginTop:"4rem"}}>Throughout his time at UC San Diego, Eric has sought out opportunities to get involved within the humanitarian design community.</p>
                            </Col>

                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker2" draggable="false" src={require('../Pictures/Cover/generalpics/peoplesticker.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">As a second-year, he joined a Design for America project focused on <span className="paragraphbig">aiding senior citizens and their doctors</span>. Now, as co-president of the org, Eric credits his leaders with teaching him how to <span className="paragraphbig">lead his own team and learn from failure</span>. </p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col md={2} xs={2}></Col>
                            <Col md={8} xs={8}>
                                <img className="img1" src={require('./pic1.png')}></img>
                                <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker3" draggable="false" src={require('../Pictures/Cover/generalpics/worldsticker.png')} />
                                </Draggable>
                            </Col>
                            <Col md={2} xs={2}></Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">However, he didn’t always hold such passions when he first came to college.  Originally, after enrolling in a Coursera class by Scott Klemmer, he was set on a much more familiar track: study UX Design for four years, then go work for a tech company in Silicon Valley.  However, <span className="paragraphbig">after being inspired</span> by mentors such as Brandon Reynante, a UCSD professor who left a career in industry to teach college students <span className="paragraphbig">engineering with a humanitarian lens</span>, Eric pivoted to his current path, determined to help others. The Civic Digital Fellowship helped Eric really hone his design skills as he worked with government agencies to make <span className="paragraphbig">government digital services</span> more accessible and user-friendly. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                        <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker4" draggable="false" src={require('../Pictures/Cover/generalpics/trianglesticker.png')} />
                                </Draggable>
                            <img className="erpic2" src={require('./pic2.png')}></img>
                            <img className="erpic3" src={require('./pic3.png')}></img>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker5" draggable="false" src={require('../Pictures/Cover/generalpics/purplegem.png')} />
                                </Draggable>
                            </Col>
                        </Row>

                        
                        <Row>
                            <Col>
                                <p className="paragraph">Through his teachers and experiences in design projects, Eric learned <span className="paragraphbig">two important truths</span> about design research:</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraphbig">1.) Knowing how to interview and asking the right questions are essential to success</p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraphbig">2.) Developing sensitivity and lifting up community voices are even MORE essential to success </p>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">Eric admits that this path <span className="paragraphbig">hasn’t always been the easiest</span> for him. For him to take control of his college experience in this way, he had to spend significant time <span className="paragraphbig">researching</span> and finding out what his <span className="paragraphbig">true passions</span> are. For Eric, after meeting with almost every department at UC San Diego, he realized his calling was <span className="paragraphbig">using design to tackle important social challenges</span>. He encourages others to ask the same <span className="paragraphbig">difficult questions</span> he asked himself and to take control of their time in college.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                    <img className="cursor ersticker6" draggable="false" src={require('../Pictures/Cover/generalpics/morepeople.png')} />
                                </Draggable>
                            </Col>
                            <Col md={9} xs={9}>
                                <p className="paragraph"><span className="paragraphbig">Atutu</span> is a nonprofit organization founded by Eric in collaboration with Global Ties at UCSD. Atutu is committed to “<span className="paragraphbig">supporting community-driven social change</span>,” working with locals in India, Mexico, and Myanmar (formerly Burma) to enact <span className="paragraphbig">sustainable programs</span> for students and their communities. In Myanmar, Atutu is currently planning the Atutu Design Studio, a makerspace that will <span className="paragraphbig">serve schoolgirls</span> in the Kachin state. Within the studio itself, students will have <span className="paragraphbig">access to a variety of tools</span> such as computers, laser printers, and drill presses.</p>
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
                                    pathname: "/ALee",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ALICE LEE.png')} alt ="Alice Lee" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs = {4}>
                                <Link to = {{
                                    pathname: "/JFunes",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/JONATHAN FUNES.png')} alt ="Jonathan Funes" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>

                            <Col md={4} xs={4}>
                                <Link to = {{
                                    pathname: "/EOrta",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/EDRIC ORTA.png')} alt ="Edric Orta" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(ERichards);
