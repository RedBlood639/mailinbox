import {
  AvatarDiv,
  UserInfo,
} from "components/letterlistcard/letterlistcard.styled";
import {
  Badge,
  HeaderActions,
} from "components/mylettercard/mylettercard.styled";
import React from "react";
import { FiUser } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { Div, Text } from "styles/globals.styled";
import { CommentPart, LetterViewDiv } from "./letterview.styled";

const LetterViewCard = () => {
  return (
    <LetterViewDiv>
      <HeaderActions style={{ justifyContent: "flex-end" }}>
        <Badge>PRIVATE</Badge>
        <GrEdit />
        <RiDeleteBinLine />
      </HeaderActions>
      <Div justifyContent="space-between" mt={30}>
        <Text fSize={18} fWeight={500}>
          To,
          <br />
          Lorem Ipsum
        </Text>
        <Text fSize={18} fWeight={700}>
          Date: 12-12-2021
        </Text>
      </Div>
      <Div mt={40}>
        Sesame snaps pudding marshmallow chocolate cake toffee cookie ice cream
        tiramisu cake. Liquorice croissant jelly lemon drops jelly beans apple
        pie pudding caramels donut. Cotton candy jujubes danish cookie chocolate
        bar apple pie. Wafer croissant topping jelly bear claw liquorice.
        Shortbread soufflé marshmallow icing macaroon macaroon dragée. Cookie
        halvah bear claw gummi bears croissant tiramisu donut cookie. Marzipan
        bear claw lollipop ice cream icing candy candy canes. Cake muffin powder
        jujubes gingerbread.Marzipan bear claw lollipop ice cream icing candy
        candy canes. Cake muffin powder jujubes gingerbread.
      </Div>
      <Text mt={40} fSize={18} fWeight={500}>
        From,
        <br />
        Lorem Ipsum
      </Text>
      <CommentPart>
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
      </CommentPart>
    </LetterViewDiv>
  );
};

export default LetterViewCard;
