import React from "react";
import styles from "./MainContainer.module.css";

const MainContainer = props => (
  <main className={styles.container}>{props.children}</main>
);

export default MainContainer;
