import React from "react";

const EmphasisTxt = props => {
  return (
    <p className={["txt--emphasis", [props.alter]].join(" ")}>
      {props.children}
    </p>
  );
};

export default EmphasisTxt;
