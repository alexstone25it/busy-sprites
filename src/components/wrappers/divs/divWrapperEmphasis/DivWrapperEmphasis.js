import React from "react";
import styles from "./DivWrapperEmphasis.module.css";

const DivWrapperEmphasis = props => {
  return (
    <div className={styles.wrapper} style={props.pageStyles}>
      {props.children}
    </div>
  );
};
export default DivWrapperEmphasis;
