import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from '../img/loader_transparent2.gif';
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
        this.interval=setTimeout(()=>this.setState({renderChild:true}),8500);  //should be set to false
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        let load;
        if (this.state.renderChild==true) {
            load=<img src={loader} alt={"Loading..."} style={{width:"100%"}}></img>;
        }
        else {
            load=null;
        }
        return(
            <div className=""> 
                {load}
            </div>
        )
    }
}
