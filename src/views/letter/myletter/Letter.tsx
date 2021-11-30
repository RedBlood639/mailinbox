import React from "react";
import MyLetters from "./MyLetters";
import NewLetter from "./NewLetter";
import { LetterSection } from "./letter.style";

const Letter = () => {
  return (
    <LetterSection>
      <MyLetters />
      <NewLetter />
    </LetterSection>
  );
};

export default Letter;
