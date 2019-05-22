import React from "react";
import styles from "./EmphasisTxt.module.css";

const EmphasisTxt = props => {
  return (
    <p className={styles.txt} style={props.pageStyles}>
      {props.children}
    </p>
  );
};

export default EmphasisTxt;
