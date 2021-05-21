import React, { Component, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/actions';
import './issue3_landing.css';
import record_player from '../../../src/img/Issue3/record_player.png';
import record_player_closed from '../../../src/img/Issue3/record_player_closed.png';
import smallArticle1 from '../../../src/img/Issue3/equitableCover.png';
import smallArticle2 from '../../../src/img/Issue3/designingCover.png';
import smallArticle3 from '../../../src/img/Issue3/ethicalCover.png';
import smallArticle4 from '../../../src/img/Issue3/interviewCover.png';
import equitableRecord from '../../../src/img/Issue3/equitableRecord.png';
import ethicalRecord from '../../../src/img/Issue3/ethicalRecord.png';
import designRecord from '../../../src/img/Issue3/designRecord.png';
import interviewRecord from '../../../src/img/Issue3/interviewRecord.png';


class issue3_landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openRecord: false,
            mobile: false,
        }
        this.handleRecord = this.handleRecord.bind(this);
        this.mobileCheck = this.mobileCheck.bind(this);
    }
    handleRecord() {
        this.setState({openRecord: !this.state.openRecord});
    }
    componentDidMount() {
        document.body.className = "darktheme";
        this.props.setTheme('black');
        window.scrollTo(0, 0);
        this.mobileCheck();
    }
    componentWillUnmount() {
        document.body.className = "";
        this.props.setTheme('black');
    }
    handleTheme(theme) {
        this.props.setTheme(theme);
    }
    mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            this.setState({mobile: check});
            console.log("fodfodfo");
            console.log(this.state.mobile);
          };

    render() {
        return (
            <Container fluid className="art3Landing">
            <div className="issue3_background"/>
                <Row>
                    <Col md={4} xs={12} className="issueBox">
                        <div className="issue3_landing">
                            <h7> ISSUE 3 </h7>
                            <h1> WITHOUT EXCEPTION </h1>
                            <p>How can we design for those who are all too often left behind? As designers, we all want to do good in the world, but in order to do so, we must look far beyond our own lives. Join HUE in our third issue as we dive into ethical design, exploring the amazing things that can happen through advocacy and community engagement.</p>
                        </div>
                        {this.state.openRecord && !this.state.mobile && <img src={record_player} className="record_player" onClick={this.handleRecord}/>}
                        {!this.state.openRecord && !this.state.mobile && <img src={record_player_closed} className="record_player" onClick={this.handleRecord}/>}
                    </Col>

                    {this.state.mobile && 

                    <>

                    {!this.state.openRecord && 
                    <>
                    <p className="mobileChoose">PRESS TO CHOOSE</p>
                    <img src={record_player} className="record_player" onClick={this.handleRecord}/>
                    </>
                    }
                    {this.state.openRecord && 
                    <Col xs={12}>
                        <Carousel interval={null} className="landingCarousel">
                            <Carousel.Item>
                                <h1>Equitable Design</h1>
                                <Link to={{pathname: "/EquitableDesign"}}><img src={equitableRecord} className="issue3_landing1"/></Link>
                            </Carousel.Item>    
                            <Carousel.Item>
                                <h1>Ethical Design For Tech</h1>
                                <Link to={{pathname: "/EthicalDesign"}}><img src={ethicalRecord} className="issue3_landing3"/></Link>
                            </Carousel.Item> 
                            <Carousel.Item>
                                <h1>Designing for Community Involvement</h1>
                                <Link to={{pathname: "/CommunityDesign"}}><img src={designRecord} className="issue3_landing2"/></Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <h1>Interview With Amanda</h1>
                                <Link to={{pathname: "/interview-with-amanda"}}><img src={interviewRecord} className="issue3_landing4"/></Link>
                            </Carousel.Item> 
                        </Carousel>    
                    </Col> 
                    }
                    </>
                    }

                    <Col md={4} xs={12}>
                        {this.state.openRecord && !this.state.mobile && 
                        <>
                    <Link to={{pathname: "/EquitableDesign"}}><img src={smallArticle1} className="issue3_landing1"/></Link>
                    <Link to={{pathname: "/EthicalDesign"}}><img src={smallArticle3} className="issue3_landing2"/></Link>
                        </>
                        }
                    </Col> 

                    <Col md={4} xs={12}>
                        {this.state.openRecord && !this.state.mobile &&
                        <>
                        <Link to={{pathname: "/CommunityDesign"}}><img src={smallArticle2} className="issue3_landing3"/></Link>

                        <Link to={{pathname: "/interview-with-amanda"}}><img src={smallArticle4} className="issue3_landing4"/></Link>
                        </>
                        }                     
                    </Col>
                </Row>
            </Container>
        )

    }
}
export default connect(null, { setTheme })(issue3_landing);