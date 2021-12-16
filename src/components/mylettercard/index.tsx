import React from "react";
import { Text } from "styles/globals.styled";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import {
  Badge,
  CardContent,
  CardFooter,
  CardHeader,
  CommentAction,
  HeaderActions,
  MyletterCardDiv,
} from "./mylettercard.styled";

const MyLetterCard = () => {
  return (
    <MyletterCardDiv>
      <CardHeader>
        <Text>To, Lorem Ispum</Text>
        <HeaderActions>
          <Badge>FOR FRIEND</Badge>
          <GrEdit />
          <RiDeleteBinLine />
        </HeaderActions>
      </CardHeader>
      <CardContent>
        Sesame snaps pudding marshmallow chocolate cake toffee cookie ice cream
        tiramisu cake. Liquorice croissant jelly lemon drops jelly beans apple
        pie pudding caramels donut. Cotton candy jujubes danish cookie chocolate
        bar apple pieSesame snaps pudding marshmallow chocolate cake toffee
        cookie ice cream tiramisu cake. Liquorice croissant jelly lemon drops
        jelly beans apple pie pudding caramels donut. Cotton candy jujubes
        danish cookie chocolate bar apple pie
      </CardContent>
      <CardFooter>
        <CommentAction>
          <BiComment />5 Comments
        </CommentAction>
      </CardFooter>
    </MyletterCardDiv>
  );
};

export default MyLetterCard;
