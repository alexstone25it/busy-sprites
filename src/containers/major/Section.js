import React from "react";
import styles from "./container.module.css";

const Section = props => (
  <section
    className={[
      styles[props.display],
      styles[props.color],
      styles[props.extras]
    ].join(" ")}
  >
    {props.children}
  </section>
);

export default Section;
