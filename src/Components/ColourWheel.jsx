import React from "react";
import logo from '../img/logo.png';
import '../App.css';
import cursor2 from '../img/cursor.svg';
export class ColourWheel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      renderChild:false
    };

    this.options = {
      width: 800,
      height:569,
      img: this.props.img 
    };
    this.interval=null;
  }

  componentDidMount() {
    this.interval=setTimeout(()=>this.setState({renderChild:true}),10000);
    this.addImageInCanvas();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
}
  render() {
    var visibilityState=this.state.renderChild ? "visible" : "visible";
    return (
      <>
      <canvas
       // onMouseDown={() => this.setState({ dragging: true })}
        onMouseMove={e => this.selectColor(e)}
        //onMouseUp={() => this.setState({ dragging: false })}
        className="custom-cur"
        style={{visibility: visibilityState, cursor: `url(${cursor2}),auto;`}}
        ref="canvas"
        width={this.options.width}
        height={this.options.height}
      />
      <img ref="image" src={logo} className="hidden" style={{visibility:"hidden", width:"0", height:"0"}}/>
    </>
    );
  }

  addImageInCanvas() {
    let { canvas } = this.refs;
    const ctx = canvas.getContext("2d");
    const img =this.refs.image;
    img.crossOrigin="anonymous";
    img.onload = function() {
     ctx.drawImage(img, 0, 0);
    }
  }

  selectColor(e) {
      const ctx = this.refs.canvas.getContext("2d");
  //  if (!this.state.dragging) return;
    let { offsetX, offsetY } = e.nativeEvent;
    let { data } = ctx.getImageData(offsetX, offsetY, 1, 1);
    let color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    return this.props.callback(color);
  }
}