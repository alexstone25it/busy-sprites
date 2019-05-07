import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <h4 className={styles.logoTxt}>
        <span>Busy</span>
        <br />
        <span>&nbsp;Sprites</span>
      </h4>
    </div>
  );
};
export default Logo;
