import React from "react";
import styles from "./ButtonPlus.module.css";

const ButtonPlus = props => (
  <button className={styles.btn} onClick={props.onClick}>
    &#x0002B;
  </button>
);

export default ButtonPlus;
