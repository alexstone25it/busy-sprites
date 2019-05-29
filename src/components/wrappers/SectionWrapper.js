import React from "react";

const SectionWrapper = props => (
  <section className={["wrapper", [props.alter]].join(" ")}>
    {props.children}
  </section>
);

export default SectionWrapper;
