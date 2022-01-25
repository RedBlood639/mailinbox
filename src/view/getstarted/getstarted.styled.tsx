import styled from "styled-components";

export const GetStartedSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GetStartedImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background-color: #ef4646;
  cursor: pointer;
`;

export const GetStartText = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 30px auto;
  justify-content: center;
`;
