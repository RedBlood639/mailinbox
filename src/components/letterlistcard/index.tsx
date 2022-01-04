import Router, { useRouter } from "next/router";
import React from "react";
import { FiUser } from "react-icons/fi";
import { Div, Text } from "styles/globals.styled";
import {
  AvatarDiv,
  LetterListCardDiv,
  ListContentText,
  UserInfo,
} from "./letterlistcard.styled";

const LetterListCard = ({ data }: any) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push("/letter/" + id);
  };
  return (
    <LetterListCardDiv onClick={() => handleClick(data._id)}>
      <UserInfo>
        <AvatarDiv>
          <FiUser />
        </AvatarDiv>
        <Div mode="column">
          <Text fColor="#191D21" fSize={24} fWeight={500}>
            {data.to}
          </Text>
          <Text fColor="#191D21" fSize={18} mt={10}>
            {data.from}
          </Text>
        </Div>
      </UserInfo>
      <ListContentText>{data.plainText}</ListContentText>
    </LetterListCardDiv>
  );
};

export default LetterListCard;
