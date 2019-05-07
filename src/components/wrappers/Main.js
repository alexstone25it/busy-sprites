import React from "react";
import styles from "./container.module.css";

const Main = props => (
  <main
    className={[
      styles[props.display],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </main>
);

export default Main;
