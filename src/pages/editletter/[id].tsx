import { getLetterById } from "actions/letterAction";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import EditLetter from "components/newletter/EditLetter";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";

const EditLetterPage = () => {
  const [state, setstate] = useState<any>({});
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const res = await getLetterById(router.query.id);
      setstate(res);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <EditLetter data={state} />
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
