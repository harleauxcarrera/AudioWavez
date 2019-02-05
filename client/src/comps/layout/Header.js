import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import '../../App.css';







class Header extends Component {
  render() {
    return (
      <div className = "headerz">
            <h1>AudioWavez</h1>
            <h4>Check out some of the beats I have on this website. Click the mixes to see the tracks in each mix.
                Notice the change once a track inside the mix is clicked. 
                Make sure to check the song info to see if it is available.
            </h4>
            <Button onClick = {this.onClick} variant = "success">Show me the $$$</Button>
      </div>
    )
  }
}
export default Header;