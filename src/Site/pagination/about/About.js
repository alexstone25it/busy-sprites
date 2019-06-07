import React from "react";

import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import PrimaryH3 from "../../../components/typography/text/headers/h3/PrimaryH3";
import EmphasisTxt from "../../../components/typography/text/text/EmphasisTxt";
import NormalTxt from "../../../components/typography/text/text/NormalTxt";
import EmphasisContainer from "../../../components/boxes/EmphasisContainer";
import Portraits from "../../../components/portraits/Portraits";
import GridPicSet from "../../../components/gridPicSet/GridPicSet";

import { PICTURE_GRID_INFO } from "./DATA/IMAGE_DATA";
import { CONSULTANTS_ARRAY } from "./DATA/CONSULTANTS_ARRAY";

const About = () => (
  <main className="flex--col margins--top-full margins--bottom-full">
    <PrimaryH2 alter="margins--bottom-full">About Busy Sprites</PrimaryH2>
    <EmphasisContainer alter="margins--bottom-half margins--lr-any">
      <EmphasisTxt>
        Our commitment is to deliver your specifications on time and on budget.
      </EmphasisTxt>
    </EmphasisContainer>
    <EmphasisContainer alter="margins--lr-any">
      <EmphasisTxt>Our aim is to exceed your expectations.</EmphasisTxt>
    </EmphasisContainer>
    <NormalTxt alter="margins--top-full margins--lr-any">
      The broad range of skill sets we can provide allow our customers the most
      complete information technology service available.
    </NormalTxt>
    <section className="margins--top-full margins--bottom-full">
      <PrimaryH3 alter="margins--left-full margins--bottom-half">
        Our Team
      </PrimaryH3>
      <Portraits dataArray={CONSULTANTS_ARRAY} />
      <NormalTxt alter="margins--top-half margins--bottom-half margins--lr-any">
        <span>We invest in our people. </span>
        <br />
        <span>So you can get tomorrow's technology today.</span>
      </NormalTxt>
    </section>
    <GridPicSet dataArray={PICTURE_GRID_INFO} />
  </main>
);

export default About;
