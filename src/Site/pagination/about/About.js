import React from "react";

import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import PrimaryH3 from "../../../components/typography/text/headers/h3/PrimaryH3";
import MainWrapper from "../../../components/wrappers/mains/MainWrapper";
import SectionWrapper from "../../../components/wrappers/sections/SectionWrapper";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import Portraits from "../../../components/portraits/Portraits";
import PicSet from "../../../components/picSet/PicSet";

import { PICTURE_GRID_INFO } from "./DATA/IMAGE_DATA";
import { CONSULTANTS_ARRAY } from "./DATA/CONSULTANTS_ARRAY";

import {
  MARGIN_TOP_FULL,
  MARGIN_BOTTOM_FULL,
  MARGIN_BOTTOM_HALF,
  MARGIN_SIDES_AUTO
} from "../PAGE_STYLES";

const About = () => (
  <MainWrapper>
    <PrimaryH2
      pageStyles={Object.assign({}, MARGIN_TOP_FULL, MARGIN_BOTTOM_FULL)}
    >
      About Busy Sprites
    </PrimaryH2>
    <DivWrapperEmphasis
      pageStyles={Object.assign({}, MARGIN_BOTTOM_FULL, MARGIN_SIDES_AUTO)}
    >
      <EmphasisTxt>
        Our commitment is to deliver your specifications on time and on budget.
      </EmphasisTxt>
    </DivWrapperEmphasis>
    <DivWrapperEmphasis
      pageStyles={Object.assign({}, MARGIN_BOTTOM_HALF, MARGIN_SIDES_AUTO)}
    >
      <EmphasisTxt>Our aim is to exceed your expectations.</EmphasisTxt>
    </DivWrapperEmphasis>
    <PrimaryTxt
      pageStyles={Object.assign({}, MARGIN_BOTTOM_HALF, MARGIN_SIDES_AUTO)}
    >
      The broad range of skill sets we can provide allow our customers the most
      complete information technology service available.
    </PrimaryTxt>
    <SectionWrapper>
      <PrimaryH3 pageStyles={Object.assign({}, MARGIN_BOTTOM_HALF)}>
        Our Team
      </PrimaryH3>
      <Portraits dataArray={CONSULTANTS_ARRAY} />
      <PrimaryTxt
        pageStyles={Object.assign(
          {},
          MARGIN_TOP_FULL,
          MARGIN_BOTTOM_FULL,
          MARGIN_SIDES_AUTO
        )}
      >
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </PrimaryTxt>
    </SectionWrapper>
    <PicSet dataArray={PICTURE_GRID_INFO} />
  </MainWrapper>
);

export default About;
