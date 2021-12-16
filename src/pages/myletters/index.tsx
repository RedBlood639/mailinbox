import MyInfoCard from "components/myinfocard/MyInfoCard";
import MyLetterCard from "components/mylettercard";
import PlusButton from "components/plusbtn";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const MyLettersPage = () => {
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <Div justifyContent="space-between" alignItems="center">
                <MyInfoCard />
                <PlusButton />
              </Div>
              <MyLetterCard />
              <MyLetterCard />
              <MyLetterCard />
              <MyLetterCard />
              <MyLetterCard />
              <MyLetterCard />
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

export default MyLettersPage;
