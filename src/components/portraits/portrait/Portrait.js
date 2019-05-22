import React from "react";
import styles from "./Portrait.module.css";

const Portrait = ({ item }) => (
  <div className={styles.wrapper}>
    <img
      src={require(`../../../assets/images/${item.src}.jpg`)}
      alt={item.alt}
    />
    <details>
      <summary>{item.name}</summary>
      <p>{item.text}</p>
    </details>
  </div>
);

export default Portrait;
