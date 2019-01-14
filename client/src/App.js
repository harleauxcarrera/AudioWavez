import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
// import Footer from "./comps/layout/Footer";
import Body from "./comps/layout/Body";
import Header from './comps/layout/Header';
import TrackUp from './comps/uploads/TrackUp';
import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
        <div className="bg">
          <Route exact path="/upload/track" component={TrackUp}/>
          <Route exact path="/" component = {Header}/> 
          <Route exact path="/landing" component={Body} />
            
            
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
