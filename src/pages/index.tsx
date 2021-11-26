import type { NextPage } from "next";
import { PageDiv } from "layouts/layout.style";

import { WelcomePart, AboutPart, HowToPart } from "views/landing";
import React from "react";

const Home: NextPage = () => {
  return (
    <PageDiv>
      <WelcomePart />
      <AboutPart />
      <HowToPart />
    </PageDiv>
  );
};

export default Home;
