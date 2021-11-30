import React from "react";

import styled from "styled-components";

interface ButtonProps {
  label?: any | undefined;
  style?: StyleProps;
}

interface StyleProps {
  size?: string; // md, sm, lg
  type?: string; // primary, danger, warning, success
  circle?: number;
  shadow?: boolean;
}

const CustomButton = (props: ButtonProps) => {
  return <CustomButtonDiv {...props.style}>{props.label}</CustomButtonDiv>;
};

export default CustomButton;

const CustomButtonDiv = styled.div<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
  ${({ size }) => {
    let sizeStyle = "";
    switch (size) {
      case "sm":
        sizeStyle += "font-size: 14px;";
        sizeStyle += "padding: 10px;";
        return sizeStyle;
      case "md":
        sizeStyle += "font-size: 16px;";
        sizeStyle += "padding: 12px;";
        return sizeStyle;
      case "lg":
        sizeStyle += "font-size: 18px;";
        sizeStyle += "padding: 14px;";
        return sizeStyle;
      default:
        sizeStyle += "font-size: 16px;";
        sizeStyle += "padding: 12px;";
        return sizeStyle;
    }
  }}
  ${({ type }) => {
    let typeStyle = "";
    typeStyle += "color: white;";
    switch (type) {
      case "primary":
        typeStyle += "background: #0062cc;";
        typeStyle += ":hover{ background: #0062ccdf;};";
        return typeStyle;
      case "success":
        typeStyle += "background: #28a745;";
        typeStyle += ":hover{ background: #28a745df;};";
        return typeStyle;
      case "error":
        typeStyle += "background: #dc3545;";
        typeStyle += ":hover{ background: #dc3545df;};";
        return typeStyle;
      case "warning":
        typeStyle += "background: #ffc107;";
        typeStyle += ":hover{ background: #ffc107df;};";
        return typeStyle;
      default:
        typeStyle += "background: rgb(0,30,60);";
        typeStyle += ":hover{ background: rgba(0,30,60, 0.9);};";
        return typeStyle;
    }
  }};
  border-radius: ${({ circle }) => (circle ? circle : 0)}px;
  box-shadow: ${({ shadow }) => (shadow ? "0 0 10px #00000040" : "none")};
`;
