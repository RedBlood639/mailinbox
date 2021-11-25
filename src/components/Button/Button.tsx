import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  onClick: any;
}

const ButtonDiv = styled.button`
  padding: 15px 20px;
  outline: none;
  border: 1.5px solid white;
  background: transparent;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  font-size: 16px;
  :hover {
    transition: all 0.2s;
    box-shadow: 0 0 10px #fff;
  }
`;

const Button = (props: Props) => {
  return <ButtonDiv onClick={props.onClick}>{props.label}</ButtonDiv>;
};

export default Button;
