import React from "react";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";

import { Badge, PageTitle } from "layouts/layout.style";
import {
  LetterContent,
  LetterEvents,
  LetterInfo,
  LetterItem,
  LetterTitle,
  MyLettersSection,
  TitleDiv,
} from "./letter.style";
import { letters } from "data";

const MyLetters = () => {
  return (
    <MyLettersSection>
      <TitleDiv>
        <PageTitle fColor="rgb(0,30,60)" textTransform="none">
          My Letters
        </PageTitle>
      </TitleDiv>
      {letters
        .filter((item: any) => item.email === "albinorabbithunter@gmail.com")
        .map((item: any, key: any) => (
          <LetterItem key={key}>
            <LetterTitle>
              {item.title}
              {item.flag === 1 && <Badge type="primary">Public</Badge>}
              {item.flag === 2 && <Badge type="secondary">Private</Badge>}
              {item.flag === 3 && <Badge type="error">Draft</Badge>}
            </LetterTitle>
            <LetterContent>{item.content}</LetterContent>
            <LetterInfo>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
              }).format(item.date)}
              <LetterEvents>
                <RiEditLine />
                <RiDeleteBin6Line />
              </LetterEvents>
            </LetterInfo>
          </LetterItem>
        ))}
    </MyLettersSection>
  );
};

export default MyLetters;
