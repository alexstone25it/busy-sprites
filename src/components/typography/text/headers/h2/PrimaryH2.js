import React from "react";

const PrimaryH2 = props => (
  <h2 className={["h2", [props.alter]].join(" ")}>{props.children}</h2>
);

export default PrimaryH2;
