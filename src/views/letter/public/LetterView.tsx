import { letters } from "data";
import { HoDivider, PageTitle } from "layouts/layout.style";
import React from "react";
import {
  BsFillEyeFill,
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { LetterContent, LetterInfo, TitleDiv } from "../myletter/letter.style";
import {
  LetterViewContent,
  LetterViewSection,
  LikeDiv,
  LikeUnlike,
} from "./public.style";

const LetterView = () => {
  return (
    <LetterViewSection>
      <TitleDiv>
        <PageTitle fColor="rgb(0, 30, 60)" textTransform="none">
          {letters[letters.length - 1].title}
        </PageTitle>
      </TitleDiv>
      <LetterViewContent>
        <LetterContent
          full={true}
          dangerouslySetInnerHTML={{
            __html: letters[letters.length - 1].htmlcontent,
          }}
        />
        <LetterInfo>
          <LikeUnlike>
            <div>{letters[0].email}</div>
            <HoDivider height={20} bgColor="gray" mg="0px 10px" />
            <div>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
              }).format(letters[0].date)}
            </div>
          </LikeUnlike>
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
        </LetterInfo>
      </LetterViewContent>
    </LetterViewSection>
  );
};

export default LetterView;
