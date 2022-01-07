import { getMyLetters } from "actions/letterAction";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import MyLetterCard from "components/mylettercard";
import PlusButton from "components/plusbtn";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const MyLettersPage = () => {
  const [state, setState] = useState<any>([]);
  const router = useRouter();

  const handlePlusClick = () => {
    router.push("/newletter");
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getMyLetters(getMyInfo().email);
      setState(res);
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
                <PlusButton onClick={handlePlusClick} />
              </Div>
              {state.map((item: any, key: any) => (
                <MyLetterCard
                  key={key}
                  data={item}
                  onClick={() => router.push("/letter/" + item._id)}
                />
              ))}
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
