import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../../Contact/Contact.css';
import '../Article1.css';
import './SKato.css'
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../../redux/actions';
import { useEffect } from 'react';
import profile from './Profile.png';

class SKato extends Component{
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
                                <p>SOPHIE KATO</p>
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
                            <p className="role">URBAN DESIGN</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">&emsp;&emsp;Sophie Kato, a 2nd year Sociology and Urban Planning major at UC San Diego, is an advocate of Urban Design and all its environmentally friendly applications. Sophie added Sociology as a double major to someday help people plan how to use public space and be critical of its socioeconomic impact in communities. She explores her interest in social and spatial arrangement, learning how they interact and overlap with each other. </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">She is also a big proponent of the Urban Studies and Planning (USP) approach because they recognize the nuances of spatial elements that Architecture does not fully address. For those who have never heard of USP before, Sophie describes it as a way of elaborating and exploring the relationship between spatial and built environments, especially in the context of how our cities and towns influence everything around it and how we could improve it.</p>
                            </Col>
                        </Row>

                        <Row>
                                <img className="doubleimage" style={{maxWidth:"30%"}} src={require('./pic1.png')}></img>
                                <img style={{maxWidth:"40%"}} src={require('./pic2.png')}></img>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">Sophie became an intern for the San Diego Department of Transportation, where she wanted to lower the dependence on cars as a means of travel. This internship focused on changing the narrative on car dependency through creating safer and enjoyable spaces for pedestrians and micro-mobility users in cities and small communities in San Diego.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} xs={8}>
                                    {/* STICKER HERE */}
                            </Col>

                            <Col md={8} xs={8}>
                                <p className="paragraphbig">When it comes to Urban Planning, Sophie believes in placing the environment and people at the center of the design.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">By decreasing the dependence of the community on automobiles as the primary mode of transportation and increasing the availability of space for people to walk in, she is getting closer to her interest in abstract creative work to integrate informal green space.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <img style={{maxWidth:"100%"}}src={require('./pic3.png')}></img>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">One of her inspirations for her work is The Death and Life of Great American Cities, a book by writer and activist Jane Jacobs. Jacobs’ book theorizes on what makes sidewalks and walking spaces in neighborhoods ideal. In the book, Jacobs presents her criticism about the Urban Planning policy in the 1950’s which is primarily responsible for the decline of neighborhoods in the United States. Jacobs’ advocacy of Urban Planning on a human scale can be seen in Sophie’s mentality.</p>
                            </Col>
                        </Row>
                        
                        <Row className="regularrow">
                            <Col md={4} xs={4}>
                                <img style={{maxWidth:"90%"}} src={require('./pic4.png')}></img>
                            </Col>

                            <Col md={8} xs={8}>
                                <p style={{marginTop:"2rem"}} className="paragraphbig">Urban design is very important for Sophie because in this age where everything is digitized, it is easy to lose sight of the nuances of design that can benefit the community and the environment at the same time.</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="paragraph">Along with this, she talks about the problems of stratification of communities:  “what can go where, depends on how we communicate and how stratification and hierarchies are reinforced.” This presents the problem of stratification, according to her, “...land use determines what kind of industries and structure goes where.” The main hurdle for Sophie’s work is stratification that creates inaccessible land. She strives for promoting equity and creativeness with an emphasis on environmentally friendly designs, since common trends in Urban Design can result in gentrification, further perpetuating the inequalities of land use.</p>
                            </Col>
                        </Row>

                        <Row className="regularrow">
                            <Col md={9} xs={9}>
                                <p className="paragraph">For those just starting out, Sophie recommends to learn and take everything in. The best thing to do is keep an open eye to your environment and space, while being critical of how it could be improved.</p>
                            </Col>

                            <Col md={3} xs={3}>
                                    {/* STICKER HERE */}
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
                                    pathname: "/LIbarra",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/LAUREN IBARRA.png')} alt ="Lauren Ibarra" onClick={() => this.handleTheme("white")}></img></button>
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
                                    pathname: "/ATam",
                                }}>
                                    <button className="nextbutton"><img className="upnext" src={require('../Pictures/Cover/ALICIA TAM.png')} alt ="Alicia Tam" onClick={() => this.handleTheme("white")}></img></button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                
            </Container>
        )
    }
}
export default connect(null, {setTheme})(SKato);
