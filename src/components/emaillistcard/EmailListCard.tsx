import React from "react";
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import { Div, Text } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";
import { EmailListCardDiv, EmailListContent } from "./emaillistcard.styled";

const EmailListCard = ({ data, onClick }: any) => {
  return (
    <EmailListCardDiv onClick={onClick}>
      <Div mt={5} mb={10} justifyContent="space-between">
        <Text>
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "medium",
          }).format(data.internalDate)}
        </Text>
        {data.likes && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Text
              fColor={
                data.likes?.filter((like: any) => like === getMyInfo().email)
                  .length > 0
                  ? "#800000"
                  : ""
              }
            >
              <BsHandThumbsUpFill />
            </Text>
            <Text
              fColor={
                data.likes?.filter((like: any) => like === getMyInfo().email)
                  .length > 0
                  ? "#800000"
                  : ""
              }
              mr={10}
            >
              {data.likes.length}
            </Text>
            <Text
              fColor={
                data.unlikes?.filter((like: any) => like === getMyInfo().email)
                  .length > 0
                  ? "#800000"
                  : ""
              }
            >
              <BsHandThumbsDownFill />
            </Text>
            <Text
              fColor={
                data.unlikes?.filter((like: any) => like === getMyInfo().email)
                  .length > 0
                  ? "#800000"
                  : ""
              }
            >
              {data.unlikes.length}
            </Text>
          </div>
        )}
      </Div>
      <EmailListContent>{data.snippet}</EmailListContent>
    </EmailListCardDiv>
  );
};

export default EmailListCard;
