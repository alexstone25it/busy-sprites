import React from "react";
import styles from "./MainWrapper.module.css";

const Main = props => <main className={styles.wrapper}>{props.children}</main>;

export default Main;
