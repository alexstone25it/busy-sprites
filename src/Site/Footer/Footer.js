import React from "react";
import styles from "./Footer.module.css";

import BusinessAddress from "./components/businessAddress/BusinessAddress";
import IconsBox from "../../assets/icons/IconsBox";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BusinessAddress />
      <IconsBox />
      <p className={styles.copyright}>
        <small>copyright@Busy Sprites 2018</small>
      </p>
      <p className={styles.ti}>
        <small>Website by Thunder Island</small>
      </p>
    </footer>
  );
};
export default Footer;
