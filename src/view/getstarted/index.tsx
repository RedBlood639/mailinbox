import Image from "next/image";
import React from "react";
import { GetStartedImg } from "./getstarted.styled";
import Img from "assets/getStarted.svg";
import { useRouter } from "next/router";

const GetStartSection = () => {
  const router = useRouter();
  return (
    <GetStartedImg
      onClick={() => {
        router.push("/");
      }}
    >
      <Image src={Img} alt="getstarted" />
    </GetStartedImg>
  );
};

export default GetStartSection;
