import React from "react";

import MainContainer from "../../../components/containers/mains/MainContainer";

import DivWrapper from "../../../components/wrappers/DivWrapper";
import PrimaryTxt from "../../../components/typography/text/text/PrimaryTxt";
import Shading from "./shadedContent/ShadedContent";
import Brand from "../../../components/typography/branding/Brand";

const Home = () => (
  <MainContainer>
    <DivWrapper alter="wrapper-col wrapper-emphasis margins--top-full margins--bottom-full margins--lr-any">
      <PrimaryTxt alter="txt-emphasis">
        The only stop needed for all your technology needs.
      </PrimaryTxt>
    </DivWrapper>
    <PrimaryTxt alter="txt-normal margins--bottom-half margins--lr-any">
      Thought, design, application, security and support for businesses large
      and small.
    </PrimaryTxt>
    <Shading />
    <PrimaryTxt alter="txt-normal margins--top-half margins--lr-any">
      A complete service by <br />
      <Brand />.
    </PrimaryTxt>
  </MainContainer>
);

export default Home;
