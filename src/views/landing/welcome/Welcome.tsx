import React from "react";
import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";
import { GoMegaphone } from "react-icons/go";
import { AiTwotoneEdit, AiFillWechat } from "react-icons/ai";

import { OverLayout, PageContainer } from "layouts/layout.style";
import {
  Actions,
  HandImg,
  WelcomeCardDiv,
  WelcomeDescPart,
  WelcomeDescription,
  WelcomePartDiv,
  WelcomeText,
} from "./welcome.style";
import { MenuItem } from "layouts/app-layout/Header/Header.style";

import img from "assets/images/bg/handwriting.png";
import router from "next/router";

const WelcomePart = () => {
  return (
    <React.Fragment>
      <WelcomePartDiv id="welcome">
        <OverLayout>
          <HandImg>
            <Image src={img} layout="intrinsic" className="image" />
          </HandImg>
          <WelcomeText>
            <h1>Welcome To Our Site</h1>
            <h2>Things you want to say in that e-mail but couldn't.</h2>
            <Actions>
              <MenuItem
                fSize={20}
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Go to sign in
              </MenuItem>
              <MenuItem
                fSize={20}
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Create new account
              </MenuItem>
            </Actions>
          </WelcomeText>
        </OverLayout>
      </WelcomePartDiv>
      <WelcomeDescPart>
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
              title="Branding"
              content="I’m a paragraph. Double click me or click Edit Text, it's easy."
            />
            <WelcomeCard
              icon={<AiTwotoneEdit />}
              color="#F7B403"
              title="Branding"
              content="I’m a paragraph. Double click me or click Edit Text, it's easy."
            />
            <WelcomeCard
              icon={<AiFillWechat />}
              color="#4CC58E"
              title="Branding"
              content="I’m a paragraph. Double click me or click Edit Text, it's easy."
            />
          </WelcomeDescription>
        </PageContainer>
      </WelcomeDescPart>
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
