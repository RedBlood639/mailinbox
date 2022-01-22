import { setLike, setUnlike } from "actions/emailActions";
import { EmailHeader } from "components/emailview/emailview.styled";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import {
  Action,
  Actions,
  LetterViewDiv,
} from "components/letterview/letterview.styled";
import React, { useEffect, useState } from "react";
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import { Text } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const PublicEmailView = ({ data, loading }: any) => {
  const [email, setEmail] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setEmail(data);
    }
  }, [data]);

  const handleLike = async () => {
    const res = await setLike(email._id, getMyInfo().email);
    setEmail(res);
  };
  const handleUnlike = async () => {
    const res = await setUnlike(email._id, getMyInfo().email);
    setEmail(res);
  };

  return !loading ? (
    email && (
      <LetterViewDiv>
        <EmailHeader>
          <Text fWeight={700} fSize={20}>
            {email.subject}
          </Text>
          <Text fColor="" wrap="nowrap">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "short",
              timeStyle: "medium",
            }).format(email.internalDate)}
          </Text>
        </EmailHeader>
        <Text mt={20} mb={10}>
          From : {email.from}
        </Text>
        <Text mt={10} mb={30}>
          to : {email.to}
        </Text>
        {getMyInfo().email !== email.from && (
          <Actions>
            <Action onClick={handleLike}>
              <Text
                fColor={
                  email.likes?.filter((like: any) => like === getMyInfo().email)
                    .length > 0
                    ? "#800000"
                    : "#5C5C5C"
                }
              >
                <BsHandThumbsUpFill />
              </Text>
              <Text
                ml={5}
                fSize={15}
                fColor={
                  email.likes?.filter((like: any) => like === getMyInfo().email)
                    .length > 0
                    ? "#800000"
                    : "#5C5C5C"
                }
              >
                {email.likes.length}
              </Text>
            </Action>
            <Action onClick={handleUnlike}>
              <Text
                fColor={
                  email.unlikes?.filter(
                    (like: any) => like === getMyInfo().email
                  ).length > 0
                    ? "#800000"
                    : "#5C5C5C"
                }
              >
                <BsHandThumbsDownFill />
              </Text>
              <Text
                ml={5}
                fSize={15}
                fColor={
                  email.unlikes?.filter(
                    (like: any) => like === getMyInfo().email
                  ).length > 0
                    ? "#800000"
                    : "#5C5C5C"
                }
              >
                {email.unlikes.length}
              </Text>
            </Action>
          </Actions>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: email.html,
          }}
          style={{ marginTop: "20px" }}
        ></div>
      </LetterViewDiv>
    )
  ) : (
    <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
      Loading ...
    </LetterListCardDiv>
  );
};

export default PublicEmailView;
