import React from "react";
import { LetterSection } from "../myletter/letter.style";
import LetterList from "./LetterList";
import LetterView from "./LetterView";

const PublicLetters = () => {
  return (
    <LetterSection>
      <LetterList />
      <LetterView />
    </LetterSection>
  );
};

export default PublicLetters;
