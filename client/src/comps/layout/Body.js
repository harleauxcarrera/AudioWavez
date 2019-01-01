import React, { Component } from 'react'
import {Col,Row, Well} from 'react-bootstrap';
import '../../App.css';
import Mixes from '../util/Mixes';
import Tracks from '../util/Tracks';
import SongInfo from '../util/SongInfo';

const style = {
  backgroundColor: '#CAD3C8'
}


 class Body extends Component {
  render() {
    return (
      <div className= "body">
          <Row>
                {/* Mixes */}
            <Col lg={3} md={3} sm = {3} xs={12} >
                 <Well style={style}>
                    <Mixes/>
                 </Well>
            </Col>
            
            {/* Tracks */}
            <Col lg={6} md={6} sm = {6} xs={12}>
                 <Well style={style}>
                    <Tracks/>
                 </Well>
            </Col>
            {/* Info */}
            <Col lg={3} md={3} sm = {3} xs={12}>
                <Well style={style}>
                    <SongInfo/>
                 </Well>
            </Col>
          </Row>
       
      </div>
    )
  }
}
export default Body;