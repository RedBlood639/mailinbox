import { setLike, setUnlike } from "actions/emailActions";
import Button from "components/button";
import { ActionDiv, EmailHeader } from "components/emailview/emailview.styled";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import {
  Action,
  Actions,
  LetterViewDiv,
} from "components/letterview/letterview.styled";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import { Div, Text } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const PublicEmailView = ({ data, loading }: any) => {
  const [email, setEmail] = useState<any>(null);
  const router = useRouter();

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
        {getMyInfo().email !== email.from && (
          <Div gap={10} mb={20} justifyContent="space-between">
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
            <ActionDiv>
              <Action onClick={handleLike}>
                <Text
                  fColor={
                    email.likes?.filter(
                      (like: any) => like === getMyInfo().email
                    ).length > 0
                      ? "#800000"
                      : "#181616"
                  }
                >
                  <BsHandThumbsUpFill />
                </Text>
                <Text
                  ml={5}
                  fSize={15}
                  fColor={
                    email.likes?.filter(
                      (like: any) => like === getMyInfo().email
                    ).length > 0
                      ? "#800000"
                      : "#181616"
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
            </ActionDiv>
          </Div>
        )}
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
