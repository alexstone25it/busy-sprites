import React from "react";
import styles from "./UnboxedText.module.css";

const UnboxedText = props => {
  return <p className={styles.text}>{props.children}</p>;
};

export default UnboxedText;
