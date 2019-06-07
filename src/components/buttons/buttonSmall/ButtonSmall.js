import React from "react";

const ButtonSmall = props => {
  return (
    <button
      className={["btn--small", [props.alter]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ButtonSmall;
