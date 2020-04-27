import React from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import '../App.css';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
import '../animation.css';
import data from '../data.json';
const black = '#000000';

export class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state={
            background:"white",
            loaderVis:false, //should be false
            mainPageVis: false,
            LoaderDiv: true,
            show: null,
            showDoodle: 0,
        };
        this.interval=null;
        this.setloaderVis = this.setloaderVis.bind(this);
        this.setmainPageVis = this.setmainPageVis.bind(this);
        this.setBothVis = this.setBothVis.bind(this);
        this.removeLoaderDiv = this.removeLoaderDiv.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.checkColor = this.checkColor.bind(this);
        this.handleCloseDoodle = this.handleCloseDoodle.bind(this);
        this.handleShowDoodle = this.handleShowDoodle.bind(this);
        this.handleShowDoodle2 = this.handleShowDoodle2.bind(this);
        this.iterateNextCard = this.iterateNextCard.bind(this);
        this.iteratePrevCard = this.iteratePrevCard.bind(this);
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

    /*Close popup card*/ 
    handleClose() {
        this.setState({show: null});
    }
    /*Show corresponding popup card*/
    handleShow(id) {
        this.setState({show: id});
    }
    handleCloseDoodle() {
        this.setState({showDoodle:0});
    }
  handleShowDoodle() {
        this.setState({showDoodle:1});
    }
  handleShowDoodle2() {
        this.setState({showDoodle:2});
    }

  /* This is for mobile. Checks color and sets default to white */
  checkColor() {
        const test = "rgb(0, 0, 0)";
        if (test==this.state.background) {
            this.setState({background:"white"})
        }
  }

  /*Next 2 functions for arrow buttons to scroll through cards */
  iterateNextCard() {
      const show = this.state.show;
      if (show!=null && show<17) {
          this.setState({show:show+1});
      }
      else if (show==17) {
          this.setState({show:0});
      }
  }
  iteratePrevCard() {
    const show = this.state.show;
      if (show!=null && show>0) {
          this.setState({show:show-1});
      }
      else if (show==0) {
          this.setState({show:17});
      }
  }
    /**Creates the popup cards */
    renderModals() {
        return data.map(data => {
          return (
              <div>

              <Modal
              dialogClassName="modal-90w"
                show={this.state.show === data.id} onHide={this.handleClose} 
              > 
                <Card className="myCard">
                    
                <div className="TOPCARD mx-auto" style={{backgroundColor:data.color1}}>

                    <Row className="justify-content-center align-items-center">
                        <Col xs={2} md={3} style={{textAlign:"left"}} className="mx-auto centerBlock" >
                        <img onClick={this.iteratePrevCard} src={require(`../img/arrow2.png`)} className="mx-auto d-block img-fluid" ></img>
                        </Col>

                        <Col xs={8} md={6} className="mx-auto">
                            <Card.Title className="cardName">{data.name}</Card.Title>
                        </Col>

                        <Col xs={2} md={3} style={{textAlign:"right"}} className="mx-auto centerBlock">
                        <img onClick={this.iterateNextCard} src={require(`../img/arrow1.png`)} className="mx-auto d-block img-fluid" ></img>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={2} md={3} className="d-flex justify-content-center align-items-center">
                            <h2 className="text-align sidebar1">{data.role}</h2>
                        </Col>

                        <Col xs={8} md={6}>
                            {this.state.showDoodle == 0 ? <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}.png`)}/> : (this.state.showDoodle == 1 ? <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}2.png`)}/> : <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}3.png`)}/>)}

                        </Col>

                        <Col xs={2} md={3} className="d-flex justify-content-center align-items-center">
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

                              <p>{data.bio}<b onMouseOver={this.handleShowDoodle} onMouseLeave={this.handleCloseDoodle}>{data.bio2}</b>{data.bio3}<b onMouseOver={this.handleShowDoodle2} onMouseLeave={this.handleCloseDoodle}>{data.bio4}</b>{data.bio5}</p>
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
                                    <a href={data.linkedin} target="_blank">
                                        <img src={require(`../img/linkedIN.png`)} ></img>
                                    </a>
                                    <a href={data.instagram} target="_blank">
                                        <img src={require(`../img/instagram.png`)} style={{ paddingLeft:"1.5rem"}}></img>
                                    </a>
                                    <a href="" target="_blank">
                                        <img src={require(`../img/email.png`)} style={{paddingLeft:"1.5rem"}}></img>
                                    </a>
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
            /*This div spans entire page*/
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
            <Container className="d-flex flex-column justify-content-center container-fluid">
                 {/*The gif loads with a fade and then transitions into the still image. When image is clicked, color is returned and mainPage is displayed*/}
                    {/*Overlay classes are used to position the loader right on top of the ColourWheel component so it fades into a still image*/}
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
                    {/*This function call checks the returned color. If it is black, returns white instead*/}
                    {this.checkColor()}
                    <Row>
                        <Col className="col-auto">
                            <div className="nav">
                                <div className="overlay">
                                    <div className="overlay-2">
                                        <p href="/" className="secondaryLogo" style={{color:this.state.background}}>HUE</p> 
                                    </div> 
                                    <div class="overlay-1">
                                        <p href="/" className="mainLogo" style={{color:this.state.background}}>HUE</p>  
                                    </div> 
                                </div>
                            </div>              
                        </Col>
                    </Row>

                    <Row style={{paddingTop:"2rem"}}>
                        <Col>
                        <p className="huearewepre">HUE are we?</p>
                        </Col>
                    </Row>

                    <Row style={{paddingBottom:"4rem"}}>
                        <Col>
                        <p className="huearewe">Brought together by creative curiosity, we are a multidisciplinary group of UCSD students working to craft a platform that showcases different experiences and perspectives in design. 
                            HUE aims to use different mediums to express the ubiquity and ambiguity of design. We also value community and are always looking for exciting designers to feature in our digital zine.
                        </p>
                        </Col>
                    </Row>

                    <Row style={{paddingTop:"2rem", paddingBottom:"8rem"}}>
                        <Col className="mx-auto">
                        </Col>
                        <Col className="mx-auto justify-content-center align-items-center d-flex">
                            <a href="https://www.facebook.com/HUEcollectives/" target="_blank">
                                <img src={require(`../img/facebookwhite.png`)} style={{paddingRight:"1rem"}}></img>
                            </a>
                            <a href="https://www.instagram.com/hue.collective/" target="_blank">
                                <img src={require(`../img/instagramwhite.png`)} style={{paddingRight:"1rem"}}></img>
                            </a>
                            <a href="https://www.linkedin.com/company/huecollective/" target="_blank">
                                <img src={require(`../img/linkedINwhite.png`)}></img>
                            </a>
                        </Col>
                        <Col className="mx-auto">
                        </Col>
                    </Row>

                    <div style={{paddingBottom:"8rem"}}>
                    <hr className="linebreak"></hr>
                    </div>

                    <Row>
                        <Col>
                        <p className="huearewepre">meet the team</p>
                        </Col>
                    </Row>

                    <Row style={{paddingBottom:"8rem"}}>
                        <Col>
                        <p className="huearewe">Get to know our group of passionate and fun individuals a little more.</p>
                        </Col>
                    </Row>

                    {/*This takes a JSON file and creates the main cards */}
                    <Row>
                        {data.map( data=> (
                            <Col xs={4} sm={6} md={3} className="marginCard" key={`${data.id}`}>
                                <Card className="myCard h-100 shadow-sm bg-white mobileCard" style={{margin:"auto"}} onClick={() => this.handleShow(data.id)}>
                                    <Card.Img className = "myCard" src={require(`../Members/Picture/${data.image}.png`)}/>
                                    <Card.Body className="mobileCard2">
                                    <div className="mb-2 justify-content-between">
                                        <Card.Title className="mb-0 cardFont">{data.name}</Card.Title>
                                        <Card.Text className="cardFont2">{data.role}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>

                    <div style={{paddingTop:"8rem", paddingBottom:"8rem"}}>
                    <hr className="linebreak"></hr>
                    </div>

                    <Row>
                        <Col>
                        <p className="huearewepre">get in touch</p>
                        </Col>
                    </Row>

                    <Row>
                    <Col className="mx-auto justify-content-left align-items-center d-flex" style={{marginBottom:"4rem"}}>
                            <a href="https://www.facebook.com/HUEcollectives/" target="_blank">
                                <img src={require(`../img/facebookwhite.png`)} style={{paddingRight:"1rem"}}></img>
                            </a>
                            <a href="https://www.instagram.com/hue.collective/" target="_blank">
                                <img src={require(`../img/instagramwhite.png`)} style={{paddingRight:"1rem"}}></img>
                            </a>
                            <a href="https://www.linkedin.com/company/huecollective/" target="_blank">
                                <img src={require(`../img/linkedINwhite.png`)}></img>
                            </a>
                    </Col>
                    </Row>

                </div>
              : null}
              {/*This creates the popup for each card*/}
              {this.renderModals()}
            </Container>
            </div>
        );
    }
}
export default Test;
