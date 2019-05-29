import React, { Component, Fragment } from "react";

import Logo from "../../components/logo/Logo";
import NavList from "./navList/NavList";
import ButtonX from "../../components/buttons/buttonX/ButtonX";
import MenuButton from "../../components/buttons/menuButton/MenuButton";

class TopNav extends Component {
  state = { navOpen: false };

  toggleNavHandler = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };
  render() {
    return (
      <nav className="topNavbar">
        {this.state.navOpen ? (
          <Fragment>
            <Logo />
            <div className="topNavbar__btnWrapper">
              <ButtonX onClick={this.toggleNavHandler} />
            </div>
            <NavList />
          </Fragment>
        ) : (
          <Fragment>
            <Logo />
            <MenuButton onClick={this.toggleNavHandler} />
          </Fragment>
        )}
      </nav>
    );
  }
}
export default TopNav;
