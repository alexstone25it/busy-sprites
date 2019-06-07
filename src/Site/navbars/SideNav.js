import React from "react";

import Logo from "../../components/logo/Logo";
import NavList from "./navList/NavList";

const SideNav = () => (
  <nav role="navigation" className="sideNavbar">
    <Logo />
    <NavList />
  </nav>
);

export default SideNav;
