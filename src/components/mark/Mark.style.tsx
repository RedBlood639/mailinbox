import styled from "styled-components";

export const MarkDiv = styled.div`
  display: inline-block;
  font-weight: 900;
  font-size: 30px;

  text-shadow: #111 0 0 1px, rgba(255, 255, 255, 0.1) 0 1px 3px;
  text-transform: uppercase;
  /* transition: margin-left 0.3s cubic-bezier(0, 1, 0, 1); */
  transition: all 0.2s;
  :hover {
    text-shadow: #bbb 0 0 1px, #fff 0 -1px 2px, #fff 0 -3px 2px,
      rgba(0, 0, 0, 0.8) 0 10px 25px;
    margin-left: 2px;
    /* transition: margin-left 1s cubic-bezier(0, 0.75, 0, 1); */
  }
  cursor: pointer;
`;
