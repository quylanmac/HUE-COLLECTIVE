import React, { Component } from 'react'
import { Modal, Col, Row, Button } from 'react-bootstrap'

import logo from './img/logo.png'
import data from './data.json';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };

    this.modals = [
      {
        buttonText: 'You are here!',
        xsOffset: 1,
        reactId: 'here',
        image: logo,
        imageAltText: 'working on a computer at home with cat',
        imageWidth: '250px',
        modalText: 'Tired of toy projects, tutorials and online courses?'
      },
      {
        buttonText: 'Scrums',
        xsOffset: 0,
        mdPull: 2,
        reactId: 'scrums',
        image: logo,
        imageAltText: 'team sitting round a table with kanban board in background',
        imageWidth: '350px',
        modalText: 'Meet others and plan your work in online hangouts.'
      },
      {
        buttonText: 'Real Projects',
        xsOffset: 3,
        reactId: 'projects',
        image: logo,
        imageAltText: 'shaking hands with business client across desk',
        imageWidth: '320px',
        modalText: 'Satisfy real charity clients around the world.'
      },
      {
        buttonText: 'Sprints',
        xsOffset: 7,
        reactId: 'sprints',
        image: logo,
        imageAltText: 'two people running',
        imageWidth: '320px',
        modalText: 'Commit to a week long sprint to accelerate your learning.'
      },
      {
        buttonText: 'Jobs',
        xsOffset: 5,
        reactId: 'jobs',
        image: logo,
        imageAltText: 'person holding briefcase looking towards city',
        imageWidth: '300px',
        modalText: 'Get paid for in-house projects or go on to great things in the wider world.'
       }
    ]
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
        <Row key={data.id}>
        <Col >
          <Button bsStyle="primary" bsSize="large" block onClick={() => this.handleShow(data.id)}>
            <h1>{data.name}</h1>
          </Button>
          <Modal
            show={this.state.show === data.id} onHide={this.handleClose}
          >
            <Modal.Header closeButton closeLabel="close window">
            </Modal.Header>
            <Modal.Body>
        
              <p className='landing-page-markers you-are-here'>{data.major}</p>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
      )
    });
  }

  render() {
    return (
      <div className="App">
          {this.renderModals()}
 
      </div >
    );
  }
}

export default App;