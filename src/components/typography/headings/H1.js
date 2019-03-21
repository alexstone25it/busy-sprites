import React from "react";
import styles from "./headings.module.css";

const H1 = props => (
  <h1
    className={[
      styles[props.display],
      styles[props.font],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </h1>
);

export default H1;
