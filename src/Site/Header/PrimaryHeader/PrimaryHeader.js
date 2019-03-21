import React, { Component } from "react";
import styles from "./PrimaryHeader.module.css";
import H1 from "../../../components/typography/headings/H1";

class PrimaryHeader extends Component {
  render() {
    return (
      <header className={styles.container}>
        <div className={styles.bgPic}>
          <H1
            display="withFlexCol"
            font="withBiggestSerif"
            color="withWhite"
            extras="withFarAwayShadow"
          >
            Busy
            <br />
            Sprites
            <br />
            IT
            <br />
            Company
          </H1>
        </div>
      </header>
    );
  }
}
export default PrimaryHeader;
