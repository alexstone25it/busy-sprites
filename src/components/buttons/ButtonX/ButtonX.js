import React from "react";
import styles from "./ButtonX.module.css";

const ButtonX = props => (
  <button className={styles.bigX} onClick={props.onClick}>
    &times;
  </button>
);

export default ButtonX;
