import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import rootStore from './redux/stores';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);