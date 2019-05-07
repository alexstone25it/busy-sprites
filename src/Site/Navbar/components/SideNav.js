import React from "react";
import styles from "./SideNav.module.css";

import Logo from "./Logo";
import NavList from "./NavList";

const SideNav = () => (
  <nav className={styles.nav}>
    <Logo />
    <NavList />
  </nav>
);

export default SideNav;
