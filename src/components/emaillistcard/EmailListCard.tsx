import React from "react";
import { EmailListCardDiv } from "./emaillistcard.styled";

const EmailListCard = ({ data }: any) => {
  return (
    <EmailListCardDiv>
      {/* <p>{new Intl.DateTimeFormat("en-US").format(data)}</p> */}
      {data.snippet}
    </EmailListCardDiv>
  );
};

export default EmailListCard;
