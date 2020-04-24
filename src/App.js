import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Routes/Home";
import mainPage from "./Routes/mainPage";
import {Test} from './Components/Test';

function App() {
  return (
   <Test></Test>
  );
}

export default App;
