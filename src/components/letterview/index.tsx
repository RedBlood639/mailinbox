import {
  Badge,
  HeaderActions,
} from "components/mylettercard/mylettercard.styled";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";

import { Div, Text } from "styles/globals.styled";
import {
  Action,
  Actions,
  AvatarDiv,
  CommentPart,
  CommentUserInfo,
  LetterViewDiv,
} from "./letterview.styled";
import { getMyInfo } from "utils/getMyInfo";
import {
  oppositeLetter,
  recommendLetter,
  removeLetter,
} from "actions/letterAction";
import { Button, Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";

const LetterViewCard = ({ data, loading }: any) => {
  const router = useRouter();
  const [state, setState] = useState<any>({});
  const [letterData, setLetterData] = useState<any>({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    setState(getMyInfo());
  }, []);

  useEffect(() => {
    setLetterData(data);
  }, [data]);

  const formatDate = (date: any) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleDelete = async () => {
    const res = await removeLetter(letterData._id);
    if (!res.error) {
      router.back();
    }
  };

  const handleDeleteClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleRecommend = async () => {
    const res = await recommendLetter(state.email, letterData._id);
    if (res.error) {
    } else {
      setLetterData(res);
      console.log(res);
    }
  };

  const handleOpposite = async () => {
    const res = await oppositeLetter(state.email, letterData._id);
    if (res.error) {
    } else {
      setLetterData(res);
      console.log(res);
    }
  };

  const handleComment = () => {};

  const handleEditClick = () => {
    router.push("/editletter/" + letterData._id);
  };

  // const handleReport = () => {};

  return !loading ? (
    <LetterViewDiv>
      <HeaderActions style={{ justifyContent: "flex-end" }}>
        <Badge>{letterData.stateFlag === 0 ? "PUBLISHED" : "PRIVATE"}</Badge>
        {state.email === letterData.from && (
          <>
            <GrEdit onClick={handleEditClick} />
            <RiDeleteBinLine onClick={handleDeleteClick} />
          </>
        )}
      </HeaderActions>
      <Div justifyContent="space-between" mt={30}>
        <Text fSize={18} fWeight={500}>
          To,
          <br />
          {letterData.to}
        </Text>
        <Text fSize={18} fWeight={500}>
          Date: {formatDate(letterData.date)}
        </Text>
      </Div>
      <Div mt={40}>
        <div
          dangerouslySetInnerHTML={{
            __html: letterData.htmlText,
          }}
        ></div>
      </Div>
      <Text mt={40} fSize={18} fWeight={500}>
        From,
        <br />
        {letterData.from}
      </Text>
      {state.email !== letterData.from && (
        <Actions>
          <Action onClick={handleRecommend}>
            <Text
              fColor={
                letterData.likes?.filter(
                  (like: any) => like.email === state.email
                ).length > 0
                  ? "#800000"
                  : "#5C5C5C"
              }
            >
              <BsHandThumbsUp />
            </Text>
            <Text
              ml={5}
              fSize={15}
              fColor={
                letterData.likes?.filter(
                  (like: any) => like.email === state.email
                ).length > 0
                  ? "#800000"
                  : "#5C5C5C"
              }
            >
              Recommend
            </Text>
          </Action>
          <Action onClick={handleOpposite}>
            <Text
              fColor={
                letterData.unlikes?.filter(
                  (like: any) => like.email === state.email
                ).length > 0
                  ? "#800000"
                  : "#5C5C5C"
              }
            >
              <BsHandThumbsDown />
            </Text>
            <Text
              ml={5}
              fSize={15}
              fColor={
                letterData.unlikes?.filter(
                  (like: any) => like.email === state.email
                ).length > 0
                  ? "#800000"
                  : "#5C5C5C"
              }
            >
              Opposite
            </Text>
          </Action>
          <Action onClick={handleComment}>
            <Text fColor="#5C5C5C">
              <BiComment />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Comment
            </Text>
          </Action>
          {/* <Action onClick={handleReport}>
            <Text fColor="#5C5C5C">
              <FiFlag />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Report
            </Text>
          </Action> */}
        </Actions>
      )}

      <CommentPart>
        <CommentUserInfo>
          <AvatarDiv>
            <FiUser />
          </AvatarDiv>
          <div>
            <Text fSize={24} fWeight={500}>
              Lorem Ipsum
            </Text>
            <Text fSize={18} mt={5}>
              @loremip
            </Text>
          </div>
        </CommentUserInfo>
        <Div mt={30}>
          Sesame snaps pudding marshmallow chocolate cake toffee cookie ice
          cream tiramisu cake. Liquorice croissant jelly lemon drops jelly beans
          apple pie pudding caramels donut. Cotton candy jujubes danish cookie
          chocolate bar apple pie. Wafer croissant topping jelly bear claw
          liquorice. Shortbread soufflé marshmallow icing macaroon macaroon
          dragée. Cookie halvah bear claw gummi bears croissant tiramisu donut
          cookie. Marzipan bear claw lollipop ice cream icing candy candy canes.
          Cake muffin powder jujubes gingerbread.Marzipan bear claw lollipop ice
          cream icing candy candy canes. Cake muffin powder jujubes gingerbread.
        </Div>
      </CommentPart>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Letter!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {"You can't recovery this letter after delete. Are you sure?"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </LetterViewDiv>
  ) : (
    <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
      Loading ...
    </LetterListCardDiv>
  );
};

export default LetterViewCard;
