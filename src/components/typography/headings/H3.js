import React from "react";
import styles from "./headings.module.css";

const H3 = props => (
  <h3
    className={[
      styles[props.display],
      styles[props.font],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </h3>
);

export default H3;
