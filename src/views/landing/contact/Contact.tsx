import React from "react";
import Image from "next/image";

import { HiArrowRight } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import {
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsDiscord,
} from "react-icons/bs";
import Input, { TextArea } from "components/Input/Input";
import { Button } from "components/Button";

import {
  ContactForm,
  WelcomeContactPart,
  ContactDiv,
  ContactPartDiv,
  ContactTextDiv,
  SocialIconGroup,
} from "./contact.style";
import { OverLayout } from "layouts/layout.style";
import { MenuItem } from "layouts/app-layout/Header/Header.style";

import contactBG from "assets/images/bg/bg-1.jpg";

const ContactPart = () => {
  return (
    <ContactPartDiv id="contact">
      <Image src={contactBG} alt="bg" objectFit="cover" layout="fill" />
      <OverLayout>
        <ContactDiv>
          <ContactTextDiv>
            <div className="w_title">
              Things you want to say in that e-mail but couldn't.
            </div>
            <div className="w_subtitle">
              Letters you wish you sent but didn't.{" "}
            </div>
            <MenuItem>
              <div className="link_item">
                Go to Sign in <HiArrowRight />
              </div>
            </MenuItem>
            <SocialIconGroup>
              <BsLinkedin />
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsDiscord />
            </SocialIconGroup>
          </ContactTextDiv>
          <WelcomeContactPart>
            <ContactForm>
              <div className="form_title">Send us a message</div>
              <Input
                label="Your Name"
                type="text"
                value=""
                onChange={() => {}}
                placeholder="Your Name"
                name="name"
              />
              <Input
                label="Your Email"
                type="text"
                value=""
                onChange={() => {}}
                placeholder="Your Email"
                name="email"
              />
              <TextArea
                label="Message"
                value=""
                onChange={() => {}}
                placeholder="Message"
                name="name"
              />
              <Button
                label={
                  <>
                    Send
                    <FiSend />
                  </>
                }
                onClick={() => {}}
              />
            </ContactForm>
          </WelcomeContactPart>
        </ContactDiv>
      </OverLayout>
    </ContactPartDiv>
  );
};

export default ContactPart;
