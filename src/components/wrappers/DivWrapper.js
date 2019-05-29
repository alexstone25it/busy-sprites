import React from "react";

const DivWrapper = props => (
  <div
    className={["wrapper", [props.alter]].join(" ")}
    style={props.pageStyles}
  >
    {props.children}
  </div>
);

export default DivWrapper;
