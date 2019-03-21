import React from "react";
import styles from "./headings.module.css";

const H2 = props => (
  <h2
    className={[
      styles[props.display],
      styles[props.font],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </h2>
);

export default H2;
