import React from "react";

const EmphasisContainer = props => {
  return (
    <div className={["container--emphasis", [props.alter]].join(" ")}>
      {props.children}
    </div>
  );
};

export default EmphasisContainer;
