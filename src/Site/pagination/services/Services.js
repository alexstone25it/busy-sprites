import React from "react";

import MainWrapper from "../../../components/wrappers/mains/MainWrapper";
import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import Brand from "../../../components/typography/branding/Brand";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import AccordionComponent from "../../../components/accordion/AccordionComponent";

import { SPECIALISMS_ARRAY } from "./DATA/SPECIALISMS_ARRAY";

import {
  MARGIN_TOP_FULL,
  MARGIN_BOTTOM_FULL,
  MARGIN_SIDES_FULL,
  MARGIN_SIDES_AUTO
} from "../PAGE_STYLES";

const Services = () => (
  <MainWrapper>
    <PrimaryH2
      pageStyles={Object.assign({}, MARGIN_TOP_FULL, MARGIN_BOTTOM_FULL)}
    >
      Busy Sprites Services
    </PrimaryH2>
    <DivWrapperEmphasis
      pageStyles={Object.assign({}, MARGIN_BOTTOM_FULL, MARGIN_SIDES_AUTO)}
    >
      <EmphasisTxt>
        From an idea to a finished product and beyond, <Brand /> consultants
        have the skills your business needs.
      </EmphasisTxt>
    </DivWrapperEmphasis>
    <AccordionComponent
      dataArray={SPECIALISMS_ARRAY}
      pageStyles={Object.assign({}, MARGIN_SIDES_FULL, MARGIN_BOTTOM_FULL)}
    />
  </MainWrapper>
);

export default Services;
