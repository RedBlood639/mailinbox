import React from "react";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";
import { GoMegaphone } from "react-icons/go";
import { AiTwotoneEdit, AiFillWechat } from "react-icons/ai";

import { OverLayout, PageContainer } from "layouts/layout.style";
import {
  // Actions,
  // HandImg,
  WelcomeCardDiv,
  // WelcomeDescPart,
  WelcomeDescription,
  WelcomePartDiv,
  WelcomePreview,
  WelcomePreviewPart,
  WelcomeText,
} from "./welcome.style";
// import { MenuItem } from "layouts/app-layout/Header/Header.style";

// import img from "assets/images/bg/handwriting.png";
// import router from "next/router";
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// install Swiper modules
SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);
const WelcomePart = () => {
  return (
    <React.Fragment>
      <WelcomePartDiv id="welcome">
        <Swiper
          speed={600}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          >
            <OverLayout />
          </div>

          <SwiperSlide>
            {/* <HandImg>
              <Image src={img} layout="intrinsic" className="image" />
            </HandImg> */}

            <WelcomeText>
              <PageContainer>
                <h1>Welcome to our site</h1>
                <h2>
                  We know sometimes how much you would like to send a letter to
                  someone or reply to that e-mail but:
                </h2>
                <ul>
                  <li>you are afraid how they would feel</li>
                  <li>you do not know how they would react</li>
                  <li>you doubt yourself if what you said is right</li>
                  <li>you fear any repercussions</li>
                  <li>
                    or it is a spur of the moment when emotions are too high and
                    you what you sent can never go unsent{" "}
                  </li>
                </ul>
                <h2>
                  Our website will let you compose a letter and will reply to
                  the e-mail without sending it. Some things are better left
                  unsaid…or not. Speak your mind.
                </h2>
              </PageContainer>
            </WelcomeText>
          </SwiperSlide>
          <SwiperSlide>
            <PageContainer>
              <WelcomePreviewPart>
                <WelcomePreview>Letter</WelcomePreview>
                <WelcomePreview>E-mail</WelcomePreview>
                <WelcomePreview>Burnbook</WelcomePreview>
              </WelcomePreviewPart>
            </PageContainer>
          </SwiperSlide>
        </Swiper>
      </WelcomePartDiv>
      <PageContainer>
        <WelcomeDescription>
          <WelcomeCard
            icon={<HiLightBulb />}
            color="#67C6FF"
            title="Branding"
            content="I’m a paragraph. Double click me or click Edit Text, it's easy."
          />
          <WelcomeCard
            icon={<GoMegaphone />}
            color="#EC457D"
            title="Storytelling"
            content="I’m a paragraph. Double click me or click Edit Text, it's easy."
          />
          <WelcomeCard
            icon={<AiTwotoneEdit />}
            color="#F7B403"
            title="Design"
            content="I’m a paragraph. Double click me or click Edit Text, it's easy."
          />
          <WelcomeCard
            icon={<AiFillWechat />}
            color="#4CC58E"
            title="Consulting"
            content="I’m a paragraph. Double click me or click Edit Text, it's easy."
          />
        </WelcomeDescription>
      </PageContainer>
    </React.Fragment>
  );
};

export default WelcomePart;

interface CardProps {
  icon?: any;
  title?: string;
  content?: string;
  color?: string;
}

export const WelcomeCard = (props: CardProps) => {
  return (
    <WelcomeCardDiv fColor={props.color}>
      <div className="card_icon">{props.icon}</div>
      <div className="card_title">{props.title}</div>
      <div className="card_content">{props.content}</div>
    </WelcomeCardDiv>
  );
};
