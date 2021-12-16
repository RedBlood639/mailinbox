import React from "react";
import { AvatarDiv, MyInfoCardDiv } from "./myinfocard.styled";
import { FiUser } from "react-icons/fi";
import { Div, Text } from "styles/globals.styled";

const MyInfoCard = () => {
  return (
    <MyInfoCardDiv>
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
    </MyInfoCardDiv>
  );
};

export default MyInfoCard;
