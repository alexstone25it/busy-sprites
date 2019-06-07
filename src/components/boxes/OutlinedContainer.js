import React from "react";

const OutlinedContainer = props => {
  return props.flow === "row" ? (
    <div className={["container--outlined-row", [props.alter]].join(" ")}>
      {props.children}
    </div>
  ) : (
    <div className={["container--outlined-col", [props.alter]].join(" ")}>
      {props.children}
    </div>
  );
};

export default OutlinedContainer;
