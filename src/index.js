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
import FA20 from './Components/FA20/FA20';
import issue2_landing from './Components/FA20/issue2_landing';
import DesignCo from './Components/FA20/Clubs/DesignCo';
import ACM from './Components/FA20/Clubs/ACM';
import Architecture from './Components/FA20/Clubs/Architecture';
import DFA from './Components/FA20/Clubs/DFA';
import DFSD from './Components/FA20/Clubs/DFSD';
import TREND from './Components/FA20/Clubs/TREND';
import TritonRobosub from './Components/FA20/Clubs/TritonRobosub';
import TSE from './Components/FA20/Clubs/TSE';
import YPS from './Components/FA20/Clubs/YPS';

import About from './Components/About/About';
import Issues from './Components/Issues/Issues';
import Contact from './Components/Contact/Contact';
import NewLoading from './Components/NewLoading';
import Article1 from './Components/Article1/Article1';
import Home from './Components/Home/Home';
//------------Spring Issue Redirects-----------------//
import JFunes from './Components/Article1/JFunes/JFunes';
import LIbarra from './Components/Article1/LIbarra/LIbarra';
import SKato from './Components/Article1/SKato/SKato';
import SLee from './Components/Article1/SLee/SLee';
import JWolf from './Components/Article1/JWolf/JWolf';
import ATam from './Components/Article1/ATam/ATam';
import HLiner from './Components/Article1/HLiner/HLiner';
import RSinghal from './Components/Article1/RSinghal/RSinghal';
import ALee from './Components/Article1/ALee/ALee';
import ERichards from './Components/Article1/ERichards/ERichards';
import EOrta from './Components/Article1/EOrta/EOrta';
//--------End of Spring Issue Redirects--------------//
//----------Issue 2 Things-----------------//
import GroupInterview from './Components/GroupInterview/GroupInterview';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { StoreProvider } from './Components/Store';
import { Provider, connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import rootStore from './redux/stores';
import Navbar from './Components/Navbar/Navbar';
import Empowerment from './Components/Empowerment/Empowerment';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import App2 from './App2';
const AppComponent = ({ location }) => {
  //const location = useLocation();
  const currentKey = location.pathname.split('/')[1] || '/'
  return (
    <Switch>
      {/* Loading component with color picker */}
      <Route path="/">
        <Navbar />

        <Switch>
          {/* Index is landing page */}
          {/*<Route exact path="/" component={SP20} />*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/groupinterview" component={GroupInterview} />
          {/* Current blank page for articles */}
          <Route exact path="/article1" component={Article1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/issues" component={SP20} />
          <Route exact path="/issue2_landing" component={issue2_landing} />
          <TransitionGroup>
            <CSSTransition key={currentKey} classNames="fade" appear timeout={1000}>
              <Switch location={location}>
                <Route exact path="/issue2" component={FA20} />
                <Route exact path="/empowerment" component={Empowerment} />
                <Route exact path="/groupinterview" component={GroupInterview} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Route exact path="/issue2/design-co" component={DesignCo} />
          <Route exact path="/issue2/triton-software-engineering" component={TSE} />
          <Route exact path="/issue2/design-for-america" component={DFA} />
          <Route exact path="/issue2/architecture@ucsd" component={Architecture} />
          <Route exact path="/issue2/trend-magazine" component={TREND} />
          <Route exact path="/issue2/acm-design" component={ACM} />
          <Route exact path="/issue2/design-for-san-diego" component={DFSD} />
          <Route exact path="/issue2/triton-robosub" component={TritonRobosub} />
          <Route exact path="/issue2/young-planners-society" component={YPS} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/JFunes" component={JFunes} />
          <Route exact path="/LIbarra" component={LIbarra} />
          <Route exact path="/SKato" component={SKato} />
          <Route exact path="/SLee" component={SLee} />
          <Route exact path="/JWolf" component={JWolf} />
          <Route exact path="/ATam" component={ATam} />
          <Route exact path="/HLiner" component={HLiner} />
          <Route exact path="/RSinghal" component={RSinghal} />
          <Route exact path="/ALee" component={ALee} />
          <Route exact path="/ERichards" component={ERichards} />
          <Route exact path="/EOrta" component={EOrta} />
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
        <App2 />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);