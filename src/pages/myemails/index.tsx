import { getMessages, gmailAuth } from "actions/emailActions";
import EmailListCard from "components/emaillistcard/EmailListCard";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import LinkEmailCard from "components/linkemail";
import SearchBox from "components/SearchBox";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const MyEmailePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [msgData, setMsgData] = useState<any>([]);
  const [fitlerData, setFitlerData] = useState<any>([]);
  const router = useRouter();

  const handleLinkEmail = async () => {
    const res = await gmailAuth(getMyInfo().email);
    location.href = res.authUrl;
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getMessages(getMyInfo().email);
      console.log(res);
      if (res.error) {
        setMsgData([]);
        setFitlerData([]);
      } else {
        setMsgData(res.messages);
        setFitlerData(res.messages);
      }
      setLoading(false);
    };
    setLoading(true);
    getData();
  }, []);

  const handleClick = (id: any) => {
    router.push("/email/" + id);
  };

  const selectFilterChanged = async (e: any) => {
    switch (e.value) {
      case "all":
        setFitlerData(msgData);
        break;
      case "my":
        setFitlerData(
          msgData.filter((item: any) => item.from === getMyInfo().email)
        );
        break;
      case "popular":
        const temp1 = msgData;
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
      msgData.filter(
        (item: any) =>
          item.from.toLowerCase().includes(temp_str) ||
          item.to.toLowerCase().includes(temp_str) ||
          item.snippet.toLowerCase().includes(temp_str)
        // item.snippet.toLowerCase().includes(temp_str)
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
                    { value: "newest", label: "Newest" },
                    { value: "latest", label: "Latest" },
                  ]}
                  onSelectChange={selectFilterChanged}
                  onInputChange={inputFilterChanged}
                />
                <LinkEmailCard onClick={handleLinkEmail} />
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
                      <EmailListCard
                        key={key}
                        data={item}
                        onClick={() => handleClick(item.id)}
                      />
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

export default MyEmailePage;
