/**
 * @import
 */

import React from "react";
import styled from "styled-components";
import { ButtonProps } from "types/types";

/**
 * @define Styled-components
 */

const ButtonDiv = styled.div`
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  svg {
    margin-left: 10px;
    color: white;
  }
  padding: 15px 20px;
  outline: none;
  border: 1.5px solid white;
  background: transparent;
  border-radius: 10px;
  font-weight: 700;
  color: white;
  font-size: 16px;
  cursor: pointer;
  :hover {
    transition: all 0.2s;
    box-shadow: 0 0 10px #fff;
  }
`;

/**
 * @define Main component
 */

const Button = (props: ButtonProps) => {
  return <ButtonDiv onClick={props.onClick}>{props.label}</ButtonDiv>;
};

export default Button;
