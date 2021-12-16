import React from "react";
import { Text } from "styles/globals.styled";
import { EmptyDiv, Item, List, UnsentCard } from "./unsentletters.styled";
import EmptyImg from "assets/emptybox.svg";
import Image from "next/image";

const UnsentLetters = () => {
  return (
    <UnsentCard>
      <Text fSize={24} fWeight={500} mb={30} tAlign="center">
        Your unsent letters
      </Text>
      {/* <List>
        <Item>asdf</Item>
        <Item>asdf</Item>
        <Item>asdf</Item>
        <Item>asdf</Item>
        <Item>asdf</Item>
      </List> */}
      <EmptyDiv>
        <Image src={EmptyImg} />
      </EmptyDiv>
      <Text
        fSize={16}
        fColor="#5C5C5C"
        p="0 20px"
        fWeight={500}
        tAlign="center"
      >
        You don't have any emails yet. Create one.
      </Text>
    </UnsentCard>
  );
};

export default UnsentLetters;
