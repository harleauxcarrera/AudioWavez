import React, { Component } from "react";
import List from "@material-ui/core/List";
import Cardz from "./Cardz";
import '../../App.css';
const style = {
  width: "100%",
  position: "relative",
  overflow: "auto",
  maxHeight: 420
};

class Tracks extends Component {
  render() {
    return (
      <div className = "traxBody">
        <List style={style}>
          
            <li>
              <Cardz />
            </li>
            <li>
              <Cardz />
            </li>
            <li>
              <Cardz />
            </li>
            <li>
              <Cardz />
            </li>
            
         
        </List>
      </div>
    );
  }
}

export default Tracks;
