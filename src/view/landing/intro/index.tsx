import Button from "components/button";
import LogoSection from "components/logo";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import { Div, Text } from "styles/globals.styled";
import LandingImg from "assets/landing.svg";

const IntroSection = () => {
  const router = useRouter();
  return (
    <Div mode="column" alignItems="center" maxW={720} m="auto">
      <LogoSection m="40px 0" />
      <Text fSize={72} fWeight={900} tAlign="center">
        Publish unsent letters and emails
      </Text>
      <Text fSize={24} fWeight={500} tAlign="center" m="25px 0">
        Speak your mind here
      </Text>
      <Button
        label="Get Start"
        onClick={() => {
          router.push("/getstarted");
        }}
        style={{
          fSize: 16,
          fWeight: 700,
          fColor: "#fff",
          p: "12px 24px",
          bgColor: "#FB6F6F",
        }}
      />
      <Div mt={24}>
        <Image src={LandingImg} />
      </Div>
    </Div>
  );
};

export default IntroSection;
