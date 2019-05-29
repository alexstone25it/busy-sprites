import React from "react";

const ButtonAction = props => {
  return (
    <button
      className={["btn", [props.alter]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ButtonAction;
