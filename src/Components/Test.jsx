import React from 'react';
import myCss from '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
import '../animation.css';
export class Test extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            background:'#110F11',
            vis:false  //should be false
        };
        this.interval=null;
    }

    handleChange = (color) => {
        this.setState({background:color.hex});
    };
    componentDidMount() {
        this.interval=setTimeout(()=>this.setState({vis:true}),5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {    

        return (
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
            <Container className="d-flex flex-column justify-content-center">
              <Row>
                <Col className="col-auto mx-auto">
                    {/*Overlay classes are used to position the loader right on top of the ColourWheel component*/}  
                    <div className="overlay" style={{marginTop:"-10.5%"}}>   
                        <div className="overlay-1"><Loader></Loader></div>
                        {/*This checks for the vis bool to display the colour wheel component which is set after a timed delay*/}
                        {this.state.vis ? <div className="overlay-2 animated fadeIn delay2"><Button href="index.html" className="mybutton"><ColourWheel callback={color=>this.setState({background:color})}></ColourWheel></Button></div> : null}
                     </div>
                </Col>
              </Row>
                <Row style={{marginTop:"-30%"}}>
                    <Col className="col-auto mx-auto">
                        <a href="index.html" style={{color:this.state.background}}><p>Enter site</p></a>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
