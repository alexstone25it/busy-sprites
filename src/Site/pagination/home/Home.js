import React from "react";

import MainWrapper from "../../../components/wrappers/mains/MainWrapper";

import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import Shading from "./shading/Shading";

import {
  MARGIN_TOP_FULL,
  MARGIN_TOP_HALF,
  MARGIN_BOTTOM_FULL,
  MARGIN_BOTTOM_HALF,
  MARGIN_SIDES_AUTO
} from "../PAGE_STYLES";

const Home = () => (
  <MainWrapper>
    <DivWrapperEmphasis
      pageStyles={Object.assign(
        {},
        MARGIN_TOP_FULL,
        MARGIN_BOTTOM_FULL,
        MARGIN_SIDES_AUTO
      )}
    >
      <EmphasisTxt>
        The only stop needed for all your technology needs.
      </EmphasisTxt>
    </DivWrapperEmphasis>
    <PrimaryTxt
      pageStyles={Object.assign({}, MARGIN_BOTTOM_HALF, MARGIN_SIDES_AUTO)}
    >
      Thought, design, application, security and support for businesses large
      and small.
    </PrimaryTxt>
    <Shading />
    <PrimaryTxt
      pageStyles={Object.assign({}, MARGIN_TOP_HALF, MARGIN_SIDES_AUTO)}
    >
      A complete service by Busy Sprites.
    </PrimaryTxt>
  </MainWrapper>
);

export default Home;
