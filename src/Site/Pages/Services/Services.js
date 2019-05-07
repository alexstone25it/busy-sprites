import React, { Component } from "react";

import Main from "../../../components/wrappers/Main";
import H2 from "../../../components/typography/headings/H2";
import Brand from "../../../components/typography/branding/Brand";
import BlueWrapper from "../../../components/wrappers/BlueWrapper";
import EmphasisTxt from "../../../components/typography/text/EmphasisTxt";
import Specialisms from "./specialisms/Specialisms";

class Services extends Component {
  render() {
    return (
      <Main>
        <H2 font="withBigSerif" color="withBlack" extras="withBlueShadow">
          Busy Sprites Services
        </H2>
        <BlueWrapper>
          <EmphasisTxt>
            From an idea to a finished product and beyond, <Brand /> consultants
            have the skills your business needs.
          </EmphasisTxt>
        </BlueWrapper>
        <Specialisms />
      </Main>
    );
  }
}

export default Services;
