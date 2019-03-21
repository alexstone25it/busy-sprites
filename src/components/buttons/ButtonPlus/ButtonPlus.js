import React from "react";
import styles from "./ButtonPlus.module.css";

const ButtonPlus = props => (
  <button className={[styles[props.type]].join(" ")} onClick={props.onClick}>
    &#x0002B;
  </button>
);

export default ButtonPlus;
