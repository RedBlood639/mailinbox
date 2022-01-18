import React from "react";
import { EmailListCardDiv } from "./emaillistcard.styled";

const EmailListCard = ({ data }: any) => {
  return (
    <EmailListCardDiv>
      <p>{new Date(data.internalDate)}</p>
      {data.snippet}
    </EmailListCardDiv>
  );
};

export default EmailListCard;
