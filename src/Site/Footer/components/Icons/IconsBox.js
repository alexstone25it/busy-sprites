import React from "react";
import styles from "./IconsBox.module.css";
import SvgFacebook from "./svg/Facebook/Facebook";
import SvgLinkedIn from "./svg/LinkedIn/LinkedIn";
import SvgTwitter from "./svg/Twitter/Twitter";

const IconsBox = () => {
  return (
    <div className={styles.iconsOuterBox}>
      <p className={styles.iconsTxt}>Social Media</p>
      <div className={styles.iconsInnerBox}>
        <SvgFacebook />
        <SvgTwitter />
        <SvgLinkedIn />
      </div>
    </div>
  );
};
export default IconsBox;
