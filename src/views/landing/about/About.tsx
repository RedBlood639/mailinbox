import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  AboutPartDiv,
  AboutSliderDiv,
  AvatarDiv,
  GroupTitleDiv,
  MemberGroup,
  MemberGroupDiv,
  MemberItemDiv,
  Slider,
  SliderText,
  TextContent,
  TextHeader,
} from "./about.style";
import { PageContainer, PageTitle } from "layouts/layout.style";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import aboutImg1 from "assets/images/AboutUs/aboutus-1.webp";
import aboutImg2 from "assets/images/AboutUs/aboutus-2.webp";
import mem1 from "assets/images/members/1.png";
import mem2 from "assets/images/members/2.png";
import mem3 from "assets/images/members/3.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

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
                delay: 5000,
                disableOnInteraction: true,
              }}
              // navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="poster">
                  <Image
                    src={aboutImg1}
                    alt="slider1"
                    objectFit="cover"
                    // width="100%"
                    // height="100%"
                    layout="responsive"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="poster">
                  <Image
                    src={aboutImg2}
                    alt="slider1"
                    objectFit="cover"
                    layout="responsive"
                    // width="500px"
                  />
                </div>
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

        <MemberGroupDiv>
          <GroupTitleDiv>
            <div className="main_title">Our Members</div>
            <div className="sub_title">
              Contrary to popular belief, Lorem Ipsum is not simply random text
            </div>
          </GroupTitleDiv>
          <MemberGroup>
            <MemberItem img={mem1.src} name="Jamison" />
            <MemberItem img={mem2.src} name="Kim Tan" />
            <MemberItem img={mem3.src} name="Haoming" />
          </MemberGroup>
        </MemberGroupDiv>
      </PageContainer>
    </AboutPartDiv>
  );
};

export default AboutPart;

interface MemberItemProps {
  img: any;
  name: string;
}

const MemberItem = (props: MemberItemProps) => {
  return (
    <MemberItemDiv>
      <AvatarDiv>
        <img src={props.img} alt="member" />
      </AvatarDiv>

      <span>{props.name}</span>
    </MemberItemDiv>
  );
};
