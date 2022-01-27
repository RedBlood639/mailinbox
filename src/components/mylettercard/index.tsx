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
import { useRouter } from "next/router";

const MyLetterCard = ({ data, onClick, onDelete }: any) => {
  const router = useRouter();
  return (
    <>
      <MyletterCardDiv>
        <CardHeader>
          <Text onClick={onClick} fWeight={500}>
            To, {data.to}
          </Text>
          <HeaderActions>
            <Badge>{data.stateFlag === 0 ? "Published" : "Private"}</Badge>
            <GrEdit onClick={() => router.push("/editletter/" + data._id)} />
            <RiDeleteBinLine onClick={() => onDelete(data._id)} />
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
    </>
  );
};

export default MyLetterCard;
