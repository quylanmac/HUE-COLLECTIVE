/* import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import './App.css';
import './animation.css';
import App2 from './App2';
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
 */
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SP20 from './Components/SP20/SP20';
import About from './Components/About/About';
import Issues from './Components/Issues/Issues';
import Contact from './Components/Contact/Contact';
import NewLoading from './Components/NewLoading';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './Components/Store';
import { Provider, connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import rootStore from './redux/stores';
import Navbar from './Components/Navbar/Navbar';
const AppComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={NewLoading} />
      <Route path="/">
      <Navbar/>

        <Switch>
          <Route exact path="/index" component={SP20} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/issues" component={Issues}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Route>
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