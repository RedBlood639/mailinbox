import Button from "components/button";
import LogoSection from "components/logo";
import React from "react";
import { Text } from "styles/globals.styled";
import { HeaderDiv, MenuDiv } from "./header.styled";

const HeaderSection = () => {
  return (
    <HeaderDiv>
      <LogoSection />
      <MenuDiv>
        <Text>asdf</Text>
        <Text>asdf</Text>
        <Text>asdf</Text>
        <Button
          label="Logout"
          onClick={() => {}}
          style={{
            fSize: 24,
            fWeight: 700,
            fColor: "#fff",
            p: "10px 19px",
            bgColor: "#D30505",
            radius: 12,
          }}
        />
      </MenuDiv>
    </HeaderDiv>
  );
};

export default HeaderSection;
