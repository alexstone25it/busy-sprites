import React from "react";
import styles from "./container.module.css";

const Div = props => (
  <div
    className={[
      styles[props.display],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </div>
);

export default Div;
