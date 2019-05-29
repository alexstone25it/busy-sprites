import React from "react";

const SecondaryTxt = props => (
  <p className={["txt-noted", [props.alter]].join(" ")}>{props.children}</p>
);

export default SecondaryTxt;
