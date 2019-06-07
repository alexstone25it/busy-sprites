import React from "react";

const Button = props => {
  return (
    <button
      className={["btn--primary", [props.alter]].join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
