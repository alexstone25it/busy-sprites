import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../components/logo/Logo";
import NavList from "./navList/NavList";
import ButtonX from "../../components/buttons/buttonX/ButtonX";
import ButtonMenu from "../../components/buttons/buttonMenu/ButtonMenu";

class TopNav extends Component {
  state = { navOpen: false, scrolling: false };
  componentDidMount() {
    window.addEventListener("scroll", this.windowScrolling);
  }
  componentWillUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        navOpen: false
      });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrolling);
    this.clearTimer();
  }

  toggleNavHandler = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  windowScrolling = () => {
    if (!this.state.navOpen) {
      this.setState({
        scrolling: true
      });
      this.addTimer();
    }
  };
  addTimer = () => {
    if (this.timerId) {
      this.clearTimer();
    }
    this.timerId = setTimeout(() => {
      this.setState({
        scrolling: false
      });
      this.timerId = 0;
    }, 500);
  };
  clearTimer = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = 0;
    }
  };

  render() {
    return (
      <nav role="navigation" className="topNavbar">
        {this.state.navOpen ? (
          <Fragment>
            <Logo />
            <div className="topNavbar__closeMenuWrapper">
              <ButtonX onClick={this.toggleNavHandler} />
            </div>
            <NavList />
          </Fragment>
        ) : (
          <Fragment>
            <Logo scrolling={this.state.scrolling} />
            <div className="topNavbar__openMenuWrapper">
              <ButtonMenu
                scrolling={this.state.scrolling}
                onClick={this.toggleNavHandler}
              />
            </div>
          </Fragment>
        )}
      </nav>
    );
  }
}
export default withRouter(TopNav);
