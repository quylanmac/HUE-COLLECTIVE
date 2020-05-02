import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from '../img/ezgif.com-crop.gif';
import '../animation.css'
export class Loader extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
         renderChild:true,     //should be set to true
          visibility:"initial",
        };
        this.interval=null;
    }

    componentDidMount() {
        this.interval=setTimeout(()=>this.setState({renderChild:false}),6000);  //should be set to false
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        let load;
        if (this.state.renderChild==true) {
            load=<img style={{maxWidth:"100%"}} src={loader} alt={"Loading..."}></img>;
        }
        else {
            load=null;
        }
        return(
            <div className="animated fadeIn delay"> 
                {load}
            </div>
        )
    }
}
