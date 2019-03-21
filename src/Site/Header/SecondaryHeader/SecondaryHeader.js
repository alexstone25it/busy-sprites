import React, { Component } from "react";
import styles from "./SecondaryHeader.module.css";
import H1 from "../../../components/typography/headings/H1";

class SecondaryHeader extends Component {
  render() {
    return (
      <header className={styles.container}>
        <H1
          display="withFlexCol"
          font="withBiggestSerif"
          color="withWhite"
          extras="withShadow"
        >
          Busy
          <br />
          Sprites
          <br />
          IT
          <br />
          Company
        </H1>
      </header>
    );
  }
}
export default SecondaryHeader;
