import React from "react";
import styles from "./DivWrapperPlain.module.css";

const DivWrapperPlain = props => (
  <div
    className={[styles.wrapper, styles[props.direction]].join(" ")}
    style={props.pageStyles}
  >
    {props.children}
  </div>
);

export default DivWrapperPlain;
