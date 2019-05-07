import React from "react";
import styles from "./ButtonMinus.module.css";

const ButtonMinus = props => (
  <button className={styles.btn} onClick={props.onClick}>
    &#x2212;
  </button>
);

export default ButtonMinus;
