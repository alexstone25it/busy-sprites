import React from "react";
import { NavLink } from "react-router-dom";
import ModalComponent from "../../modal/ModalComponent";

import { MODAL_NAV_CONTENT } from "../../modal/DATA/MODAL_CONTENT";
import { MODAL_INPUT_GROUPS } from "../../modal/DATA/MODAL_INPUT_GROUPS";

const NavList = () => (
  <ul>
    <li>
      <ModalComponent
        modalContent={MODAL_NAV_CONTENT}
        modalInputGroups={MODAL_INPUT_GROUPS}
      />
    </li>
    <li>
      <NavLink
        to="/"
        exact
        className="txt--white"
        activeClassName="txt--underline"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/services"
        exact
        className="txt--white"
        activeClassName="txt--underline"
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        exact
        className="txt--white"
        activeClassName="txt--underline"
      >
        About us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        exact
        className="txt--white"
        activeClassName="txt--underline"
      >
        Contact us
      </NavLink>
    </li>
  </ul>
);

export default NavList;
