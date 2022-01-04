import React from "react";
import Image from "next/image";

import LogoImg from "assets/logo/logo.svg";
import { Div } from "styles/globals.styled";

const LogoSection = (props: any) => {
  return (
    <Div {...props} maxW={200} onClick={props.onClick}>
      <Image src={LogoImg} alt="logo" />
    </Div>
  );
};

export default LogoSection;
