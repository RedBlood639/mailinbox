import { useRouter } from "next/router";
import React from "react";
import { EmailListCardDiv, EmailListContent } from "./emaillistcard.styled";

const EmailListCard = ({ data }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/email/" + data.id);
  };
  return (
    <EmailListCardDiv onClick={handleClick}>
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
