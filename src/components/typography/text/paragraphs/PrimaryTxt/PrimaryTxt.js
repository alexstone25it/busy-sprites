import React from "react";
import styles from "./PrimaryTxt.module.css";

const PrimaryTxt = props => {
  return <p className={styles.txt}>{props.children}</p>;
};

export default PrimaryTxt;
