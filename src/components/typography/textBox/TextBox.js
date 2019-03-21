import React from "react";
import styles from "./TextBox.module.css";

const TextBox = props => {
  return <p className={styles.text}>{props.children}</p>;
};
export default TextBox;
