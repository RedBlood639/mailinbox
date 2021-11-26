import type { NextPage } from "next";
import { PageDiv } from "layouts/layout.style";

import { ContactPart, AboutPart, HowToPart } from "views/landing";
import React from "react";

const Home: NextPage = () => {
  return (
    <PageDiv>
      <HowToPart />
      <AboutPart />
      <ContactPart />
    </PageDiv>
  );
};

export default Home;
