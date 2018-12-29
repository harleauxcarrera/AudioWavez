import React, { Component } from "react";
import { Col, Grid , Row} from "react-bootstrap";
import "../../App.css";


class Footer extends Component {
  render() {
    return (
      <Row className = "fuck">
        <Col lg={12} md={12} sm={12} xs={12}>
          <h5>AudioWavez is a project made with <ion-icon name="heart"></ion-icon> by Harleaux Carrera</h5>
          <h3>
            <a href="https://www.google.com"><ion-icon name="logo-facebook"></ion-icon> </a>
            <a><ion-icon name="logo-youtube"></ion-icon></a>
            <a><ion-icon name="logo-instagram"></ion-icon></a>

            </h3>
          2018 Scottsdale, Arizona
        </Col>
      </Row>
    );
  }
}
export default Footer;
