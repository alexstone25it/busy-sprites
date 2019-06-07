import React from "react";

const PrimaryH3 = props => (
  <header>
    <h3 className={["primaryH3", [props.alter]].join(" ")}>{props.children}</h3>
  </header>
);

export default PrimaryH3;
