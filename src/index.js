import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {CSSTransition} from 'react-transition-group';
import { Container, Button, Alert } from 'react-bootstrap';
import './App.css';
import './animation.css';
import {Loader} from './Components/Loader';
import {test} from './img/huecropped2.png';
function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div className="animated fadeInDown">
        <Loader></Loader>
        </div>
    
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
