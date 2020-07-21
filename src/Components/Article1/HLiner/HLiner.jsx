import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './HLiner.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class HLiner extends Component{
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
                                <p className="name">HARRY LINER</p>
                            </Col>
                            <Col md={12}>
                                <p className="year">Class of 2022</p>
                            </Col>
                            
                        </Row>

                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/harry-liner-204000193/" target="_blank"><img className="socials" src={require('../Pictures/Cover/generalpics/inbutton.svg')}></img></a>
                            </Col>
                        </Row>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                    {/* RIGHT COLUMN   */}
                    <Col className="column2" xs={12} md={7}>

                        <Row>
                            <Col><p className="role">URBAN DESIGN</p></Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <p className="paragraph">Did you know that 50% of the <span className="paragraphbig">world's population</span> is currently urban? This number is predicted to increase to 65-70% by 2050. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={2} xs={2}>
                            <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker1" draggable="false" src={require('../Pictures/Cover/generalpics/starsticker.png')} />
                                    </Draggable>
                            </Col>
                            <Col md={10} xs={10}>
                                <p className="paragraphbig">With this increase in urban growth, we must design places that support equal and successful communities.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">To learn more about Urban Design we had a chat with Harry Liner, a second year Urban studies and planning major. Harry describes that the ultimate goal of urban design is to <span className="paragraphbig">design better ways for people to occupy a space</span>. This can be through a democratization of space, funding, and resources. At UC San Diego, Harry describes the major as <span className="paragraphbig">broad with different focuses</span> such as policy, public health, and environmental studies. </p>
                                <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker2" draggable="false" src={require('../Pictures/Cover/generalpics/openbooksticker.png')} />
                                    </Draggable>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">He recommends all three lower division USP classes which teach students the history of urban communities. Issues such as how the cities were <span className="paragraphbig">designed and built unequally</span> are brought to light especially through infrastructure and resources such as <span className="paragraphbig">highways and community resources</span>. Additionally, Harry enjoys the book “The Death and Life of Great American Cities,” by Jane Jacobs. Jacobs' work was quite ground breaking at the time.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={9} xs={9}>
                                <p className="paragraphbig">She believed that for a place to truly thrive, people who inhabited the space needed to care about it, which meant they needed to feel like they had a stake in it as a member of the community.</p>
                            </Col>
                            <Col md={3} xs={3}>
                            <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker3" draggable="false" src={require('../Pictures/Cover/generalpics/citysticker.png')} />
                                    </Draggable>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col className="paragraph">She stood up against public officials like Robert Moses who is considered one of the most <span className="paragraphbig">polarizing figures</span> in the history of urban development in the United States. </Col>
                        </Row>


                        <Row className="regularrow">
                            <Col>
                                <img className="pic1" src={require('./pic1.png')}></img>
                                <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker4" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker3.png')} />
                                    </Draggable>
                            </Col>
                        </Row>

                        <Row className="smallrow">
                            <Col>
                                <p className="paragraph">Harry is deeply inspired by her work and wants to make cities livable, sustainable, beautiful, and equitable. He wants to contribute to important <span className="paragraphbig">legislative or design choices</span> and the real world effects it has decades later. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <p className="paragraph"><span className="paragraphbig">Urban Inspiration</span> <br></br> Harry draws his inspiration from the <span className="paragraphbig">modernist movement</span> which embraces minimalism and follows the idea of form <span className="paragraphbig">follows function</span>. Ludwig Mies van der Rohe was a modernist pioneer and renowned architect who shared this vision for the future of cities. In addition to his iconic designs and deep impact in the field of architecture, he is remembered for his statements such as “less is more” and “God is in the details.” On the daily, Harry’s go-to tools are reading and writing. He recognizes the importance of being organized and having an arsenal of <span className="paragraphbig">case studies and stories</span> to refer to. Additionally, he mentions the <span className="paragraphbig">importance of being able to study the environment</span>: where people live, work, modes of transportation, demographics, etc. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} xs={4}>
                                <img style={{maxWidth:"100%"}} src={require('./pic2.png')}></img>
                            </Col>

                            <Col md={4} xs={4}>
                            <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker5" draggable="false" src={require('./pic3.png')} />
                                    </Draggable>
                            </Col>

                            <Col md={4} xs={4}>
                                <img style={{maxWidth:"82%"}} src={require('./pic4.png')}></img>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">To anyone else interested in pursuing this field he offers this piece of advice. Keep in mind that decisions you make as a planner <span className="paragraphbig">won’t be seen for decades</span>. Urban planning has much more than designers. In terms of environmental design, <span className="paragraphbig">you need to know what you’re designing</span>. Use expertise as a planner to find the best solution. Urban design is best <span className="paragraphbig">paired with another focus</span> in order to see the connections between other areas of study. The best way to learn is from case studies: <span className="paragrapgbig">take one situation or city and learn from it</span>.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={3} xs={3}>
                                <Draggable {...dragHandlers}>
                                        <img className="cursor hlsticker6" draggable="false" src={require('../Pictures/Cover/generalpics/randomsticker4.png')} />
                                    </Draggable>
                            </Col>

                            <Col md={9} xs={9}>
                                <p className="paragraphbig" style={{marginTop:"2rem"}}>Knowing their history and prioritizing the voice of the community is an urban planners greatest skillset.</p>
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
                                    pathname: "/EOrta",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/EDRIC ORTA.png')} alt ="Edric Orta" onClick={() => this.handleTheme("white")}></img></button>
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
export default connect(null, {setTheme})(HLiner);
