import React, { Component } from 'react'
import {ListGroupItem, ListGroup, Button} from 'react-bootstrap'
 class Mixes extends Component {
  render() {
    return (
      <div>
          <ListGroup>
          {[0, 1, 2].map(item => (
            <ListGroupItem> This</ListGroupItem>
           ))}
         </ListGroup>
      </div>
    )
  }
}
export default Mixes;


