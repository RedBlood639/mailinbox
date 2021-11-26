import styled from "styled-components";

export const AboutPartDiv = styled.div`
  background-color: rgb(188, 0, 0);
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
