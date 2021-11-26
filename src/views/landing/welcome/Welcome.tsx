import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import {
  ContactForm,
  WelcomeContactPart,
  WelcomeDiv,
  WelcomePartDiv,
  WelcomeTextDiv,
} from "./welcome.style";
import { OverLayout } from "layouts/layout.style";
import { AuthActionGroup } from "views/signin/signin.style";
import { Button } from "components/Button";
import { MenuItem } from "layouts/app-layout/Header/Header.style";
import Input, { TextArea } from "components/Input/Input";

const WelcomePart = () => {
  return (
    <WelcomePartDiv>
      <OverLayout>
        <WelcomeDiv>
          <WelcomeTextDiv>
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
          </WelcomeTextDiv>
          <WelcomeContactPart>
            <ContactForm>
              <div className="form_title">Contact us</div>
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
        </WelcomeDiv>
      </OverLayout>
    </WelcomePartDiv>
  );
};

export default WelcomePart;
