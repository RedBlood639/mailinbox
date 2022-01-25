import React from "react";
import { InputDiv } from "./input.styled";

const Input = (props: any) => {
  return (
    <InputDiv style={props.style}>
      {props.label}
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        disabled={props.disabled}
      />
    </InputDiv>
  );
};

export default Input;
