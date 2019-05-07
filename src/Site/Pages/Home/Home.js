import React from "react";

import Main from "../../../components/wrappers/Main";

import TextBox from "../../../components/typography/textBox/TextBox";
import UnboxedText from "../../../components/typography/unboxedText/UnboxedText";
import Button from "../../../components/buttons/button/Button";
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
      <TextBox>{textOf.textBox}</TextBox>
      <UnboxedText>{textOf.unboxedTextTop}</UnboxedText>
      <Shading />
      <UnboxedText>{textOf.unboxedTextBottom}</UnboxedText>
      <Button type="general" extras="fatOblong">
        {textOf.btnText}
      </Button>
    </Main>
  );
};

export default Home;
