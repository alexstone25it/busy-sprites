import React from "react";
import styles from "./BlueWrapper.module.css";

const BlueWrapper = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
export default BlueWrapper;
