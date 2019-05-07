import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./Site.module.css";

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
  render() {
    return (
      <Fragment>
        <div className={styles.grid}>
          <div className={styles.gridNav}>
            <SideNav />
          </div>
          <div className={styles.gridInner}>
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

        <div className={styles.noGrid}>
          <TopNav />
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
      </Fragment>
    );
  }
}

export default Site;
