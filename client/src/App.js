import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './comps/NavBar';
class App extends Component {
  render() {
    return (
      <div className="bg">
          <NavBar/>  
      </div>
    );
  }
}

export default App;
