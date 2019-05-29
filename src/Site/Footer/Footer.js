import React from "react";

import BusinessAddress from "./footerComponents/businessAddress/BusinessAddress";
import IconsBox from "../../components/iconsBox/IconsBox";
import SecondaryTxt from "../../components/typography/text/text/SecondaryTxt";

const Footer = () => {
  return (
    <footer className="footer margins--top-full">
      <BusinessAddress />
      <div className="margins--top-half margins--bottom-half">
        <IconsBox />
      </div>
      <SecondaryTxt alter="txt-light txt-left">
        <small>copyright@Busy Sprites 2018</small>
      </SecondaryTxt>
      <SecondaryTxt alter="txt-light txt-right">
        <small>Website by Thunder Island</small>
      </SecondaryTxt>
    </footer>
  );
};
export default Footer;
