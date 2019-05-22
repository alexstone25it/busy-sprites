import React from "react";
import styles from "./PrimaryTxt.module.css";

const PrimaryTxt = props => {
  return (
    <p className={styles.txt} style={props.pageStyles}>
      {props.children}
    </p>
  );
};

export default PrimaryTxt;
