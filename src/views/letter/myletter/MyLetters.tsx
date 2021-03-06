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
  Title,
  TitleDiv,
} from "./letter.style";
import { letters } from "data";

const MyLetters = () => {
  return (
    <MyLettersSection>
      <TitleDiv>
        {/*fColor="rgb(0,30,60)" */}
        <PageTitle textTransform="none">My Letters</PageTitle>
      </TitleDiv>
      {letters
        .filter((item: any) => item.email === "albinorabbithunter@gmail.com")
        .map((item: any, key: any) => (
          <LetterItem key={key}>
            <LetterTitle>
              <Title>{item.title}</Title>
              {item.flag === 1 && <Badge type="primary">Public</Badge>}
              {item.flag === 2 && <Badge type="secondary">Private</Badge>}
              {item.flag === 3 && <Badge type="error">Draft</Badge>}
            </LetterTitle>
            <LetterContent>{item.plaintext}</LetterContent>
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
