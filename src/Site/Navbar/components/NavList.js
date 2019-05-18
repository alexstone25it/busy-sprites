import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ModalComponent from "../../pages/contact/modal/ModalComponent";
import { MODAL_NAV_CONTENT } from "../../pages/contact/modal/MODAL_CONTENT";

class NavList extends Component {
  render() {
    return (
      <ul>
        <li className="custom-txt-white">
          <ModalComponent modalContent={MODAL_NAV_CONTENT} />
        </li>
        <li>
          <NavLink to="/" exact activeClassName="custom-txt-blue">
            Home
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/services" exact activeClassName="custom-txt-blue">
            Services
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/about" exact activeClassName="custom-txt-blue">
            About us
          </NavLink>
        </li>
        <li className="custom-txt-white">
          <NavLink to="/contact" exact activeClassName="custom-txt-blue">
            Contact us
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default NavList;
