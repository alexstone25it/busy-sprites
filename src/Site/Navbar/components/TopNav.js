import React, { Component } from "react";
import styles from "./TopNav.module.css";

import Logo from "./Logo";
import NavList from "./NavList";
import ButtonX from "../../../components/buttons/buttonX/ButtonX";
import MenuButton from "../../../components/buttons/menuButton/MenuButton";

class TopNav extends Component {
  state = { navOpen: false };

  toggleNavHandler = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
  render() {
    return this.state.navOpen ? (
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.btnWrapper}>
          <ButtonX onClick={this.toggleNavHandler} />
        </div>
        <NavList />
      </nav>
    ) : (
      <nav>
        <Logo />
        <MenuButton onClick={this.toggleNavHandler} />
      </nav>
    );
  }
}

export default TopNav;
