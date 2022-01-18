import { getMessages, gmailAuth } from "actions/emailActions";
import EmailListCard from "components/emaillistcard/EmailListCard";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import LinkEmailCard from "components/linkemail";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const MyEmailePage = () => {
  const [msgData, setMsgData] = useState<any>([]);
  const handleLinkEmail = async () => {
    const res = await gmailAuth();
    location.href = res.authUrl;
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getMessages();
      // console.log(res.messages);
      if (res.error) {
        // console.log(res);
      } else {
        setMsgData(res.messages);
      }
    };
    getData();
  }, []);

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
              {msgData.length > 0 ? (
                msgData.map((item: any, key: any) => (
                  <EmailListCard key={key} data={item} />
                ))
              ) : (
                <LetterListCardDiv
                  style={{ textAlign: "center", fontSize: 20 }}
                >
                  {
                    'Please Click the "Link Your Email With us" to Connect to your email indox'
                  }
                </LetterListCardDiv>
              )}
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
