import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = props => {
  return (
    <div className={styles.menuBox}>
      <button className={styles.menu} onClick={props.onClick}>
        Menu
      </button>
    </div>
  );
};
export default MenuButton;
