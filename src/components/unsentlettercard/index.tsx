import React, { useEffect, useState } from "react";
import { Text } from "styles/globals.styled";
import { EmptyDiv, Item, List, UnsentCard } from "./unsentletters.styled";
import EmptyImg from "assets/emptybox.svg";
import Image from "next/image";
import { getAllLetters } from "actions/letterAction";

const UnsentLetters = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllLetters();
      console.log(res);
      setData(res);
    };
    getData();
  }, []);

  return (
    <UnsentCard>
      <Text fSize={24} fWeight={500} mb={30} tAlign="center">
        Your unsent letters
      </Text>
      <List>
        {data.length > 0 ? (
          data.map((item: any, key: any) => (
            <Item key={key}>{item.plainText}</Item>
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
      </List>
    </UnsentCard>
  );
};

export default UnsentLetters;

export const UnsentEmails = () => {};
