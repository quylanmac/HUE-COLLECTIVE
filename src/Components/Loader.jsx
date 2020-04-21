import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from '../img/loader.gif';

export class Loader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         renderChild:true,
          visibility:"initial",
        };
        this.interval=null;
    }

    componentDidMount() {
        this.interval=setTimeout(()=>this.setState({renderChild:false}),10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        let load;
        if (this.state.renderChild==true) {
            load=<img src={loader} alt={"Loading..."}></img>;
        }
        else {
            load=null;
        }
        return(
            <div> 
                {load}
            </div>
        )
    }
}
