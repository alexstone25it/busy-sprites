import React from "react";

const PrimaryH2 = props => (
  <header>
    <h2 className={["primaryH2", [props.alter]].join(" ")}>{props.children}</h2>
  </header>
);

export default PrimaryH2;
