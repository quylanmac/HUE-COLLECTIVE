//This is not used so far
import React from 'react';
import {HuePicker} from 'react-color';
import '../App.css';
import {Container, Row, Col, Navbar, Button} from 'react-bootstrap';
import logo from '../img/HUE.png';
import loader from '../img/loader.gif';
export class HUEBar extends React.Component {
    state= {
        background: '#110F11',
    };

    handleChange = (color) => {
        this.setState({background:color.hex});
    };

    render() {
        return (
            <>
            <div> 
            <div className="test" style={{backgroundColor:this.state.background}}>
            <Container className="d-flex flex-column justify-content-center">
              <Row>
                <Col className="col-auto mx-auto">
                  <Navbar className="navbar-expand-md">
                    <Container className="container-fluid">
                      <a className="navbar-brand" href="index.html">
                      <img src={logo} alt="HUE" />
                      </a>
                    </Container>
                  </Navbar>
                </Col>
              </Row>
              <div> 
            <img src={loader} alt={"Loading..."}></img>
            </div>
              <HuePicker
            color={this.state.background}
            onChange={this.handleChange}
            />
            <Row>
                <Col className="col-auto mx-auto">
                <a href="index.html" style={{color:"white"}}><p>Enter site</p></a>
                </Col>
                </Row>
                 </Container>
            </div>
            </div>
            </>
        );
    }
}