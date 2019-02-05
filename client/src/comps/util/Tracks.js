import React, { Component } from "react";
import List from "@material-ui/core/List";
import Cardz from "./Cardz";
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getTracks} from '../../actions/trackUpAction';
import '../../App.css';
const style = {
  width: "100%",
  position: "relative",
  overflow: "auto",
  maxHeight: 420
};

class Tracks extends Component {
  componentDidMount(){
    this.props.getTracks();
  }
  render() {
      const {tracks, loading} = this.props.tracks;
    let trackItems;


    if(tracks == null || loading){
      trackItems = <h4> spinner goes here</h4>
    }else{
      if(tracks.length > 0){
       trackItems =  <h4>Found tracks ...</h4>
      }else{
        trackItems =   <h4>No mixed found...</h4>
      }
    }

    return (
      <div className = "traxBody">
        <List style={style}>
            <li>{trackItems}</li>
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

Tracks.PropTypes = {
  getTracks: PropTypes.func.isRequired, 
  track: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  console.log("state");
  console.log(state);
  return{ tracks: state.trax}
}

export default connect(mapStateToProps, {getTracks}) (Tracks);
