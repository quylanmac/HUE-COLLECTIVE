import React from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import '../App.css';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
import '../animation.css';
import data from '../data.json';
export class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state={
            background:"white",
            loaderVis:false, //should be false
            mainPageVis: false,
            LoaderDiv: true,
            show: null
        };
        this.interval=null;
        this.setloaderVis = this.setloaderVis.bind(this);
        this.setmainPageVis = this.setmainPageVis.bind(this);
        this.setBothVis = this.setBothVis.bind(this);
        this.removeLoaderDiv = this.removeLoaderDiv.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
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

    
  handleClose() {
    this.setState({show: null});
  }

  handleShow(id) {
    this.setState({show: id});
  }
    renderModals() {
        return data.map(data => {
          return (
              <div>
            <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow(data.id)}>
            <h1>{data.name}</h1>
          </Button>
              <Modal
              dialogClassName="modal-90w"
                show={this.state.show === data.id} onHide={this.handleClose} 
              > 
             
                <Card className="myCard">
                    
                <div className="TOPCARD mx-auto" style={{backgroundColor:data.color1}}>

                    <Row>
                        <Col className="mx-auto">
                            <Card.Title className="cardName">{data.name}</Card.Title>
                        </Col>
                    </Row>
                            {/*<p className="sidebars" style={{transform:"rotate(-90deg)", textAlign:"center"}}>{data.role}</p>*/}

                    <Row>

                        <Col className="col-xs-6 col-md-3 d-flex justify-content-center align-items-center">
                            <h2 className="text-align sidebar1">{data.role}</h2>
                        </Col>

                        <Col className="col-xs-12 col-md-6">
                            <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}.png`)}/>
                        </Col>

                        <Col className="col-xs-6 col-md-3 d-flex justify-content-center align-items-center">
                            <p className="text-align sidebar2">{data.major}</p>
                        </Col>

                    </Row>
                           
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color1}</p>
                        </Col>
                    </Row>
            </div>
                        
            <div className="MIDCARD" style={{backgroundColor:data.color2}}>
                
                       <Row>
                           <Col>
                        <Card.Subtitle className="secondCard">
                            <div style={{marginTop:"1.5rem", marginLeft:"1.5rem", marginRight:"1.5rem"}}>
                                <p className="memberBio">{data.bio}</p>
                            </div>
                        </Card.Subtitle>
                        </Col>

                        </Row>

                        <Row>
                        <Col className="mt-auto">
                                <p className="color" style={{textAlign:"right"}}>{data.color2}</p>
                            </Col>
                        </Row>
            </div>

            <div className="BOTCARD" style={{backgroundColor:data.color3}}>
                <Card.Subtitle>
                        <Row>
                            <Col>
                            <div style={{ marginLeft:"30px", marginRight:"30px", paddingTop:"5%"}}>
                                <img src={require(`../img/linkedIN.png`)} ></img>
                                <img src={require(`../img/instagram.png`)} style={{ paddingLeft:"1.5rem"}}></img>
                                <img src={require(`../img/email.png`)} style={{paddingLeft:"1.5rem"}}></img>
                            </div>
                            </Col>
                        </Row>
                        </Card.Subtitle>

                <Row>
                    <Col className="mt-auto">
                        <p className="color" style={{textAlign:"right"}}>{data.color3}</p>
                    </Col>
                </Row>                       
            </div>   

                </Card>
              
              </Modal>
              </div>
          )
        });
      }
    render() {    
        return (
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
            <Container className="d-flex flex-column justify-content-center container-fluid">
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
                    <Row>
                        {data.map( data=> (
                            
                            <Col xs={4} sm={6} md={3} className="mb-5" key={`${data.id}`}>
                                <Card className="myCard h-100 shadow-sm bg-white" style={{margin:"auto"}} onClick={() => this.handleShow(data.id)}>
                                    <Card.Img className = "myCard" src={require(`../Members/Picture/${data.image}.png`)}/>
                                    <Card.Body className="d-flex flex-column">
                                    <div className="d-flex mb-2 justify-content-between">
                                        <Card.Title className="mb-0 cardFont">{data.name}</Card.Title>
                                    </div>
                                        <Card.Text className="cardFont2" style={{marginTop:"-5px"}}>{data.role}</Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                            
                        ))}
                    </Row>
                </div>
              : null}
              {this.renderModals()}
            </Container>
            </div>
        );
    }
}
export default Test;
