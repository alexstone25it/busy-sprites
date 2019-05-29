import React from "react";

const PrimaryTxt = props => {
  return (
    <p className={[[props.alter]].join(" ")} style={props.pageStyles}>
      {props.children}
    </p>
  );
};

export default PrimaryTxt;
