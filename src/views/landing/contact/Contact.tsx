import React, { useState } from "react";
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
import { OverLayout, PageContainer } from "layouts/layout.style";
import { MenuItem } from "layouts/app-layout/Header/Header.style";

const ContactPart = () => {
  const [state, setState] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <ContactPartDiv id="contact">
      <OverLayout>
        <PageContainer>
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
                  value={state.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  name="name"
                />
                <Input
                  label="Your Email"
                  type="text"
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  name="email"
                />
                <TextArea
                  label="Message"
                  value={state.message}
                  onChange={handleChange}
                  placeholder="Message"
                  name="message"
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
        </PageContainer>
      </OverLayout>
    </ContactPartDiv>
  );
};

export default ContactPart;
