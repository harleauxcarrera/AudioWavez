import React, { Component } from 'react'
import {List} from '@material-ui/core'
import {ListGroupItem} from 'react-bootstrap'

const style = {
  width: "100%",
  position: "relative",
  overflow: "auto",
};


 class Mixes extends Component {
  render() {
    return (
      <div>
          <List style={style}>
          {[0, 1, 2,3,4,5,6].map(item => (
            <li key="this"  > This</li>
           ))}
         </List>
      </div>
    )    
  }
}
export default Mixes;


