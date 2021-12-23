import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Button from "components/button";
import LogoSection from "components/logo";
import { useAuthContext } from "context/state";
import { Text } from "styles/globals.styled";
import { HeaderDiv, MenuDiv } from "./header.styled";

const HeaderSection = () => {
  const router = useRouter();
  const { authContext, setAuthContext } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuthContext({
      ...authContext,
      isAuthenticated: false,
      user: "",
    });
    router.push("/");
  };

  return (
    <HeaderDiv>
      <LogoSection />
      <MenuDiv>
        <Text>asdf</Text>
        <Text>asdf</Text>
        <Text>asdf</Text>
        <Button
          label="Logout"
          onClick={handleLogout}
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
