import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Site/Navbar/Navbar";
import MissionStatement from "./Site/Pages/Home/MissionStatement/MissionStatement";
import PrimaryHeader from "./Site/Header/PrimaryHeader/PrimaryHeader";
import SecondaryHeader from "./Site/Header/SecondaryHeader/SecondaryHeader";
import Home from "./Site/Pages/Home/Home";
import About from "./Site/Pages/About/About";
import Services from "./Site/Pages/Services/Services";
import Footer from "./Site/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={MissionStatement} />
        <Switch>
          <Route path="/" exact component={PrimaryHeader} />
          <Route path="/" component={SecondaryHeader} />
        </Switch>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
