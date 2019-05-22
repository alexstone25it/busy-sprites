import React from "react";
import styles from "./SideNav.module.css";

import Logo from "../../components/logo/Logo";
import NavList from "./navList/NavList";

const SideNav = () => (
  <nav className={styles.nav}>
    <Logo />
    <NavList />
  </nav>
);

export default SideNav;
