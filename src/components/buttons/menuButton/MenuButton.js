import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = props => {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.btn} onClick={props.onClick}>
        Menu
      </button>
    </div>
  );
};
export default MenuButton;
