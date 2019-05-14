import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = props => {
  return (
    <button
      className={[
        styles.btn,
        styles[props.diffs],
        styles[props.boxShadow]
      ].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ButtonPrimary;
