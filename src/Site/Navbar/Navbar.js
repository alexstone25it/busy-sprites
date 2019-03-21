import React, { Component } from "react";
import styles from "./Navbar.module.css";

import MenuButton from "./components/MenuButton";
import Logo from "./components/Logo";
import NavList from "./components/NavList";

class Navbar extends Component {
  state = { navNotShowing: true, isWideEnough: window.innerWidth };

  hideNav = () => {
    this.setState({ navNotShowing: true });
  };

  showNav = () => {
    this.setState({ navNotShowing: false });
  };
  ///
  render() {
    if (this.state.isWideEnough < 600) {
      if (this.state.navNotShowing) {
        return (
          <nav className={styles.navbarAtTop}>
            <MenuButton onClick={this.showNav} />
            <Logo />
          </nav>
        );
      } else {
        return (
          <nav className={styles.navbarAtTop}>
            <Logo />
            <NavList onClick={this.hideNav} />
          </nav>
        );
      }
    } else {
      return (
        <nav className={styles.navbarSidebar}>
          <Logo />
          <NavList />
        </nav>
      );
    }
  }

  /*
  render() {
    return this.state.navNotShowing ? (
      <nav className={styles.navbar} onClick={this.showNav}>
        <MenuButton />
        <Logo />
      </nav>
    ) : (
      <nav className={styles.navbar}>
        <Logo />
        <NavList />
      </nav>
    );
  }*/
}
export default Navbar;
