import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AboutPartDiv,
  AboutSliderDiv,
  Slider,
  SliderText,
  TextContent,
  TextHeader,
} from "./about.style";
import { PageContainer, PageTitle } from "layouts/layout.style";
import SwiperCore, { Pagination, Navigation } from "swiper";

import aboutImg1 from "assets/images/AboutUs/aboutus-1.webp";
import aboutImg2 from "assets/images/AboutUs/aboutus-2.webp";

SwiperCore.use([Pagination, Navigation]);

const AboutPart = () => {
  return (
    <AboutPartDiv id="about">
      <PageContainer>
        <PageTitle>About Us</PageTitle>
        <AboutSliderDiv>
          <Slider>
            <Swiper
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 100,
              }}
              // navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={aboutImg1}
                  alt="slider1"
                  objectFit="cover"
                  // width="100%"
                  // height="100%"
                  layout="responsive"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={aboutImg2}
                  alt="slider1"
                  objectFit="cover"
                  layout="responsive"
                  // width="500px"
                />
              </SwiperSlide>
            </Swiper>
          </Slider>
          <SliderText>
            <TextHeader>
              I'M A PARAGRAPH.
              <br />
            </TextHeader>
            <TextContent>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me and you can start
              adding your own content and make changes to the font. I’m a great
              place for you to tell a story and let your users know a little
              more about you.
            </TextContent>
          </SliderText>
        </AboutSliderDiv>
      </PageContainer>
    </AboutPartDiv>
  );
};

export default AboutPart;
