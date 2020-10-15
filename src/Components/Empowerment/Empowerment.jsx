import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './Empowerment.css';
import Directory from '../../img/Issue2/Directory.png';
import { HashLink } from 'react-router-hash-link';
import Group from '../../img/Issue2/Group.png';
import rightDesign from '../../img/Issue2/rightDesign.png';
import Winson from '../../img/Issue2/Winson.png';
import Flower from '../../img/Issue2/Flower.png';
import LinkedIn from '../../img/Issue2/LinkedIn.png';
import Portfolio from '../../img/Issue2/Portfolio.png';
class Empowerment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container>
                    <div className="Empowerment">
                        <HashLink smooth to="/groupinterview" className="">
                            <img src={Group} className="beginButton2 responseImg2" />
                        </HashLink>
                        <div className="topHeader">
                            <p className="group2Header">EMPOWERMENT {'\u0026'} DESIGN</p>
                            <p className="subHeader">“If I have the ability to learn, so should other people.”</p>
                            <div className="empowerBox">
                                <Row>
                                    <Col xs={12} md={11}>
                                        <img src={Winson} className="profilePic" />
                                    </Col>
                                    <Col xs={0} md={1}>
                                        <img src={Flower} style={{ marginLeft: '-1rem' }} className="winsonFlower" />
                                    </Col>
                                </Row>
                                <Row>
                                    <p className="winsonHeader">AN INTERVIEW WITH WINSON DIEU</p>
                                </Row>
                                <Row>
                                    <p className="winsonStats"><b>Major:</b> Cognitive Science: Design and Interaction
                                    <br></br>
                                        <b>Minors:</b> Philosophy, Entrepreneurship
</p>
                                </Row>
                                <Row>
                                    <Col className="nopad" xs={6} md={5}>
                                        <a href="https://www.linkedin.com/in/winson-dieu/" target="_blank">
                                            <img src={LinkedIn} className="winsonButton" />
                                        </a>
                                    </Col>
                                    <Col className="nopad" xs={6} md={5}>
                                        <a href="https://www.winsondieu.com/" target="_blank">
                                            <img src={Portfolio} className="winsonButton" />
                                        </a>
                                    </Col>
                                    <Col md={2} />
                                </Row>
                                <Row>
                                    <p className="winsonHeader">BACKGROUND</p>
                                </Row>
                                <Row>
                                    <p className="classicWinson">As design becomes a more expansive field of study, one of the <b>design community’s biggest challenges is becoming a more
                                inclusive environment for people to explore their field and learn.</b> One of those designers spearheading this charge is
                                Winson Dieu, a rising senior at UC San Diego.
                                <br></br><br></br>
                                Winson is Industry Relations Director at Design Co and has worked for companies including Adobe and Ford. His wide variety of professional and technical skills
                                has <b>earned him various recognitions including Forbes Under 30 Scholar and Princeton Envision Scholar.</b> Yet for Winson, the greatest honor isn’t the acclaim but
                                the satisfaction of helping educate fellow designers and finding opportunities for them to learn and hone their skills. <b>Winson believes in empowering others
                                through education and strongly advocates for more inclusive resources.</b> We were fortunate enough to sit down with Winson for a chat about his unique perspective
                                on design and the role it plays in his life. </p>
                                </Row>
                                <Row>
                                    <p className="winsonHeader">Q{'\u0026'}A WITH WINSON</p>
                                </Row>
                                <Row>
                                    <p className="classicWinson">
                                        <b>
                                            Q1. How did you get into design?</b>
                                        <br></br><br></br>

                                I came from a first generation family with no formal education. Growing up, I watched my mother work as a fashion designer who created clothes from end to end. I observed her as she went through her design process and this was my first exposure to design. After I entered college, the biggest reason for why I'm pursuing design as a first generation college student is because education is something that I'm really passionate about. I use design as a medium to speak on and do things that I like which intersects with education. For me, design is a means to an end of doing things that are the most fulfilling that I find for myself.
                                <br></br><br></br>
                                        <b>
                                            Q2. What are some of your plans and goals in design?</b>
                                        <br></br><br></br>

                                I definitely plan on staying into design but my internship experience this summer has allowed me to question the purpose of working for a large tech company. Working remotely and feeling judged solely on my output is definitely something to consider for my future goals in design. Ultimately, I’m planning on working as a product designer for a few years before starting my own projects that align with my goals of using design to make a meaningful impact.
                                <br></br><br></br>
                                        <b>
                                            Q3. How did you get involved in UCSD’s design community?</b>
                                        <br></br><br></br>

                                My orientation leader in college actually recommended that I come out to a student organization called Design Co (previously Design at UCSD). I got involved in design not through classes or opportunities but just by talking to people. I’ve met many young talented designers at UCSD who taught me a lot about design and helped me get further involved in the design community at UCSD. In my experience, there are a lot of people who are just willing to have candid conversations on design and how to get involved in UCSD’s design community.
                                <br></br><br></br>
                                        <b>
                                            Q4. What have been your favorite design classes at UCSD?</b>
                                        <br></br><br></br>

                                ENG 100D - Design for Development
                                In this class I had the opportunity to work with a non profit for 12 weeks in order to deliver a solution to a real problem they were experiencing. I enjoyed working end to end with my team in order to create the final solution. In my opinion, the real world impact and opportunity to actually help someone is more rewarding than the letter grade attached.

                                COGS 127: Designing Human-Data Interactions
                                In my opinion, this class distinguishes itself from other classes by being relentlessly practical. It really helped me to find internships within the design industry. I also appreciated the critique on other design classes.
                                <br></br><br></br>
                                        <b>
                                            Q5. What valuable skills did you learn that you think every designer should know outside of the classroom?
                                </b><br></br><br></br>

                                Classes were great for setting the foundation for design work but, in order to hone in my skills and learn how to design, I turned to online resources. I read articles about design every single day. There are so many articles on Medium and other online resources that have valuable information on design and the industry. I also connected with designers online and in person which was really impactful for me. I highly recommend having a group of designers to talk to. As students, we may not know how to start since there are so many different paths to take within design. Talking with friends allowed us to explore these paths together, asking each other questions and learning from each other.
                                <br></br><br></br>
                                        <b>
                                            Q6. How would someone get involved with a design project/get experience outside of class?</b>
                                        <br></br><br></br>
                                An easy way to get involved would be to join a student group. Personally, joining Design Co has made me more comfortable and confident in getting involved with side projects. They host weekly general body meetings that include beginner friendly workshops and industry talks.
                                </p>
                                </Row>

                            </div>
                        </div>
                        <HashLink smooth to="/issue2" className="">
                            <img src={rightDesign} className="end3Button responseImg2" />
                        </HashLink>
                    </div>
                </Container>
            </>
        )
    }
}
export default connect(null, {})(Empowerment);