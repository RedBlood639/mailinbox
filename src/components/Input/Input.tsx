import React from "react";
import styled from "styled-components";

interface Props {
  type: string;
  value: string;
  name?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  onChange?: any;
}

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  input {
    width: 100%;
    background: transparent;
    outline: none;
    border: 1.5px solid #fff;
    border-radius: 10px;
    padding: 15px 20px;
    color: white;
    font-size: 16px;
    :focus {
      transition: all 0.5s;
      border-color: white;
      box-shadow: 0 0 10px #fff;
    }
  }
`;

const Input = (props: Props) => {
  return (
    <InputDiv>
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        id={props.id}
      />
    </InputDiv>
  );
};

export default Input;
