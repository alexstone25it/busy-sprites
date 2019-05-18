import React from "react";
import styles from "./MissionStatement.module.css";

const missionStatementText =
  "Providing a complete technological solution for your business";

const MissionStatement = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.text}>{missionStatementText}</h2>
  </div>
);
export default MissionStatement;
