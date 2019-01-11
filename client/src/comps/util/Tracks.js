import React, { Component } from 'react'
import {ListGroupItem, ListGroup} from 'react-bootstrap';
import Cardz from '../util/Cardz';
 class Tracks extends Component {
  render() {
    return (
      <div>
          <ListGroup>
          {[0, 1, 2].map(item => (
            <ListGroupItem> 
                <Cardz title = "damn" artist = "fuck"/>
            </ListGroupItem>
           ))}
         </ListGroup>
      </div>
    )
  }
}
export default Tracks;


