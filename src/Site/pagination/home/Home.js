import React from "react";

import EmphasisContainer from "../../../components/boxes/EmphasisContainer";
import NormalTxt from "../../../components/typography/text/text/NormalTxt";
import EmphasisTxt from "../../../components/typography/text/text/EmphasisTxt";
import Shading from "./shadedContent/ShadedContent";
import Brand from "../../../components/typography/branding/Brand";

const Home = () => (
  <main className="flex--col margins--top-full margins--bottom-full">
    <EmphasisContainer alter="margins--bottom-full margins--lr-any">
      <EmphasisTxt>
        The only stop needed for all your technology needs.
      </EmphasisTxt>
    </EmphasisContainer>
    <section>
      <NormalTxt alter="margins--bottom-full margins--lr-any">
        Thought, design, application, security and support for businesses large
        and small.
      </NormalTxt>
      <Shading />
      <NormalTxt alter=" margins--top-full margins--lr-any">
        A complete service by <br />
        <Brand />.
      </NormalTxt>
    </section>
  </main>
);

export default Home;
