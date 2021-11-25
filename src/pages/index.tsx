import type { NextPage } from "next";
import { PageContainer } from "layouts/layout.style";

import { WelcomePart, AboutPart, HowToPart } from "views/landing";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <WelcomePart />
      <AboutPart />
      <HowToPart />
    </PageContainer>
  );
};

export default Home;
