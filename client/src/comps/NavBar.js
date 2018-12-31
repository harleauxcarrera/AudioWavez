import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import Avatarz from './util/Avatarz';
const style = {
  display: 'inline'
}
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">AudioWavez</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar;
