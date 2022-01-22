import React from "react";
import { EmailListCardDiv, EmailListContent } from "./emaillistcard.styled";

const EmailListCard = ({ data, onClick }: any) => {
  return (
    <EmailListCardDiv onClick={onClick}>
      <p>
        {new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
          timeStyle: "medium",
        }).format(data.internalDate)}
      </p>
      <EmailListContent>{data.snippet}</EmailListContent>
    </EmailListCardDiv>
  );
};

export default EmailListCard;
