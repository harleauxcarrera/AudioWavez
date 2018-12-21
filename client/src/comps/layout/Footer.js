import React, { Component } from "react";
import { Col, Grid } from "react-bootstrap";
import "../../App.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Col lg={4} md={4} sm={4} xs={4}>
          <h4>Howdy</h4>
        </Col>
        <Col lg={8} md={8} sm={8} xs={8}>
          <h4>AudioWavez is a project made with love by Harleaux Carrera</h4>
          2018 Scottsdale, Arizona
        </Col>
      </div>
    );
  }
}
export default Footer;
