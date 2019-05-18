import React, { Component } from "react";

import MainWrapper from "../../../components/wrappers/mains/MainWrapper";
import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import Brand from "../../../components/typography/branding/Brand";
import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import Specialisms from "./specialisms/Specialisms";

class Services extends Component {
  render() {
    return (
      <MainWrapper>
        <PrimaryH2>Busy Sprites Services</PrimaryH2>
        <DivWrapperEmphasis>
          <EmphasisTxt>
            From an idea to a finished product and beyond, <Brand /> consultants
            have the skills your business needs.
          </EmphasisTxt>
        </DivWrapperEmphasis>
        <Specialisms />
      </MainWrapper>
    );
  }
}

export default Services;
