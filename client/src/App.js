import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import Footer from "./comps/layout/Footer";
import Body from "./comps/layout/Body";
import Header from './comps/layout/Header';
import TrackUp from './comps/uploads/TrackUp';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="bg">
      <Route exact path="/upload/track" component={TrackUp}/>
      <Route exact path="/" component = {Header}/> 
      <Route exact path="/body" component={Body} />
        
        
      </div>
      </Router>
    );
  }
}

export default App;
