import MyInfoCard from "components/myinfocard/MyInfoCard";
import EditLetter from "components/newletter/EditLetter";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const EditLetterPage = () => {
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <EditLetter />
            </Div>
            <Div w={30} mode="column" gap={30}>
              <MyInfoCard />
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default EditLetterPage;
