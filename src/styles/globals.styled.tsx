import styled from "styled-components";
import { StyleProps } from "types";

export const Container = styled.div<StyleProps>`
  width: 95%;
  max-width: ${({ maxW }) => (maxW ? maxW : 1240)}px;
  margin: auto;
`;

export const Text = styled.div<StyleProps>`
  line-height: 105%;
  word-break: break-word;
  white-space: ${({ wrap }) => wrap};
  font-size: ${({ fSize }) =>
    "clamp(" +
    Number(fSize) / 2 +
    "px, 6vw, " +
    fSize +
    "px)"}; //clamp(24px, 6vw, 40px);
  color: ${({ fColor }) => (fColor ? fColor : "#000")};
  font-weight: ${({ fWeight }) => fWeight};
  text-align: ${({ tAlign }) => tAlign};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-right: ${({ pr }) => pr}px;
  padding-left: ${({ pl }) => pl}px;
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
`;

export const Div = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${({ mode }) => (mode ? mode : "row")};
  width: ${({ w }) => (w ? w + "%" : "100%")};
  max-width: ${({ maxW }) => maxW}px;
  min-width: ${({ minW }) => minW}px;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt}px;
  padding-bottom: ${({ pb }) => pb}px;
  padding-right: ${({ pr }) => pr}px;
  padding-left: ${({ pl }) => pl}px;
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
  & > *:not(:first-child) {
    ${({ mode, gap }) =>
      mode === "row" || !mode
        ? "margin-left: " + gap + "px"
        : "margin-top: " + gap + "px"};
  }
`;

export const HomeContainer = styled.div`
  padding: 130px 0 50px 0;
  background-color: #e5e5e5;
  min-height: 100vh;
`;
