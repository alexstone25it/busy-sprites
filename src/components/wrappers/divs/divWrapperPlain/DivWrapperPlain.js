import React from "react";
import styles from "./DivWrapperPlain.module.css";

const DivWrapperPlain = props => (
  <div className={styles.wrapper}>{props.children}</div>
);

export default DivWrapperPlain;
