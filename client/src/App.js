import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./comps/NavBar";
import Footer from "./comps/layout/Footer";
class App extends Component {
  render() {
    return (
      <div className="bg">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
