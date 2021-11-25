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
  max-width: 500px;
  width: 90%;
  margin: 10px 0;
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

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const AuthActionGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const AuthAction = styled.div`
  color: white;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: white;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #c0c0c0;
    ::after {
      transform: scaleX(1);
    }
  }
`;
