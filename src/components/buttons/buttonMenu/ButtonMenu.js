import React from "react";

const ButtonMenu = props => {
  return (
    <button
      aria-label="open"
      className="btn--menu"
      style={
        props.scrolling
          ? {
              top: "0",
              right: "0",
              border: "none",
              borderRadius: "50px",
              padding: "1rem",
              opacity: "0.8"
            }
          : null
      }
      onClick={props.onClick}
    >
      Menu
    </button>
  );
};
export default ButtonMenu;
