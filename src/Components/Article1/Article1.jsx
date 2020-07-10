import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import '../Contact/Contact.css';
import './Article1.css';
import Draggable from 'react-draggable';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pageBreak from '../../img/pagebreak.png';
import { Redirect, NavLink, Link } from 'react-router-dom';
import { setTheme } from '../../redux/actions';
import { useEffect } from 'react';


class Article1 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.body.className = "lighttheme";
    };
    
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('white');
    };
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    render() {
        return (
            <Container>

                {/*Beginning Title and Text*/}
                <Row>
                    <Col>
                    <div className="d-flex justify-content-center">
                        <div className = "articleTarget">
                            <p>ISSUE 1: POINT OF VIEW</p>
                        </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="articleBody">For HUE’s first issue, we decided to highlight a few of the many disciplines across design by interviewing our incredible friends and fellow students. Each article follows our designers on their journey to finding a passion, incorporating their projects, key insights, and most valuable tools. 
                        </p>
                    </Col>
                </Row>

                {/*Redirection for each person on Article1*/}
                <Row>
                    <Col>
                        <Link to = {{
                            pathname: "/SLee",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/SOPHIE LEE.png')} alt ="Sophia Lee" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>
                        
                        <Link to = {{
                            pathname: "/ATam",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/ALICIA TAM.png')} alt ="Alicia Tam" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/EOrta",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/EDRIC ORTA.png')} alt ="Edric Orta" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/RSinghal",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/RISHABH SINGHAL.png')} alt ="Rishabh Singhal" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/SKato",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/SOPHIEKATO.png')} alt ="Sophie Kato" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/ERichards",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/ERIC RICHARDS.png')} alt ="Eric Richards" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/HLiner",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/HARRY LINER.png')} alt ="Harry Liner" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/LIbarra",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/LAUREN IBARRA.png')} alt ="Lauren Ibarra" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/ALee",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/ALICE LEE.png')} alt ="Alice Lee" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: "/JWolf",
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/JONAH WOLF.png')} alt ="Jonah Wold" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>

                        <Link to = {{
                            pathname: '/JFunes',
                        }}>
                            <button class="profiles"><img src={require('./Pictures/Cover/JONATHAN FUNES.png')} alt ="Jonathan Funes" onClick={() => this.handleTheme("white")}></img></button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default connect(null, {setTheme})(Article1);