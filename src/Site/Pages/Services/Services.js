import React, { Component } from "react";

import Main from "../../../containers/major/Main";
import H2 from "../../../components/typography/headings/H2";
import Brand from "../../../components/typography/branding/Brand";
import TextBox from "../../../components/typography/textBox/TextBox";
import Specialisms from "./Specialisms/Specialisms";

class Services extends Component {
  render() {
    return (
      <Main>
        <H2 font="withBigSerif" color="withBlack" extras="withBlueShadow">
          Busy Sprites Services
        </H2>
        <TextBox>
          From an idea to a finished product and beyond, <Brand /> consultants
          have the skills your business needs.
        </TextBox>
        <Specialisms />
      </Main>
    );
  }
}

export default Services;
