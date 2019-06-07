import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import SideNav from "./navbars/SideNav";
import TopNav from "./navbars/TopNav";
import Jumbotron1 from "../components/jumbotron/Jumbotron1";
import PrimaryH1 from "../components/typography/text/headers/h1/PrimaryH1";
import SecondaryH1 from "../components/typography/text/headers/h1/SecondaryH1";
import Home from "./pagination/home/Home";
import About from "./pagination/about/About";
import Services from "./pagination/services/Services";
import Contact from "./pagination/contact/Contact";

import Footer from "./footer/Footer";

import { MISSION_STATEMENT } from "./pagination/home/DATA/MISSION_STATEMENT";

class Site extends Component {
  state = {
    sideNav: true
  };
  componentDidMount() {
    this.widthResizeHandler();
    window.addEventListener("resize", this.widthResizeHandler);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.widthResizeHandler);
  }
  widthResizeHandler = () => {
    if (window.innerWidth < 600) {
      this.setState({
        sideNav: false
      });
    } else {
      this.setState({ sideNav: true });
    }
  };
  render() {
    return (
      <div className={this.state.sideNav ? "grid" : null}>
        {this.state.sideNav ? (
          <div className="grid__navbar">
            <SideNav />
          </div>
        ) : (
          <TopNav />
        )}
        <div className={this.state.sideNav ? "grid__content" : null}>
          <Route
            path="/"
            exact
            component={() => <Jumbotron1 text={MISSION_STATEMENT} />}
          />
          <Switch>
            <Route path="/" exact component={PrimaryH1} />
            <Route path="/" component={SecondaryH1} />
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Route path="/" component={Footer} />
        </div>
      </div>
    );
  }
}

export default withRouter(Site);
