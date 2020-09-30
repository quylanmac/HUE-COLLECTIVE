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
import FA20 from './Components/FA20/FA20'
import About from './Components/About/About';
import Issues from './Components/Issues/Issues';
import Contact from './Components/Contact/Contact';
import NewLoading from './Components/NewLoading';
import Article1 from './Components/Article1/Article1';

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
      {/* Loading component with color picker */}
      <Route path="/">
      <Navbar/>

        <Switch>
          {/* Index is landing page */}
          <Route exact path="/" component={SP20} />
          
          {/* Current blank page for articles */}
          <Route exact path="/article1" component={Article1}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/issues" component={SP20}/>
          <Route exact path="/issue2" component={FA20}/>
          <Route exact path="/contact" component={Contact}/>

          <Route exact path="/JFunes" component={JFunes}/>
          <Route exact path="/LIbarra" component={LIbarra}/>
          <Route exact path="/SKato" component={SKato}/>
          <Route exact path="/SLee" component={SLee}/>
          <Route exact path="/JWolf" component={JWolf}/>
          <Route exact path="/ATam" component={ATam}/>
          <Route exact path="/HLiner" component={HLiner}/>
          <Route exact path="/RSinghal" component={RSinghal}/>
          <Route exact path="/ALee" component={ALee}/>
          <Route exact path="/ERichards" component={ERichards}/>
          <Route exact path="/EOrta" component={EOrta}/>
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