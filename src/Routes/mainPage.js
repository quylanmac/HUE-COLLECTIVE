/* NOT USING THESE PAGES BECAUSE IT BROKE??? */
import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
export class mainPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            background:"121212",
        };
        this.location={
            state:"121212",
        }
    }

    componentDidMount() {
        const data = this.props.location.state.color;
        this.setState({background:data});
        console.log(this.state.background);
    }
    render() {
        return (

            <p>hello</p>
          
        )
    }
};
export default mainPage;