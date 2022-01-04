import React from "react";
import { PlusButtonDiv } from "./plusbtn.styled";
import { AiOutlinePlus } from "react-icons/ai";

const PlusButton = ({ onClick }: any) => {
  return (
    <PlusButtonDiv onClick={onClick}>
      <AiOutlinePlus />
    </PlusButtonDiv>
  );
};

export default PlusButton;
