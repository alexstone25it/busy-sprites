import React from "react";

import Main from "../../../components/wrappers/Main";

import BlueWrapper from "../../../components/wrappers/BlueWrapper";
import EmphasisTxt from "../../../components/typography/text/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/PrimaryTxt";
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
    <Main display="withflexCol" extras="centerText">
      <BlueWrapper>
        <EmphasisTxt>{textOf.textBox}</EmphasisTxt>
      </BlueWrapper>
      <PrimaryTxt>{textOf.unboxedTextTop}</PrimaryTxt>
      <Shading />
      <PrimaryTxt>{textOf.unboxedTextBottom}</PrimaryTxt>
      <ButtonPrimary diffs="fatOblong" boxshadow="boxShadowBlue">
        {textOf.btnText}
      </ButtonPrimary>
    </Main>
  );
};

export default Home;
