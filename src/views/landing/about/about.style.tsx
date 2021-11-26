import styled from "styled-components";
import Image from "next/image";

export const AboutPartDiv = styled.div`
  /* background-color: rgb(188, 0, 0); */
  padding: 50px 0;
`;

export const AboutSliderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Slider = styled.div`
  margin: 30px 0;
  max-width: 500px;
  width: 100%;
  .swiper-button-next {
    color: rgb(147, 0, 0) !important;
  }
  .swiper-button-prev {
    color: rgb(147, 0, 0) !important;
  }
  .swiper-pagination-bullet-active {
    background: rgb(147, 0, 0);
  }
  box-shadow: 0 0 10px rgb(60, 0, 0);
  .poster {
    position: relative;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
    filter: saturate(70%) contrast(85%);
    &:before,
    &:after {
      content: "";
      width: 100%;
      left: 0;
      position: absolute;
    }
    &:before {
      height: 4%;
      bottom: -4%;
      background-repeat: no-repeat;
      background-image: linear-gradient(
          177deg,
          rgba(0, 0, 0, 0.22) 10%,
          transparent 50%
        ),
        linear-gradient(-177deg, rgba(0, 0, 0, 0.22) 10%, transparent 50%);
      background-size: 49% 100%;
      background-position: 2% 0, 98% 0;
    }
    &:after {
      height: 100%;
      top: 0;
      z-index: 2;
      background-repeat: no-repeat;
      background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.1) 0.5%,
          rgba(0, 0, 0, 0.15) 1.2%,
          transparent 1.2%
        ),
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.1) 0.5%,
          rgba(0, 0, 0, 0.15) 1.2%,
          transparent 1.2%
        ),
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.1) 0.5%,
          rgba(0, 0, 0, 0.15) 1.2%,
          transparent 1.2%
        ),
        linear-gradient(265deg, rgba(0, 0, 0, 0.2), transparent 10%),
        linear-gradient(5deg, rgba(0, 0, 0, 0.2), transparent 15%),
        linear-gradient(-5deg, rgba(0, 0, 0, 0.1), transparent 10%),
        linear-gradient(5deg, rgba(0, 0, 0, 0.1), transparent 10%),
        linear-gradient(-265deg, rgba(0, 0, 0, 0.2), transparent 10%),
        linear-gradient(-5deg, rgba(0, 0, 0, 0.2), transparent 15%),
        linear-gradient(266deg, rgba(0, 0, 0, 0.2), transparent 10%);
      background-size: 50% 100%, 100% 33.3333%, 100% 33.3333%, 50% 33.3333%,
        50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%, 50% 33.3333%,
        50% 33.3333%;
      background-position: right top, left center, left bottom, left top,
        left top, right top, left center, right center, right center,
        left bottom;
    }
  }
`;

export const SliderText = styled.div`
  color: white;
  padding: 30px 0;
`;

export const TextHeader = styled.div`
  text-transform: uppercase;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: 20px 0;
  font-size: 26px;
  font-weight: 700;
`;

export const TextContent = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-top: 30px;
  line-height: 35px;
`;

export const MemberGroupDiv = styled.div`
  color: #fff;
  margin: 20px 0;
`;

export const GroupTitleDiv = styled.div`
  text-align: center;
  .main_title {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  .sub_title {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const MemberGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const AvatarDiv = styled.div`
  outline: 2px solid white;
  border: 20px solid rgb(188, 0, 0);
  position: relative;
  border-radius: 50%;
  contain: content;
  width: 200px;
  height: 200px;
  transition: all 0.2s;
  :hover {
    background-color: #000;
    img {
      transform: scale(1.2);
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: 0.2s all;
  }
`;

export const MemberItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
  }
`;
