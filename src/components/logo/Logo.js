import React from "react";

const Logo = ({ scrolling }) => {
  return (
    <h2
      className="logo"
      style={
        scrolling
          ? {
              position: "fixed",
              top: "1rem",
              left: "2rem",
              lineHeight: "2.5rem",
              transform: "skew(0deg)",
              padding: "0",
              opacity: "0.7"
            }
          : null
      }
    >
      <span>Busy</span>
      <br />
      <span>Sprites</span>
    </h2>
  );
};
export default Logo;
