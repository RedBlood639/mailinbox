import MyInfoCard from "components/myinfocard/MyInfoCard";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

import { useRouter } from "next/router";
import LetterViewCard from "components/letterview";
import { getLetterById } from "actions/letterAction";

const LetterPage = () => {
  const [state, setstate] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getLetterById(router.query.id);
      setstate(res);
      setLoading(false);
    };
    if (router.query.id) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.id]);
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <LetterViewCard data={state} loading={loading} />
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

export default LetterPage;
