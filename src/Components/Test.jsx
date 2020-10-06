import React, {useState} from 'react';
import {Container, Row, Col, Card, Button, Modal, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import '../App.css';
import {ColourWheel} from './ColourWheel';
import {Loader} from './Loader';
import '../animation.css';
import data from '../data.json';
import popupData from '../popup.json';
import ReactPlayer from 'react-player';
import promoVid from '../img/promo.mp4';
import promoVidThumbnail from '../img/thumbnail.png';
import { Link, animateScroll as scroll } from "react-scroll";
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
            isOpen: false,
            navType: true,
            opacity: 0.3,
            hovered: null,
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
        this.handleNavOpen = this.handleNavOpen.bind(this);
        this.handleNavClose = this.handleNavClose.bind(this);
        this.setOpacity = this.setOpacity.bind(this);
        this.handleTransform = this.handleTransform.bind(this);
        this.handleNonTransform = this.handleNonTransform.bind(this);
    }

    setOpacity() {
        this.setState({opacity: 1});
    }
    handleNavOpen = () => {
        this.setState({ isOpen: true });
        this.setState({navType: false})
      }
    
      handleNavClose = () => {
         this.setState({ isOpen: false });
         this.setState({navType:true});
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
    handleTransform(id) {
        this.setState({hovered: id});
    }
    handleNonTransform() {
        this.setState({hovered: null});
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
          this.setState({show:1});
      }
  }
  iteratePrevCard() {
    const show = this.state.show;
      if (show!=null && show>1) {
          this.setState({show:show-1});
      }
      else if (show==1) {
          this.setState({show:17});
      }
  }
  toggle() {
      this.setState(prevState => ({
          isOpen: !prevState.isOpen}
     ));
  }

    /**Renders the navigation bar */
    renderNav() {
            return (
              <Navbar className="justify-content-end navLinks fixNav">
                <NavDropdown
                /*Checks if the user is hovering the navbar and will expand if so*/
                  title={<div>{this.state.navType ? <img style={{maxWidth:"50px"}} src={require(`../img/Navigator.png`)}></img> : <img style={{maxWidth:"100px"}} src={require(`../img/Navigator2.png`)}></img>} </div>}
                  show={this.state.isOpen}
                  onMouseEnter={this.handleNavOpen}
                  onMouseLeave={this.handleNavClose}
                  onClick={this.handleNavOpen}
                
                >
                    <Link onClick={this.handleNavClose} className="links" to="video" spy={true} smooth={true} duration={500}>video</Link>
                    <Link onClick={this.handleNavClose} className="links" to="about" spy={true} smooth={true} duration={700}>about HUE</Link>
                    <Link onClick={this.handleNavClose} className="links" to="team" spy={true} smooth={true} duration={750}>meet the team</Link>
                    <Link onClick={this.handleNavClose} className="links" to="contact" spy={true} smooth={true} duration={1500}>contact</Link>

                </NavDropdown>
              </Navbar>
            );
    }
    /**Creates the popup cards using the data JSON file */
    renderModals() {
        return popupData.map(data => {
          return (
              <div>
              <Modal
              dialogClassName="modal-90w"
              backdropOpacity={1}
                show={this.state.show === data.id} onHide={this.handleClose} 
                className="my-auto h-100"
              > 
              <Row style={{maxHeight:"100%"}}>
                {/*Arrow to iterate cards*/} 
                <Col xs={1} md={1} style={{textAlign:"left"}} className="mx-auto my-auto centerBlock" >
                <img onClick={this.iteratePrevCard} src={require(`../img/arrow2.png`)} className="mx-auto d-block img-fluid mouseDoodle" ></img>
                </Col>

                <Col md={10} className="my-auto" style={{maxHeight:"100%"}}>

                <Card className="myCard" style={{height:"820px", backgroundColor:"transparent"}}>

                 {/*Top of the card*/}   
                <div className="TOPCARD mx-auto" style={{backgroundColor:data.color1}}>
                    {/*Member Name*/}
                    <Row className="justify-content-center align-items-center">
                        <Col xs={12} md={12} className="mx-auto">
                            <Card.Title className="cardName">{data.name}</Card.Title>
                        </Col>
                    </Row>

                    {/*Member role, picture, major*/}
                    <Row>

                        <Col xs={2} md={1} className="d-flex justify-content-center align-items-center marginLeft">
                            <p className="text-align sidebar1">{data.role}</p>
                        </Col>

                        <Col xs={8} md={6} className="mx-auto my-auto"> 
                            {/*Checks which sketch drawing to show*/}
                            {this.state.showDoodle == 0 ? <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}.png`)}/> : (this.state.showDoodle == 1 ? <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}2.png`)}/> : <Card.Img className="img-fluid d-block" src={require(`../Members/Sketch/${data.image}3.png`)}/>)}

                        </Col>

                        <Col xs={2} md={1} className="d-flex justify-content-center align-items-center marginRight">
                            <p className="text-align sidebar2">{data.major}</p> 
                        </Col> 

                    </Row>

                    {/*Color 1*/}       
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color1}</p>
                        </Col>
                    </Row>
                </div>
                
                {/*Mid of the card*/}
                <div className="MIDCARD" style={{backgroundColor:data.color2}}>
                    {/*Bio and secondary color*/}
                    <Row>
                        <Col>
                        <Card.Subtitle className="memberBio">
                            <div style={{marginTop:"5%", marginLeft:"2.5em", marginRight:"2.5em"}}>
                            {/*Checks if user mouses over bolded words. Will render doodles if so*/}
                              <p>{data.bio}
                              <a onMouseOver={this.handleShowDoodle} onMouseLeave={this.handleCloseDoodle} className="mouseDoodle">{data.bio2}</a>
                              {data.bio3}
                              <a onMouseOver={this.handleShowDoodle2} onMouseLeave={this.handleCloseDoodle} className="mouseDoodle">{data.bio4}</a>
                              {data.bio5}</p>
                            </div>
                        </Card.Subtitle>
                        </Col>
                    </Row>
                    {/*Secondary color*/}
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color2}</p>
                        </Col>
                    </Row>
                </div>
                
                {/*Bottom of card*/}
                <div className="BOTCARD" style={{backgroundColor:data.color3}}>
                        {/*Social media*/}
                        <Row>
                            <Col>
                            <Card.Subtitle className="memberBio">
                                
                                <div style={{marginTop:"2em", marginLeft:"2.5em", marginRight:"2.5em"}}>
                                {data.linkedin ?
                                    <a href={data.linkedin} target="_blank" className="secondCardMedia mediaPad">
                                        <img src={require(`../img/linkedIN.png`)} className="smallLogo"></img>
                                    </a> : null }
                                    <a href={data.instagram} target="_blank"  className="secondCardMedia ">
                                        <img src={require(`../img/instagram.png`)}  className="smallLogo"></img>
                                    </a>
                                </div>
                                </Card.Subtitle>
                            </Col>
                        </Row>
                    {/*Third color*/}
                    <Row>
                        <Col className="mt-auto">
                            <p className="color" style={{textAlign:"right"}}>{data.color3}</p>
                        </Col>
                    </Row>                       
                </div>   

                </Card>
              </Col>
              {/*Arrow to iterate cards*/}
              <Col xs={1} md={1} style={{textAlign:"left"}} className="mx-auto my-auto centerBlock" >
                    <img onClick={this.iterateNextCard} src={require(`../img/arrow1.png`)} className="mx-auto d-block img-fluid mouseDoodle" ></img>
                </Col>
              </Row>
              </Modal>
              </div>
          )
        });
      }
    render() {    
        return (
            /*This div spans entire page*/
            <div style={{backgroundColor:"#121212",minHeight:"100vh"}}>
            <Container className="d-flex flex-column justify-content-center align-self-center container-fluid my-auto">
                 {/*The gif loads with a fade and then transitions into the still image. When image is clicked, color is returned and mainPage is displayed*/}
                    {/*Overlay classes are used to position the loader right on top of the ColourWheel component so it fades into a still image*/}
                {this.state.LoaderDiv ?
                <div style={{minHeight:"100vh"}} className="d-flex justify-content-center"> 

                <div className="d-flex justify-content-center">
                    <div className="overlay">   
                        <div className="overlay-1 justify-content-center align-self-center" style={{display:"grid"}}>
                            <Col className="my-auto">
                                <Loader></Loader>
                            </Col>
                        </div>
                    {/*This checks for the vis bool to display the colour wheel component which is set after a timed delay*/}
                    {this.state.loaderVis ? 
                            <div className="overlay-2 animated fadeIn delay2 justify-content-center align-self-center" style={{display:"grid"}}>
   
                               <Col className="my-auto">
                                <button className="mybutton" onClick={this.removeLoaderDiv}>
                                    <ColourWheel callback={color=>this.setState({background:color})}></ColourWheel>
                                </button></Col>
                            </div> : null}
                    </div>
                </div>
                </div>
                :null}
            {/*FROM HERE IS THE MAIN PAGE*/}
                                {/*When the HUE logo is clicked, mainPageVis is set to true and the main page content is shown*/}
            {this.state.mainPageVis ? 
                <div className="page">
                    {/*This is the top left logo that takes the color of the user*/}
                    {/*This function call checks the returned color. If it is black, returns white instead*/}
                    {this.checkColor()}
                    <Row style={{marginTop:"3rem"}}>
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

                        {/*Nav bar*/}
                        <Col>
                        {this.renderNav()}
                        </Col>
                        
                    </Row>

                    {/*Promo Video*/}
                    <Row style={{paddingTop:"4rem", paddingBottom:"4rem"}}>
                        <Col id="video">
                            <div className="wrapper">
                        <ReactPlayer className="myPlayer" width="100%" height="100%" url={require(`../img/promo.mp4`)} playIcon={<img src={require(`../img/playIcon.png`)}></img>} controls={true} style={{opacity:this.state.opacity}} onPlay={this.setOpacity} playing light={require(`../img/thumbnail.png`)} ></ReactPlayer>
                        </div>
                        </Col>
                    </Row>
                    {/*About Section*/}
                    <Row style={{paddingTop:"2rem"}} id="about">
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

                    {/*Social media*/}
                    <Row style={{paddingTop:"2rem", paddingBottom:"8rem"}}>
                        <Col className="mx-auto">
                        </Col>
                        <Col className="mx-auto justify-content-center align-items-center d-flex">
                            <a href="https://www.facebook.com/HUEcollectives/" target="_blank">
                                <img src={require(`../img/facebookwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
                            </a>
                            <a href="https://www.instagram.com/hue.collective/" target="_blank">
                                <img src={require(`../img/instagramwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
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

                    {/*Meet the Team*/}
                    <Row id="team">
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
                                <Card className="firstCard myCard h-100 shadow-sm bg-white mobileCard" 
                                style={{margin:"auto"}} 
                                onClick={() => this.handleShow(data.id)} 
                                onMouseEnter={()=>this.handleTransform(data.id)} 
                                onMouseLeave={()=>this.handleNonTransform()} 
                                style={{transform: `${this.state.hovered===data.id ? 'scale(1.1,1.1)' : 'none'}`, transition:"0.25s ease-in-out"}}>
                                    
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
                    
                    {/*Secondary social media*/}
                    <Row>
                        <Col>
                        <p className="huearewepre">get in touch</p>
                        </Col>
                    </Row>

                    <Row id="contact">
                    <Col className="mx-auto justify-content-left align-items-center d-flex" style={{marginBottom:"4rem"}}>
                            <a href="https://www.facebook.com/HUEcollectives/" target="_blank">
                                <img src={require(`../img/facebookwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
                            </a>
                            <a href="https://www.instagram.com/hue.collective/" target="_blank">
                                <img src={require(`../img/instagramwhite.png`)} style={{paddingRight:"2.5rem"}}></img>
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
