import { FooterSection } from "layout";
import type { NextPage } from "next";
import { Container } from "styles/globals.styled";
import { IntroSection } from "view/landing";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <IntroSection />
      </Container>
      <FooterSection />
    </>
  );
};

export default Home;
