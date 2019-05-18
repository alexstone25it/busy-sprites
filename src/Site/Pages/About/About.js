import React from "react";

import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import PrimaryH3 from "../../../components/typography/text/headers/h3/PrimaryH3";
import MainWrapper from "../../../components/wrappers/mains/MainWrapper";
import SectionWrapper from "../../../components/wrappers/sections/SectionWrapper";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import Portraits from "./portraits/Portraits";
import PicSet from "./picSet/PicSet";

const About = () => (
  <MainWrapper>
    <PrimaryH2>About Busy Sprites</PrimaryH2>
    <DivWrapperEmphasis>
      <EmphasisTxt>
        Our commitment is to deliver your specifications on time and on budget.{" "}
        <br />
        <br />
        Our aim is to exceed your expectations.
      </EmphasisTxt>
    </DivWrapperEmphasis>

    <SectionWrapper>
      <PrimaryTxt>
        The broad range of skill sets we can provide allow our customers the
        most complete information technology service available.
      </PrimaryTxt>
      <PrimaryH3>Our Team</PrimaryH3>
      <Portraits />
      <PrimaryTxt>
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </PrimaryTxt>
      <PicSet />
    </SectionWrapper>
  </MainWrapper>
);

export default About;
