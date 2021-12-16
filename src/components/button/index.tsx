import React from "react";
import { ButtonDiv } from "./button.styled";

const Button = ({ style, onClick, label }: any) => {
  return (
    <ButtonDiv {...style} onClick={onClick}>
      {label}
    </ButtonDiv>
  );
};

export default Button;
