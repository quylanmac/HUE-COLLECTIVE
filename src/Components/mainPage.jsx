import React from 'react';
import myCss from '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
export class mainPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            background:'#110F11',
            vis:false
        };
        this.interval=null;
    }

    handleChange = (color) => {
        this.setState({background:color.hex});
    };
    componentDidMount() {
        this.interval=setTimeout(()=>this.setState({vis:true}),10000);
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
                 <Loader></Loader>
                </Col>
              </Row>
              <Row>
                  
                <Col className="col-auto mx-auto">
                    {this.state.vis ?    <Button href="index.html" className="mybutton"><ColourWheel
                     callback={color=>this.setState({background:color})}></ColourWheel></Button> : null}
                </Col>
            
              </Row>
                <Row>
                    <Col className="col-auto mx-auto">
                        <a href="index.html" style={{color:this.state.background}}><p>Enter site</p></a>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}
