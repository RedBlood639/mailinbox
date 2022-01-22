import { getPublicEmails } from "actions/emailActions";
import EmailListCard from "components/emaillistcard/EmailListCard";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import LinkEmailCard from "components/linkemail";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const PublicEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailData, setEmailData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getPublicEmails();
      setEmailData(res);
      setLoading(false);
    };
    getData();
  }, []);

  const handleClick = (id: any) => {
    router.push("/e_published/" + id);
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
                <LinkEmailCard onClick={() => {}} />
              </Div>
              {loading ? (
                <LetterListCardDiv
                  style={{ textAlign: "center", fontSize: 20 }}
                >
                  Loading ...
                </LetterListCardDiv>
              ) : (
                <>
                  {emailData.length > 0 ? (
                    emailData.map((item: any, key: any) => (
                      <EmailListCard
                        key={key}
                        onClick={() => handleClick(item._id)}
                        data={{
                          ...item,
                          internalDate: Date.parse(item.publishDate),
                        }}
                      />
                    ))
                  ) : (
                    <LetterListCardDiv
                      style={{ textAlign: "center", fontSize: 20 }}
                    >
                      {"No Data"}
                    </LetterListCardDiv>
                  )}
                </>
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

export default PublicEmail;
