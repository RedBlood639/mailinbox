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
  addComment,
  oppositeLetter,
  recommendLetter,
  removeCommand,
  removeLetter,
} from "actions/letterAction";
import { Button as BsButton, Modal } from "react-bootstrap";

import { useRouter } from "next/router";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import Button from "components/button";
import Input from "components/input";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { toast } from "react-toastify";
import Loading from "components/loading";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const LetterViewCard = ({ data, loading }: any) => {
  const router = useRouter();
  const [state, setState] = useState<any>({});
  const [letterData, setLetterData] = useState<any>({});
  const [show, setShow] = useState(false);
  const [commentShow, setCommentShow] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<any>("");
  const [deleteFlag, setDeleteFlag] = useState("");
  const [commentState, setCommentState] = useState<any>({});

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
    if (deleteFlag === "letter") {
      const res = await removeLetter(letterData._id);
      if (!res.error) {
        router.back();
      }
    } else {
      const res = await removeCommand(letterData._id);
      if (res.error) {
        toast.error(res.error, {
          theme: "colored",
          autoClose: 3000,
        });
      } else {
        toast.success("A comment has removed successfully.", {
          theme: "colored",
          autoClose: 3000,
        });
        setLetterData(res);
      }
    }
  };

  const handleContentStateChange = (e: any) => {
    setCommentState({
      ...commentState,
      plainText: editorState.getCurrentContent().getPlainText(),
      htmlText: draftToHtml(e),
    });
  };

  const handleDeleteClick = (key: any) => {
    setShow(true);
    setDeleteFlag(key);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleCommentClose = () => {
    setCommentState({});
    setEditorState("");
    setCommentShow(false);
  };

  const handleCommentSave = async () => {
    if (!commentState.to) {
      toast.error("Title field is required", {
        theme: "colored",
        autoClose: 3000,
      });
    } else if (!commentState.plainText) {
      toast.error("Content field is required", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      const newData = {
        letter_id: letterData._id,
        to: commentState.to,
        from: state.email,
        plainText: commentState.plainText,
        htmlText: commentState.htmlText,
        date: new Date(),
      };
      const res = await addComment(newData);
      if (res.error) {
        toast.error(res.error, {
          theme: "colored",
          autoClose: 3000,
        });
      } else {
        setLetterData(res);
        handleCommentClose();
      }
    }
  };

  const handleRecommend = async () => {
    const res = await recommendLetter(state.email, letterData._id);
    if (res.error) {
    } else {
      setLetterData(res);
    }
  };

  const handleOpposite = async () => {
    const res = await oppositeLetter(state.email, letterData._id);
    if (res.error) {
    } else {
      setLetterData(res);
    }
  };

  const handleComment = () => {
    setCommentShow(true);
  };

  const handleEditClick = () => {
    router.push("/editletter/" + letterData._id);
  };

  const handleChange = (e: any) => {
    setCommentState({ ...state, to: e.target.value });
  };

  // const handleReport = () => {};

  return !loading ? (
    <LetterViewDiv>
      <Div justifyContent="space-between">
        <Button
          label="BACK"
          onClick={() => router.back()}
          style={{
            fSize: 20,
            fWeight: 700,
            fColor: "#FB6F6F",
            p: "7px 17px",
            bgColor: "white",
            bColor: "#C4C4C4",
            radius: 10,
          }}
        />
        <HeaderActions>
          <Badge>{letterData.stateFlag === 0 ? "PUBLISHED" : "PRIVATE"}</Badge>
          {state.email === letterData.from && (
            <>
              <GrEdit onClick={handleEditClick} />
              <RiDeleteBinLine onClick={() => handleDeleteClick("letter")} />
            </>
          )}
        </HeaderActions>
      </Div>
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
        {letterData?.comments?.length > 0 ? (
          letterData.comments.map((item: any, key: any) => (
            <React.Fragment key={key}>
              <Div mt={20} justifyContent="space-between">
                <CommentUserInfo>
                  <AvatarDiv>
                    <FiUser />
                  </AvatarDiv>
                  <div>
                    <Text fSize={24} fWeight={500}>
                      {item.to}
                    </Text>
                    <Text fSize={18} mt={5}>
                      {item.from}
                    </Text>
                  </div>
                </CommentUserInfo>
                <HeaderActions>
                  {state.email === item.from && (
                    <RiDeleteBinLine
                      onClick={() => handleDeleteClick("comment")}
                    />
                  )}
                </HeaderActions>
              </Div>
              <Div mt={20}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.htmlText,
                  }}
                ></div>
              </Div>
            </React.Fragment>
          ))
        ) : (
          <Text mt={25} fSize={20} tAlign="center">
            There is no comment yet.
          </Text>
        )}
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
          <BsButton variant="secondary" onClick={handleClose}>
            Close
          </BsButton>
          <BsButton variant="danger" onClick={handleDelete}>
            Delete
          </BsButton>
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={commentShow}
        onHide={handleCommentClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Input
            type="text"
            placeholder="Title"
            value={commentState.to}
            onChange={handleChange}
          />
          <Div mt={26} />
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            onContentStateChange={handleContentStateChange}
            editorStyle={{
              height: "300px",
              border: "1px solid #F1F1F1",
              padding: "0 5px ",
            }}
            toolbar={{
              options: [
                "inline",
                "blockType",
                "emoji",
                "fontFamily",
                "fontSize",
                "list",
                "textAlign",
                "history",
              ],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <BsButton variant="secondary" onClick={handleCommentClose}>
            Close
          </BsButton>
          <BsButton variant="danger" onClick={handleCommentSave}>
            Save
          </BsButton>
        </Modal.Footer>
      </Modal>
    </LetterViewDiv>
  ) : (
    <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
      <Loading />
    </LetterListCardDiv>
  );
};

export default LetterViewCard;
