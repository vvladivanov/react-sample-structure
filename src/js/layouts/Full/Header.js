/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  Nav, NavbarBrand, Navbar, NavItem, Button
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <Nav className="navigation-bar">
          <NavbarBrand className="navbar-logo" tag={NavLink}>
            <h3 className="text-white">LOGO</h3>
          </NavbarBrand>
          <div className="main-menu">
            <Nav>
              <Navbar>
                <NavItem>
                  <NavLink smooth className="nav-link">
                    Menu 1
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link">
                    Menu 2
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink smooth className="nav-link">
                    Menu 3
                    <div className="nav-active">
                      <div />
                      <div />
                      <div />
                    </div>
                  </NavLink>
                </NavItem>
              </Navbar>
            </Nav>
          </div>
          <div className="navbar-right d-none d-lg-flex">
            <Button
              className="btn"
              color="info"
              tag={NavLink}
            >
              Button
            </Button>
          </div>
        </Nav>
      </div>
    );
  }
}

export default Header;
