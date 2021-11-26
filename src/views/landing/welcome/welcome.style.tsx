import styled from "styled-components";
import bg from "assets/images/bg/bg.jpg";
import { Props } from "layouts/layout.style";

export const WelcomePartDiv = styled.div`
  position: relative;
  background: url(${bg.src}) no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: calc(100vh - 122px);
`;

export const HandImg = styled.div`
  width: 50%;
  position: absolute;
  bottom: -4px;
`;

export const WelcomeText = styled.div`
  position: absolute;
  top: 10vh;
  text-align: center;
  color: white;
  h1 {
    font-size: 60px;
    font-weight: 900;
  }
  h2 {
    font-size: 40px;
    font-weight: 900;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
  padding-top: 30px;
`;

export const WelcomeDescPart = styled.div`
  padding: 70px 0;
  /* background-color: white; */
`;

export const WelcomeDescription = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
`;

export const WelcomeCardDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  background-color: ${({ fColor }) => fColor};
  box-shadow: 0 0 10px ${({ fColor }) => fColor};
  border-radius: 10px 10px 50px 50px;
  .card_icon {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    border-radius: 50%;
    background-color: ${({ fColor }) => fColor};
    margin-top: -50px;
    box-shadow: 0 0 10px #eee;
  }
  .card_title {
    margin-top: 30px;
    font-size: 30px;
    font-weight: 700;
  }
  .card_content {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding: 25px 20px;
    line-height: 30px;
  }
`;
