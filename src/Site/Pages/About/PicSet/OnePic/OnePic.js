import React from "react";
const OnePic = props => (
  <div>
    <img
      src={require(`../../../../../assets/images/${props.item.imgSrc}.jpg`)}
      alt={props.item.alt}
    />
  </div>
);

export default OnePic;
