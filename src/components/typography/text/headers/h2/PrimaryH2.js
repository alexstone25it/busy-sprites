import React from "react";
import styles from "./PrimaryH2.module.css";

const PrimaryH2 = props => <h2 className={styles.txt}>{props.children}</h2>;

export default PrimaryH2;
