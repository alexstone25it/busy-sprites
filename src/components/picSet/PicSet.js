import React from "react";
import styles from "./PicSet.module.css";
import OnePic from "./OnePic/OnePic";

const PicSet = ({ dataArray }) => {
  return (
    <div className={styles.wrapper}>
      {dataArray.map(item => (
        <OnePic item={item} key={item.id} />
      ))}
    </div>
  );
};
export default PicSet;
