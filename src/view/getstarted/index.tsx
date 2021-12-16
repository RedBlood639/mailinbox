import Image from "next/image";
import React from "react";
import { GetStartedImg } from "./getstarted.styled";

import Img from "assets/getStarted.svg";

const GetStartSection = () => {
  return (
    <GetStartedImg>
      <Image src={Img} />
    </GetStartedImg>
  );
};

export default GetStartSection;
