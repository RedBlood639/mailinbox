import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import { LetterViewDiv } from "components/letterview/letterview.styled";
import React, { useEffect, useState } from "react";
import { Div, Text } from "styles/globals.styled";
import { EmailHeader } from "./emailview.styled";

const EmailViewCard = ({ data, loading }: any) => {
  const [email, setEmail] = useState<any>(null);

  useEffect(() => {
    if (data) {
      setEmail(data);
    }
  }, [data]);

  return !loading ? (
    email && (
      <LetterViewDiv>
        <EmailHeader>
          <Text fWeight={700} fSize={20}>
            {email.headers.subject}
          </Text>
          <Text fColor="" wrap="nowrap">
            {new Intl.DateTimeFormat("en-US", {
              dateStyle: "short",
              timeStyle: "medium",
            }).format(email.internalDate)}
          </Text>
        </EmailHeader>
        <Text mt={10} mb={30}>
          From : {email.headers.from}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html: email.textHtml,
          }}
        ></div>
      </LetterViewDiv>
    )
  ) : (
    <LetterListCardDiv style={{ textAlign: "center", fontSize: 20 }}>
      Loading ...
    </LetterListCardDiv>
  );
};

export default EmailViewCard;
