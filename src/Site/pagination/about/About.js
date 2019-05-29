import React from "react";

import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import PrimaryH3 from "../../../components/typography/text/headers/h3/PrimaryH3";
import MainContainer from "../../../components/containers/mains/MainContainer";
import SectionWrapper from "../../../components/wrappers/SectionWrapper";
import DivWrapper from "../../../components/wrappers/DivWrapper";
import PrimaryTxt from "../../../components/typography/text/text/PrimaryTxt";
import Portraits from "../../../components/portraits/Portraits";
import PicSet from "../../../components/picSet/PicSet";

import { PICTURE_GRID_INFO } from "./DATA/IMAGE_DATA";
import { CONSULTANTS_ARRAY } from "./DATA/CONSULTANTS_ARRAY";

const About = () => (
  <MainContainer>
    <PrimaryH2 alter="margins--top-full margins--bottom-full">
      About Busy Sprites
    </PrimaryH2>
    <DivWrapper alter="wrapper-emphasis margins--bottom-full margins--lr-any">
      <PrimaryTxt alter="txt-emphasis">
        Our commitment is to deliver your specifications on time and on budget.
      </PrimaryTxt>
    </DivWrapper>
    <DivWrapper alter="wrapper-emphasis margins--bottom-half margins--lr-any">
      <PrimaryTxt alter="txt-emphasis">
        Our aim is to exceed your expectations.
      </PrimaryTxt>
    </DivWrapper>
    <PrimaryTxt alter="txt-normal margins--bottom-half margins--lr-any">
      The broad range of skill sets we can provide allow our customers the most
      complete information technology service available.
    </PrimaryTxt>
    <SectionWrapper alter="wrapper-col">
      <PrimaryH3 alter="margins--bottom-half">Our Team</PrimaryH3>
      <Portraits dataArray={CONSULTANTS_ARRAY} />
      <PrimaryTxt alter="txt-normal margins--top-full margins--bottom-full margins--lr-any">
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </PrimaryTxt>
    </SectionWrapper>
    <PicSet dataArray={PICTURE_GRID_INFO} />
  </MainContainer>
);

export default About;
