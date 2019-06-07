import React from "react";

import PrimaryH2 from "../../../components/typography/text/headers/h2/PrimaryH2";
import Brand from "../../../components/typography/branding/Brand";
import EmphasisContainer from "../../../components/boxes/EmphasisContainer";
import EmphasisTxt from "../../../components/typography/text/text/EmphasisTxt";
import Accordion from "../../../components/accordion/Accordion";

import { SPECIALISMS_ARRAY } from "./DATA/SPECIALISMS_ARRAY";

const Services = () => (
  <main className="flex--col margins--top-full margins--bottom-full">
    <PrimaryH2>Busy Sprites Services</PrimaryH2>
    <section className="flex--col margins--top-full">
      <EmphasisContainer alter="margins--bottom-full margins--lr-any">
        <EmphasisTxt>
          From an idea to a finished product and beyond, <Brand /> consultants
          have the skills your business needs.
        </EmphasisTxt>
      </EmphasisContainer>
      <div className="flex--col">
        <Accordion
          dataArray={SPECIALISMS_ARRAY}
          className="margins--right-full margins--left-full"
        />
      </div>
    </section>
  </main>
);

export default Services;
