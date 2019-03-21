import React from "react";
import styles from "./Portrait.module.css";

const Portrait = props => (
  <div className={styles.wrapper}>
    <img
      src={require(`../../../../../assets/images/${props.item.imgSrc}.jpg`)}
      alt={props.item.alt}
    />
    <details>
      <summary>{props.item.name}</summary>
      <p>{props.item.text}</p>
    </details>
  </div>
);

export default Portrait;
