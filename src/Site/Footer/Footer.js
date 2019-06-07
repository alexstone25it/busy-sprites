import React from "react";

import BusinessAddress from "./footerComponents/businessAddress/BusinessAddress";
import IconsBox from "../../components/iconsBox/IconsBox";
import SmallTxt from "../../components/typography/text/text/SmallTxt";

const Footer = () => {
  return (
    <footer role="contentinfo" className="footer">
      <BusinessAddress />
      <div className="margins--top-half margins--bottom-half">
        <IconsBox />
      </div>
      <SmallTxt alter="txt--light txt--left">
        <small>copyright@Busy Sprites 2018</small>
      </SmallTxt>
      <SmallTxt alter="txt--light txt--right">
        <small>Website by Thunder Island</small>
      </SmallTxt>
    </footer>
  );
};
export default Footer;
