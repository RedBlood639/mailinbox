import { getAllLetters } from "actions/letterAction";
import LetterListCard from "components/letterlistcard";
import PlusButton from "components/plusbtn";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import SearchBox from "components/SearchBox";
import { getMyInfo } from "utils/getMyInfo";

const HomePage = () => {
  const [letters, setLetters] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [fitlerData, setFitlerData] = useState<any>([]);
  const router = useRouter();
  const handleAddClick = () => {
    router.push("/newletter");
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const letters = await getAllLetters();
      setLetters(letters.filter((item: any) => item.stateFlag === 0));
      setFitlerData(letters.filter((item: any) => item.stateFlag === 0));
      setLoading(false);
    };
    getData();
  }, []);

  const selectFilterChanged = async (e: any) => {
    switch (e.value) {
      case "all":
        setFitlerData(letters);
        break;
      case "my":
        setFitlerData(
          letters.filter((item: any) => item.to === getMyInfo().email)
        );
        break;
      case "popular":
        const temp1 = letters;
        await temp1.sort((a: any, b: any) => a.publisher - b.publisher);
        setFitlerData(temp1.reverse());

        break;
      case "newest":
        break;
      case "latest":
        break;
      default:
        break;
    }
  };

  const inputFilterChanged = (e: any) => {
    const temp_str = e.target.value.toLowerCase();
    setFitlerData(
      letters.filter(
        (item: any) =>
          item.from.toLowerCase().includes(temp_str) ||
          item.to.toLowerCase().includes(temp_str) ||
          item.plainText.toLowerCase().includes(temp_str)
      )
    );
  };

  return (
    <React.Fragment>
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <Div justifyContent="space-between" gap={20} alignItems="center">
                <SearchBox
                  options={[
                    { value: "all", label: "All" },
                    { value: "my", label: "My Emails" },
                    { value: "popular", label: "Popular" },
                    { value: "newest", label: "Newest" },
                    { value: "latest", label: "Latest" },
                  ]}
                  onSelectChange={selectFilterChanged}
                  onInputChange={inputFilterChanged}
                />
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
                  {fitlerData.length > 0 ? (
                    fitlerData.map((item: any, key: any) => (
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
              {/* <UnsentLetters /> */}
            </Div>
          </Div>
        </Container>
      </HomeContainer>
    </React.Fragment>
  );
};

export default HomePage;
