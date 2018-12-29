import React, { Component } from "react";
import "./App.css";
import NavBar from "./comps/NavBar";
import Footer from "./comps/layout/Footer";
import Body from "./comps/layout/Body";
class App extends Component {
  render() {
    return (
      <div className="bg">
        <NavBar />
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
