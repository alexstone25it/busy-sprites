import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  return (
    <button
      className={[
        styles[props.type],
        styles[props.color],
        styles[props.extras]
      ].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
