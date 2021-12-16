import React from "react";
import { FiUser } from "react-icons/fi";
import { Div, Text } from "styles/globals.styled";
import {
  AvatarDiv,
  LetterListCardDiv,
  ListContentText,
  UserInfo,
} from "./letterlistcard.styled";

const LetterListCard = () => {
  return (
    <LetterListCardDiv>
      <UserInfo>
        <AvatarDiv>
          <FiUser />
        </AvatarDiv>
        <Div mode="column">
          <Text fColor="#191D21" fSize={24} fWeight={500}>
            Lorem Ipsum
          </Text>
          <Text fColor="#191D21" fSize={18} mt={10}>
            Lorem Ipsum
          </Text>
        </Div>
      </UserInfo>
      <ListContentText>
        Sesame snaps pudding marshmallow chocolate cake toffee cookie ice cream
        tiramisu cake. Liquorice croissant jelly lemon drops jelly beans apple
        pie pudding caramels donut. Cotton candy jujubes danish cookie chocolate
        bar apple pie Sesame snaps pudding marshmallow chocolate cake toffee
        cookie ice cream tiramisu cake. Liquorice croissant jelly lemon drops
        jelly beans apple pie pudding caramels donut. Cotton candy jujubes
        danish cookie chocolate bar apple pie
      </ListContentText>
    </LetterListCardDiv>
  );
};

export default LetterListCard;
