import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import {
  FooterLink,
  FooterPartDiv,
  FooterPartContent,
  FooterTitle,
  FooterIcon,
} from "./Footer.style";
interface Props {
  partIcon?: any;
  title?: string;
  links?: any;
  subicon?: any;
}

const FooterPart = ({ partIcon, title, links, subicon }: Props) => {
  return (
    <FooterPartDiv>
      <FooterIcon>{partIcon}</FooterIcon>
      <FooterPartContent>
        <FooterTitle>{title}</FooterTitle>
        {links?.map((item: any, key: any) => (
          <FooterLink key={key}>{item.name}</FooterLink>
        ))}
        {subicon}
      </FooterPartContent>
    </FooterPartDiv>
  );
};

export default FooterPart;
