import React, { useEffect, useState } from "react";
import { Div, Text } from "styles/globals.styled";
import { EmptyDiv, Item, List, UnsentCard } from "./unsentletters.styled";
import EmptyImg from "assets/emptybox.svg";
import Image from "next/image";
import { getAllLetters } from "actions/letterAction";
import { SearchInput } from "components/SearchBox/searchbox.styled";
import { getMyInfo } from "utils/getMyInfo";
import { useRouter } from "next/router";
import Loading from "components/loading";

const UnsentLetters = () => {
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getAllLetters();
      console.log(res);
      setData(
        res.filter(
          (item: any) => item.stateFlag === 1 && item.from === getMyInfo().email
        )
      );
      setFilterData(
        res.filter(
          (item: any) => item.stateFlag === 1 && item.from === getMyInfo().email
        )
      );

      setLoading(false);
    };
    getData();
  }, []);

  const handleFilter = (e: any) => {
    console.log(
      data.filter((item: any) => item.plainText.includes(e.target.value))
    );
    setFilterData(
      data.filter((item: any) => item.plainText.includes(e.target.value))
    );
  };

  return (
    <UnsentCard>
      <Text fSize={24} fWeight={500} mb={30} tAlign="center">
        Your unsent letters
      </Text>
      <Div p="0 20px" mb={20}>
        <SearchInput style={{ width: "100%" }}>
          <input type="text" placeholder="Search ..." onChange={handleFilter} />
        </SearchInput>
      </Div>
      <List>
        {loading ? (
          <Loading />
        ) : (
          <>
            {filterData.length > 0 ? (
              filterData.map((item: any, key: any) => (
                <Item
                  key={key}
                  onClick={() => router.push("/editletter/" + item._id)}
                >
                  {item.plainText}
                </Item>
              ))
            ) : (
              <>
                <EmptyDiv>
                  <Image src={EmptyImg} alt="empty" />
                </EmptyDiv>
                <Text
                  fSize={16}
                  fColor="#5C5C5C"
                  p="0 20px"
                  fWeight={500}
                  tAlign="center"
                >
                  {"You don't have any emails yet. Create one."}
                </Text>
              </>
            )}
          </>
        )}
      </List>
    </UnsentCard>
  );
};

export default UnsentLetters;

// export const UnsentEmails = () => {};
