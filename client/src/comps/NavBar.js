import React, { Component } from 'react';
import {Navbar, NavItem, Nav, ImageAvatar} from 'react-bootstrap';
import Avatarz from './util/Avatarz';
class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Avatarz source="https://d3c1jucybpy4ua.cloudfront.net/data/53648/big_picture/Chance.jpg?1494835487"/>
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
    );
  }
}

export default NavBar;