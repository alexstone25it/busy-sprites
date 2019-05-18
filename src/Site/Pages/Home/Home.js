import React from "react";

import MainWrapper from "../../../components/wrappers/mains/MainWrapper";

import DivWrapperEmphasis from "../../../components/wrappers/divs/divWrapperEmphasis/DivWrapperEmphasis";
import EmphasisTxt from "../../../components/typography/text/paragraphs/EmphasisTxt/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/paragraphs/PrimaryTxt/PrimaryTxt";
import ButtonPrimary from "../../../components/buttons/buttonPrimary/ButtonPrimary";
import Shading from "./shading/Shading";

const Home = () => {
  const textOf = {
    textBox: "The only stop needed for all your technology needs",
    unboxedTextTop:
      "Thought, design, application, security and support for businesses large and small.",
    unboxedTextBottom: "A complete service by Busy Sprites",
    btnText: "Our Services"
  };
  return (
    <MainWrapper>
      <DivWrapperEmphasis>
        <EmphasisTxt>{textOf.textBox}</EmphasisTxt>
      </DivWrapperEmphasis>
      <PrimaryTxt>{textOf.unboxedTextTop}</PrimaryTxt>
      <Shading />
      <PrimaryTxt>{textOf.unboxedTextBottom}</PrimaryTxt>
      <ButtonPrimary diffs="fatOblong" boxshadow="boxShadowBlue">
        {textOf.btnText}
      </ButtonPrimary>
    </MainWrapper>
  );
};

export default Home;
