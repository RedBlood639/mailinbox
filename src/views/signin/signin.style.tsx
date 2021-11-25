import styled from "styled-components";

import BG from "assets/images/bg/bg.jpg";

export const AuthPage = styled.div`
  /* background-color: rgb(188, 0, 0); */
  background-image: url(${BG.src});
  background-size: cover;
  background-repeat: no-repeat;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthDiv = styled.div`
  max-width: 600px;
  width: 90%;
  background-color: rgba(166, 0, 0, 0.7);
  box-shadow: 0 0 1em #222;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(20px);
`;

export const AuthTitle = styled.div`
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 30px;
  color: white;
`;

export const AuthFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const AuthActionGroup = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;
