import React from "react";
import OnePic from "./OnePic/OnePic";

const GridPicSet = ({ dataArray }) => {
  return (
    <div className="gridPicSet">
      {dataArray.map(item => (
        <OnePic item={item} key={item.id} />
      ))}
    </div>
  );
};
export default GridPicSet;
