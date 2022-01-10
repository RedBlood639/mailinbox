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
import { removeLetter } from "actions/letterAction";
import { Button, Modal } from "react-bootstrap";
import { useRouter } from "next/router";

const LetterViewCard = ({ data }: any) => {
  const router = useRouter();
  const [state, setState] = useState<any>({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    setState(getMyInfo());
  }, []);

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
    const res = await removeLetter(data._id);
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

  return (
    <LetterViewDiv>
      <HeaderActions style={{ justifyContent: "flex-end" }}>
        <Badge>{data.stateFlag === 0 ? "PUBLISHED" : "PRIVATE"}</Badge>
        {state.email === data.from && (
          <>
            <GrEdit onClick={() => {}} />
            <RiDeleteBinLine onClick={handleDeleteClick} />
          </>
        )}
      </HeaderActions>
      <Div justifyContent="space-between" mt={30}>
        <Text fSize={18} fWeight={500}>
          To,
          <br />
          {data.to}
        </Text>
        <Text fSize={18} fWeight={500}>
          Date: {formatDate(data.date)}
        </Text>
      </Div>
      <Div mt={40}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.htmlText,
          }}
        ></div>
      </Div>
      <Text mt={40} fSize={18} fWeight={500}>
        From,
        <br />
        {data.from}
      </Text>
      {state.email !== data.from && (
        <Actions>
          <Action>
            <Text fColor="#5C5C5C">
              <BsHandThumbsUp />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Recommend
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <BsHandThumbsDown />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Opposite
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <BiComment />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Comment
            </Text>
          </Action>
          <Action>
            <Text fColor="#5C5C5C">
              <FiFlag />
            </Text>
            <Text ml={5} fSize={15} fColor="#5C5C5C">
              Report
            </Text>
          </Action>
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
          You can't recovery this letter after delete. Are you sure?
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
  );
};

export default LetterViewCard;
