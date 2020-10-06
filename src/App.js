import React from 'react';
import './App.css';
import { Test } from './Components/Test';
import { SP20 } from './Components/SP20';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { NewLoading } from './Components/NewLoading';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {StoreProvider} from './Components/Store';
import {Provider, Connect} from 'react-redux';
import {Dispatch} from 'react-redux';

const AppComponent = () => {
  return (
    <Switch>
    
    </Switch>
  )
}
const App = connect()(AppComponent);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);