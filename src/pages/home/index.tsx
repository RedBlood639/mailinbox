import { getAllLetters } from "actions/letterAction";
import LetterListCard from "components/letterlistcard";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import PlusButton from "components/plusbtn";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";

const HomePage = () => {
  const [letters, setLetters] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleAddClick = () => {
    router.push("/newletter");
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const letters = await getAllLetters();
      setLetters(letters);
      setLoading(false);
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
                <PlusButton onClick={handleAddClick} />
              </Div>
              {loading ? (
                <LetterListCardDiv
                  style={{ textAlign: "center", fontSize: 20 }}
                >
                  Loading ...
                </LetterListCardDiv>
              ) : (
                <>
                  {letters.length > 0 ? (
                    letters.map((item: any, key: any) => (
                      <LetterListCard key={key} data={item} />
                    ))
                  ) : (
                    <LetterListCardDiv
                      style={{ textAlign: "center", fontSize: 20 }}
                    >
                      No Data
                    </LetterListCardDiv>
                  )}
                </>
              )}
            </Div>
            <Div w={30} mode="column" gap={30}>
              <UnsentLetters />
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default HomePage;
