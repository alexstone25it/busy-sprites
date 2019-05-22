import React from "react";
import styles from "./DivWrapper2x2Grid.module.css";

const DivWrapper2x2Grid = props => (
  <div className={styles.wrapper} style={props.pageStyles}>
    {props.children}
  </div>
);
export default DivWrapper2x2Grid;
