import React from "react";

const BoxedTxt = props => {
  return (
    <p className={["padding-norm", [props.alter]].join(" ")}>
      {props.children}
    </p>
  );
};

export default BoxedTxt;
