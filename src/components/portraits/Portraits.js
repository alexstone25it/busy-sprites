import React from "react";
import styles from "./Portraits.module.css";

import Portrait from "./portrait/Portrait";

const Portraits = ({ dataArray }) => (
  <div className={styles.wrapper}>
    {dataArray.map(item => (
      <Portrait item={item} key={item.id} />
    ))}
  </div>
);

export default Portraits;
