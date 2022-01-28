import { getPublicEmails } from "actions/emailActions";
import EmailListCard from "components/emaillistcard/EmailListCard";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import Loading from "components/loading";
import SearchBox from "components/SearchBox";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const PublicEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [emailData, setEmailData] = useState<any>([]);
  const [fitlerData, setFitlerData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getPublicEmails();
      setEmailData(res);
      setFitlerData(res);
      setLoading(false);
    };
    getData();
  }, []);

  // const GetSortOrder = (prop: any) => {
  //   return (a: any, b: any) => {
  //     if (a[prop] > b[prop]) {
  //       return 1;
  //     } else if (a[prop] < b[prop]) {
  //       return -1;
  //     }
  //     return 0;
  //   };
  // };

  const selectFilterChanged = async (e: any) => {
    switch (e.value) {
      case "all":
        setFitlerData(emailData);
        break;
      case "my":
        setFitlerData(
          emailData.filter((item: any) => item.to === getMyInfo().email)
        );
        break;
      case "popular":
        const temp1 = emailData;
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
      emailData.filter(
        (item: any) =>
          item.from.toLowerCase().includes(temp_str) ||
          item.to.toLowerCase().includes(temp_str) ||
          item.subject.toLowerCase().includes(temp_str) ||
          item.snippet.toLowerCase().includes(temp_str)
      )
    );
  };

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
              <Div w={100}>
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
              </Div>
              {loading ? (
                <LetterListCardDiv
                  style={{ textAlign: "center", fontSize: 20 }}
                >
                  <Loading />
                </LetterListCardDiv>
              ) : (
                <>
                  {fitlerData.length > 0 ? (
                    fitlerData.map((item: any, key: any) => (
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
