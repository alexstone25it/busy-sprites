import React from "react";

const SmallTxt = props => (
  <p className={["txt--noted", [props.alter]].join(" ")}>{props.children}</p>
);

export default SmallTxt;
