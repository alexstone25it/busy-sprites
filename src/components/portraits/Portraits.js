import React from "react";

import Portrait from "./portrait/Portrait";

const Portraits = ({ dataArray }) => (
  <div className="portraits">
    {dataArray.map(item => (
      <Portrait item={item} key={item.id} />
    ))}
  </div>
);

export default Portraits;
