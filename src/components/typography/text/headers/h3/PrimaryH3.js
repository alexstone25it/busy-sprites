import React from "react";
import styles from "./PrimaryH3.module.css";

const PrimaryH3 = props => <h3 className={styles.txt}>{props.children}</h3>;

export default PrimaryH3;
