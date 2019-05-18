import React from "react";
import styles from "./ErrorComponent.module.css";
import ButtonX from "../buttons/buttonX/ButtonX";

const ErrorComponent = props => (
  <div className={styles.wrapper}>
    <h4>Sorry there seems to be something wrong!</h4>
    <ButtonX />
  </div>
);

export default ErrorComponent;
