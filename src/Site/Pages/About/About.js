import React from "react";

import H2 from "../../../components/typography/headings/H2";
import H3 from "../../../components/typography/headings/H3";
import Main from "../../../components/wrappers/Main";
import Section from "../../../components/wrappers/Section";
import TextBox from "../../../components/typography/textBox/TextBox";
import UnboxedText from "../../../components/typography/unboxedText/UnboxedText";
import Portraits from "./portraits/Portraits";
import PicSet from "./picSet/PicSet";

const About = () => (
  <Main>
    <H2 font="withBigSerif" color="withBlack" extras="withBlueShadow">
      About Busy Sprites
    </H2>
    <TextBox>
      Our commitment is to deliver your specifications on time and on budget.{" "}
      <br />
      <br />
      Our aim is to exceed your expectations.
    </TextBox>

    <Section>
      <UnboxedText>
        The broad range of skill sets we can provide allow our customers the
        most complete information technology service available.
      </UnboxedText>
      <H3 font="withMediumSansSerif" color="withDarkBlue">
        Our Team
      </H3>
      <Portraits />
      <UnboxedText>
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </UnboxedText>
      <PicSet />
    </Section>
  </Main>
);

export default About;
