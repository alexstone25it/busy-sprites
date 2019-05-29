import React from "react";

import MainContainer from "../../../components/containers/mains/MainContainer";
import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import Brand from "../../../components/typography/branding/Brand";
import DivWrapper from "../../../components/wrappers/DivWrapper";
import PrimaryTxt from "../../../components/typography/text/text/PrimaryTxt";
import Accordion from "../../../components/accordion/Accordion";

import { SPECIALISMS_ARRAY } from "./DATA/SPECIALISMS_ARRAY";

const Services = () => (
  <MainContainer>
    <PrimaryH2 alter="margins--top-full margins--bottom-full">
      Busy Sprites Services
    </PrimaryH2>
    <DivWrapper alter="wrapper-emphasis margins--bottom-full margins--lr-any">
      <PrimaryTxt alter="txt-emphasis">
        From an idea to a finished product and beyond, <Brand /> consultants
        have the skills your business needs.
      </PrimaryTxt>
    </DivWrapper>
    <Accordion
      dataArray={SPECIALISMS_ARRAY}
      className="margins--right-full margins--left-full margins--bottom-full"
    />
  </MainContainer>
);

export default Services;
