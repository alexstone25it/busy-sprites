import React from "react";

const NormalTxt = props => {
  return (
    <p className={["txt--normal", [props.alter]].join(" ")}>{props.children}</p>
  );
};

export default NormalTxt;
