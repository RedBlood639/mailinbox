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
      <LogoSection onClick={() => router.push("/")} />
      <MenuDiv>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/home")}
        >
          Home
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/myletters")}
        >
          Letter
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/myemails")}
        >
          Email
        </Text>
        <Button
          label="Logout"
          onClick={handleLogout}
          style={{
            fSize: 16,
            fWeight: 700,
            fColor: "#fff",
            p: "10px 14px",
            bgColor: "#D30505",
            radius: 12,
          }}
        />
      </MenuDiv>
    </HeaderDiv>
  );
};

export default HeaderSection;
