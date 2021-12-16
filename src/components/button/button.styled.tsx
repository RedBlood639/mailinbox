import styled from "styled-components";
import { StyleProps } from "types";

export const ButtonDiv = styled.div<StyleProps>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  font-size: ${({ fSize }) => fSize}px;
  color: ${({ fColor }) => (fColor ? fColor : "#000")};
  font-weight: ${({ fWeight }) => fWeight};
  text-align: ${({ tAlign }) => tAlign};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
  border-radius: ${({ radius }) => radius}px;
  border: 1px solid ${({ bColor, bgColor }) => (bColor ? bColor : bgColor)};
  svg {
    margin: 0 14px;
  }
  transition: 0.2s;
  :hover {
    background-color: ${({ bgColor }) => bgColor + "dd"};
    border: 1px solid
      ${({ bColor, bgColor }) => (bColor ? bColor : bgColor + "dd")};
  }
`;
