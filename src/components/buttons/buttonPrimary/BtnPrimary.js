import React from "react";
import styles from "./BtnPrimary.module.css";

const Button = props => {
  return (
    <button
      className={[
        styles.primary,
        [styles[props.shadow]],
        styles[props.diffs]
      ].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
