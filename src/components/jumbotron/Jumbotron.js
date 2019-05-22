import React from "react";
import styles from "./Jumbotron.module.css";

const Jumbotron = props => (
  <div className={styles.wrapper}>
    <h2 className={styles.text}>{props.text}</h2>
  </div>
);
export default Jumbotron;
