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
  icon?: any;
  label?: string;
}

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    display: block;
    color: white;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 16px;
  }
  input {
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
      <span>{props.label}</span>
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
