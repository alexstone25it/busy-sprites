import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.css";
import ButtonX from "../../../components/buttons/ButtonX/ButtonX";

class NavList extends Component {
  render() {
    return (
      <ul className={styles.navUl} id={styles.ulSlideDown}>
        <li className={styles.navItem}>
          <ButtonX type="bigX" />
        </li>
        <li className={styles.navItem}>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/services" exact activeClassName={styles.active}>
            Services
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/about" exact activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contact" exact activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default NavList;
