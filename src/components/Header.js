import React, { Component } from 'react'
import bomb from '../img/bomb.png'
import star from '../img/star.png'
import mush from '../img/mush.webp'
import smashlogo from '../img/smashlogo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false }
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="bomblogo">
            <img src={bomb} />
          </div>
          <div className="bomblogo2">
            <img src={bomb} />
          </div>
          <div className="smashlogo">
            <img src={smashlogo} height="auto" width="auto" />
            <div className="star">
              <img src={star} />
            </div>
          </div>
        </div>
        {/*---------------- NAVBAR START ----------------*/}
        <div>
          <Navbar light expand="md">
            <NavbarBrand>
              <div className="navbarlogo">
                <img src={mush} height="50px" href="/" />
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" active>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/smashindex" active>View All Characters</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/smashnew" active>Create New Character</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {/*================= NAVBAR END ===================*/}
      </>
    )
  }
}

export default Header
