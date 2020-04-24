import React from 'react';
import myCss from '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
import '../animation.css';
import {Redirect, Link} from "react-router-dom";
import {TeamCard} from './TeamCard';
import data from '../data.json';
export class Test extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            background:"white",
            loaderVis:false, //should be false
            mainPageVis: false,
            LoaderDiv: true,
        };
        this.interval=null;
        this.setloaderVis = this.setloaderVis.bind(this);
        this.setmainPageVis = this.setmainPageVis.bind(this);
        this.setBothVis = this.setBothVis.bind(this);
        this.removeLoaderDiv = this.removeLoaderDiv.bind(this);
    }

    handleChange = (color) => {
        this.setState({background:color.hex});
    };
    componentDidMount() {
        this.interval=setTimeout(()=>this.setState({loaderVis:true}),5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    setBothVis() {
        this.setloaderVis();
        this.setmainPageVis();
    }
    /*Sets loaderVis bool to the opposite of current*/
    setloaderVis() {
        const newVis = this.state.loaderVis == true ? false : true;
        this.setState({loaderVis:newVis});
    }
    /*Sets mainPageVis bool to the opposite of current*/
    setmainPageVis() {
        const newVis = this.state.mainPageVis == true ? false : true;
        this.setState({mainPageVis:newVis});
    }
    removeLoaderDiv() {
        this.setBothVis();
        this.setState({LoaderDiv:false});
    }
    render() {    

        return (
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
            <Container className="d-flex flex-column justify-content-center">
                 {/*The gif loads with a fade and then transitions into the still image. When image is clicked, color is returned and mainPage is displayed*/}
                    {/*Overlay classes are used to position the loader right on top of the ColourWheel component*/}
                {this.state.LoaderDiv ?  
                <div className="overlay" style={{marginTop:"-10.5%"}}>   
                    <div className="overlay-1"><Loader></Loader></div>
                    {/*This checks for the vis bool to display the colour wheel component which is set after a timed delay*/}
                        {this.state.loaderVis ? 
                            <div className="overlay-2 animated fadeIn delay2">
                                <button className="mybutton" onClick={this.removeLoaderDiv}>
                                    <ColourWheel callback={color=>this.setState({background:color})}></ColourWheel>
                                </button>
                            </div> : null}
                </div>
                :null}
            {/*FROM HERE IS THE MAIN PAGE*/}
                                {/*When the HUE logo is clicked, mainPageVis is set to true and the main page content is shown*/}
            {this.state.mainPageVis ? 
                <div className="page">
                    {/*This is the top left logo that takes the color of the user*/}
                    <Row>
                        <Col className="col-auto">
                            <div className="nav">
                                <div className="overlay">
                                    <div className="overlay-2">
                                        <p className="secondaryLogo" style={{color:this.state.background}}>HUE</p> 
                                    </div> 
                                    <div class="overlay-1">
                                        <p className="mainLogo" style={{color:this.state.background}}>HUE</p>  
                                    </div> 
                                </div>
                            </div>              
                        </Col>
                    </Row>
                    {/*This takes a JSON file and creates cards */}
                    <Row className="row-cols-1">
                        {data.map( data=> (
                            <Col xs={3} className="mb-5" key={`${data.id}`}>
                                <TeamCard data={data}></TeamCard>
                            </Col>
                        ))}
                        </Row> 
                </div>
              : null}
            </Container>
            </div>
        );
    }
}
export default Test;
