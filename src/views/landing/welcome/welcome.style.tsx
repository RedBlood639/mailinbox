import styled from "styled-components";
import bg from "assets/images/bg/bg.png";
import { Props } from "layouts/layout.style";

export const WelcomePartDiv = styled.div`
  position: relative;
  /* background: url(${bg.src}) no-repeat; */
  background-attachment: fixed;
  background-size: cover;
  min-height: calc(100vh - 91px);
  height: 100%;
  /* height: calc(100vh - 72px); */
  .mySwiper {
    min-height: calc(100vh - 91px);
    --swiper-navigation-color: #fff;
    --swiper-pagination-color: "#fff";
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 40px 60px;
  }

  .parallax-bg {
    background: url(${bg.src}) no-repeat;
    /* background-attachment: fixed;
    background-size: 200%; */
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }

  .swiper-slide .subtitle {
    font-size: 21px;
  }

  .swiper-slide {
    padding: 0 !important;
    /* background-color: rgb(0, 0, 0, 0.5); */
  }

  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
`;

export const HandImg = styled.div`
  width: 50%;
  position: absolute;
  bottom: -4px;
`;

export const WelcomeText = styled.div`
  transform: rotate3d(1, 1, 1, -10deg);
  text-shadow: 0 20px 10px #000;
  color: white;
  width: 100%;

  min-height: calc(100vh - 91px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 5vw;
    font-weight: 900;
    transition: all 0.2s;
    margin-top: 10px;
  }
  h2 {
    font-size: 2vw;
    font-weight: 900;
    transition: all 0.2s;
  }
  ul {
    font-size: 1.5vw;
    font-weight: 700;
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 20px;
    }
    ul {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 18px;
    }
    ul {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 16px;
    }
    ul {
      font-size: 14px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
  padding-top: 30px;
  @media screen and (max-width: 425px) {
    div {
      font-size: 16px;
    }
  }
`;

export const WelcomeDescPart = styled.div`
  padding: 70px 0;
  /* background-color: white; */
`;

export const WelcomeDescription = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5%;
  padding: 70px 0;
  transition: all 0.2s;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 90px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WelcomeCardDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  background-color: ${({ fColor }) => fColor + "30"};
  box-shadow: 0 0 10px ${({ fColor }) => fColor + "30"};
  border-radius: 100px 100px 50px 50px;
  .card_icon {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    border-radius: 50%;
    background-color: ${({ fColor }) => fColor + "aa"};
    margin-top: -40px;
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

export const WelcomePreviewPart = styled.div`
  color: white;
  width: 100%;
  min-height: calc(100vh - 91px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WelcomePreview = styled.div`
  min-height: calc(100vh - 91px);
  width: 100%;
  display: flex;

  align-items: center;
  #previewpart {
    display: flex;
    justify-content: space-between;
    & > *:not(:last-child) {
      margin-right: 5%;
    }
  }
`;

export const PreviewDiv = styled.div`
  background-color: rgba(165, 99, 99, 0.3);
  padding: 20px 30px;
  border-radius: 20px;
  /* box-shadow: 0 0 20px rgba(65, 46, 46, 0.5); */
  color: white;
  min-width: 280px;
  max-width: 340px;
  width: 100%;
  transition: all 0.2s;

  h1 {
    margin: 10px 0;
    font-weight: 900;
    font-family: Damion;
    border-bottom: 2px solid white;
    font-size: 40px;
  }
  :hover {
    transform: scale(1.02);
    background-color: rgba(117, 16, 16, 0.3);
    box-shadow: 0 0 30px rgba(54, 17, 17, 1);
  }
  .preview_desc {
    font-size: 20px;
    line-height: 30px;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    float: right;
    padding-top: 20px;
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
  }
`;
