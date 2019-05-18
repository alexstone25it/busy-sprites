import React from "react";
import styles from "./DivWrapperEmphasis.module.css";

const DivWrapperEmphasis = props => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
export default DivWrapperEmphasis;
