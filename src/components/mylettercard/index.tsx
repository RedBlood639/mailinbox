import React, { useEffect } from "react";
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

const MyLetterCard = ({ data, onClick }: any) => {
  return (
    <MyletterCardDiv>
      <CardHeader>
        <Text onClick={onClick}>To, {data.to}</Text>
        <HeaderActions>
          <Badge>{data.stateFlag === 0 ? "Published" : "Private"}</Badge>
          <GrEdit />
          <RiDeleteBinLine />
        </HeaderActions>
      </CardHeader>
      <CardContent onClick={onClick}>{data.plainText}</CardContent>
      <CardFooter>
        <CommentAction onClick={onClick}>
          <BiComment />
          {data.comments.length} Comments
        </CommentAction>
      </CardFooter>
    </MyletterCardDiv>
  );
};

export default MyLetterCard;
