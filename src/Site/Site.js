import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import SideNav from "../site/navbar/components/SideNav";
import TopNav from "../site/navbar/components/TopNav";
import MissionStatement from "../site/pages/home/missionStatement/MissionStatement";
import PrimaryHeader from "../site/header/primaryHeader/PrimaryHeader";
import SecondaryHeader from "../site/header/secondaryHeader/SecondaryHeader";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

import Footer from "./footer/Footer";

class Site extends Component {
  state = {
    sideNav: true
  };
  componentDidMount() {
    this.widthResizeHandler();
    window.addEventListener("resize", this.widthResizeHandler);
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
    const grid = {
      display: "grid",
      gridTemplateColumns: "20% 80%"
    };
    const gridNav = {
      gridColumn: "1 / 2"
    };
    const gridInner = {
      gridColumn: "2 / 3"
    };
    return (
      <div style={this.state.sideNav ? grid : null}>
        {this.state.sideNav ? (
          <div style={gridNav}>
            <SideNav />
          </div>
        ) : (
          <TopNav />
        )}
        <div style={this.state.sideNav ? gridInner : null}>
          <Route path="/" exact component={MissionStatement} />
          <Switch>
            <Route path="/" exact component={PrimaryHeader} />
            <Route path="/" component={SecondaryHeader} />
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

export default Site;
