import React from "react";
import styles from "./ErrorComponent.module.css";
import ButtonX from "../buttons/buttonX/ButtonX";

const ErrorComponent = ({ errorComponentMessage }) => (
  <div className={styles.wrapper}>
    <h4>{errorComponentMessage}</h4>
    <ButtonX />
  </div>
);

export default ErrorComponent;
