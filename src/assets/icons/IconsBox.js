import React from "react";
import styles from "./IconsBox.module.css";
import SvgFacebook from "./svg/facebook/Facebook";
import SvgLinkedIn from "./svg/linkedIn/LinkedIn";
import SvgTwitter from "./svg/twitter/Twitter";

const IconsBox = () => {
  return (
    <div className={styles.iconsWrapper}>
      <p className={styles.iconsTxt}>Social Media</p>
      <div className={styles.iconsInnerWrapper}>
        <SvgFacebook />
        <SvgTwitter />
        <SvgLinkedIn />
      </div>
    </div>
  );
};
export default IconsBox;
