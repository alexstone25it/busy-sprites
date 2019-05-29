import React from "react";
import { NavLink } from "react-router-dom";
import ModalComponent from "../../../components/modal/ModalComponent";

import {
  NAV_MODAL_CONTENT,
  NAV_MODAL_INPUT_GROUPS
} from "../DATA/NAV_MODAL_CONTENT";

const NavList = () => (
  <ul>
    <li>
      <ModalComponent
        modalContent={NAV_MODAL_CONTENT}
        modalInputGroups={NAV_MODAL_INPUT_GROUPS}
      />
    </li>
    <li>
      <NavLink
        to="/"
        exact
        className="txt-light"
        activeClassName="txt-underline"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/services"
        exact
        className="txt-light"
        activeClassName="txt-underline"
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        exact
        className="txt-light"
        activeClassName="txt-underline"
      >
        About us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        exact
        className="txt-light"
        activeClassName="txt-underline"
      >
        Contact us
      </NavLink>
    </li>
  </ul>
);

export default NavList;
