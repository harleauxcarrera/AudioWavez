import React, { Component } from 'react'
import {ListGroupItem, ListGroup, Button} from 'react-bootstrap'

const style = {
  backgroundColor: 'red',
  borderRadius: '6px',
  textAlign: 'center',
  color: 'white',
  style: 'inline',
  paddingTop: '5px'
}
 class SongInfo extends Component {
  render() {
    return (
      <div>
          <ListGroup>
            <ListGroupItem>Title : <code>AstroWorld</code> </ListGroupItem>
            <ListGroupItem>Length :<code>3:36</code></ListGroupItem>
            <ListGroupItem>Date Released :<code>11-29-2018</code></ListGroupItem>
            <ListGroupItem> <h4 style= {style} >PENDING SALE</h4></ListGroupItem>
         </ListGroup>
      </div>
    )
  }
}
export default SongInfo;