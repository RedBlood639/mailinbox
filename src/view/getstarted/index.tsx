import Image from "next/image";
import React from "react";
import { GetStartedImg } from "./getstarted.styled";

import Img from "assets/getStarted.svg";

const GetStartSection = () => {
  return (
    <GetStartedImg>
      <Image src={Img} alt="getstarted" />
    </GetStartedImg>
  );
};

export default GetStartSection;
