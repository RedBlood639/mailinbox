import NewEmailCard from "components/newemail";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const NewEmailPage = () => {
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column">
              <NewEmailCard />
            </Div>
            <Div w={30} mode="column" gap={30}>
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default NewEmailPage;
