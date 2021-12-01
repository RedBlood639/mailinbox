import React, { useState } from "react";
import {
  BsFillEyeFill,
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import { HoDivider } from "layouts/layout.style";
import { letters } from "data";
import {
  LetterContent,
  Title,
  LetterInfo,
  LetterItem,
  LetterTitle,
} from "../myletter/letter.style";
import {
  FilterItem,
  LetterFilterDiv,
  LetterListDiv,
  LetterListSection,
  LikeDiv,
  LikeUnlike,
} from "./public.style";

const LetterList = () => {
  const [filter, setFilter] = useState("newest");
  return (
    <LetterListSection>
      <LetterFilterDiv>
        <FilterItem
          active={filter === "newest" ? true : false}
          onClick={() => setFilter("newest")}
        >
          Newest
        </FilterItem>
        <FilterItem
          active={filter === "popular" ? true : false}
          onClick={() => setFilter("popular")}
        >
          Popular
        </FilterItem>
      </LetterFilterDiv>
      <LetterListDiv>
        {letters.map((item: any, key: any) => (
          <LetterItem key={key}>
            <LetterTitle>
              <Title>{item.title}</Title>
            </LetterTitle>
            <LetterContent>{item.plaintext}</LetterContent>
            <LetterInfo>
              <LikeUnlike>
                <LikeDiv done="eye">
                  <BsFillEyeFill />
                  <span>3</span>
                </LikeDiv>
                <HoDivider height={20} bgColor="gray" />
                <LikeDiv done="like">
                  <BsFillHandThumbsUpFill />
                  <span>3</span>
                </LikeDiv>
                <HoDivider height={20} bgColor="gray" />
                <LikeDiv done="unlike">
                  <BsFillHandThumbsDownFill />
                  <span>5</span>
                </LikeDiv>
              </LikeUnlike>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
              }).format(item.date)}
            </LetterInfo>
          </LetterItem>
        ))}
      </LetterListDiv>
    </LetterListSection>
  );
};

export default LetterList;
