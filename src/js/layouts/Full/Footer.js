import React from 'react';
import {
  Container, Nav, NavbarBrand, Navbar, NavItem
} from 'reactstrap';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export const FooterIntro = () => (
  <div className="site-footer">
    <Container>
      <Nav>
        <div className="navbar-logo">
          <NavbarBrand tag={NavLink}>
            <h3 className="text-white">LOGO</h3>
          </NavbarBrand>
          <div className="text-white">
            Copyright © 2019 All rights reserved.
          </div>
        </div>
        <Navbar>
          <NavItem>
            <NavLink className="nav-link text-info" target="_blank">
              Privacy policy
            </NavLink>
          </NavItem>
        </Navbar>
      </Nav>
    </Container>
  </div>
);

export default FooterIntro;
