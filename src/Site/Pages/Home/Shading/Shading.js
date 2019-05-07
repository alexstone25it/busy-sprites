import React, { Component } from "react";
import styles from "./Shading.module.css";

import BoxedIdeas from "../boxedIdeas/BoxedIdeas";
import BackText from "../backText/BackText";

class Shading extends Component {
  state = {
    extraInfoHidden: true,
    targetOrigin: ""
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollingHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollingHandler);
  }
  scrollingHandler = () => {
    if (!this.state.extraInfoHidden) {
      const parentDiv = document.getElementById("parentDiv");
      let parentTop = parentDiv.getBoundingClientRect().top;
      let parentBottom = parentDiv.getBoundingClientRect().bottom;
      let childTop = parentDiv.children[1].getBoundingClientRect().top;
      let childBottom = parentDiv.children[1].getBoundingClientRect().bottom;
      if (childTop < parentTop || childBottom > parentBottom + 40) {
        this.setState({
          extraInfoHidden: true
        });
      }
    }
  };
  showExtraInfo = idea => () => {
    const origin = idea.name;
    this.setState({
      extraInfoHidden: false,
      targetOrigin: origin
    });
  };
  hideExtraInfoHandler = () => {
    this.setState({ extraInfoHidden: true });
  };
  render() {
    return this.state.extraInfoHidden ? (
      <div className={styles.transparent}>
        <BoxedIdeas
          onClick={this.showExtraInfo}
          hidden={this.state.extraInfoHidden}
        />
      </div>
    ) : (
      <div className={styles.shade} id="parentDiv">
        <BoxedIdeas
          onClick={this.showExtraInfo}
          hidden={this.state.extraInfoHidden}
        />
        <BackText
          hidden={this.state.extraInfoHidden}
          target={this.state.targetOrigin}
          hideExtraInfo={this.hideExtraInfoHandler}
        />
      </div>
    );
  }
}
export default Shading;
