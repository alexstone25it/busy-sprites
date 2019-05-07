import React from "react";

import H2 from "../../../components/typography/headings/H2";
import H3 from "../../../components/typography/headings/H3";
import Main from "../../../components/wrappers/Main";
import Section from "../../../components/wrappers/Section";
import BlueWrapper from "../../../components/wrappers/BlueWrapper";
import EmphasisTxt from "../../../components/typography/text/EmphasisTxt";
import PrimaryTxt from "../../../components/typography/text/PrimaryTxt";
import Portraits from "./portraits/Portraits";
import PicSet from "./picSet/PicSet";

const About = () => (
  <Main>
    <H2 font="withBigSerif" color="withBlack" extras="withBlueShadow">
      About Busy Sprites
    </H2>
    <BlueWrapper>
      <EmphasisTxt>
        Our commitment is to deliver your specifications on time and on budget.{" "}
        <br />
        <br />
        Our aim is to exceed your expectations.
      </EmphasisTxt>
    </BlueWrapper>

    <Section>
      <PrimaryTxt>
        The broad range of skill sets we can provide allow our customers the
        most complete information technology service available.
      </PrimaryTxt>
      <H3 font="withMediumSansSerif" color="withDarkBlue">
        Our Team
      </H3>
      <Portraits />
      <PrimaryTxt>
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </PrimaryTxt>
      <PicSet />
    </Section>
  </Main>
);

export default About;
