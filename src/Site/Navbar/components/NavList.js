import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavList extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="custom-txt-blue">
            Home
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/services" exact activeClassName="custom-txt-blue">
            Services
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/about" exact activeClassName="custom-txt-blue">
            About
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/contact" exact activeClassName="custom-txt-blue">
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default NavList;
