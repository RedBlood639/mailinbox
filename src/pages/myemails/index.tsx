import { gmailAuth } from "actions/emailActions";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import LinkEmailCard from "components/linkemail";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const MyEmailePage = () => {
  const handleLinkEmail = async () => {
    const res = await gmailAuth();
    location.href = res.authUrl;
  };

  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <Div justifyContent="space-between" alignItems="center">
                <MyInfoCard />
                <LinkEmailCard onClick={handleLinkEmail} />
              </Div>
              <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
                No Data
              </LetterListCardDiv>
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

export default MyEmailePage;
