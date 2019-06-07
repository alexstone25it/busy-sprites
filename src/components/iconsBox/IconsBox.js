import React from "react";
import SvgFacebook from "../../assets/icons/svg/Facebook";
import SvgLinkedIn from "../../assets/icons/svg/LinkedIn";
import SvgTwitter from "../../assets/icons/svg/Twitter";

const IconsBox = () => {
  return (
    <section className="iconsBox__wrapper">
      <p className="iconsBox__text">Social Media</p>
      <div className="iconsBox__container">
        <a href="/">
          <SvgFacebook />
        </a>
        <a href="/">
          <SvgTwitter />
        </a>
        <a href="/">
          <SvgLinkedIn />
        </a>
      </div>
    </section>
  );
};
export default IconsBox;
