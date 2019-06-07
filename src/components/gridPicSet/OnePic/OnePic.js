import React from "react";
const OnePic = ({ item }) => (
  <div>
    <img
      src={require(`../../../assets/images/${item.src}.jpg`)}
      alt={item.alt}
    />
  </div>
);

export default OnePic;
