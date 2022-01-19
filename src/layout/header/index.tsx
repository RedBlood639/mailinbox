import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Button from "components/button";
import LogoSection from "components/logo";
import { useAuthContext } from "context/state";
import { Text } from "styles/globals.styled";
import { ToastContainer, toast } from "react-toastify";
import { HeaderDiv, MenuDiv } from "./header.styled";
import { logout } from "actions/authActions";

const HeaderSection = () => {
  const router = useRouter();
  const [path, setPath] = useState<string>("");
  const { authContext, setAuthContext } = useAuthContext();

  useEffect(() => {
    if (router.pathname.search(/letter/i) > -1) {
      setPath("letter");
    } else if (router.pathname.search(/email/i) > -1) {
      setPath("email");
    } else {
      setPath("home");
    }
  }, [router.pathname]);

  const handleLogout = async () => {
    const res = await logout();
    if (res.success) {
      localStorage.removeItem("user");
      setAuthContext({
        ...authContext,
        isAuthenticated: false,
        user: "",
      });
      router.push("/");
    } else {
      toast.error(res.error, { theme: "colored", autoClose: 3000 });
    }
  };

  return (
    <>
      <ToastContainer />
      <HeaderDiv>
        <LogoSection onClick={() => router.push("/")} />
        <MenuDiv>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/home")}
            className={path === "home" ? "active" : ""}
          >
            Home
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/myletters")}
            className={path === "letter" ? "active" : ""}
          >
            Letter
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/myemails")}
            className={path === "email" ? "active" : ""}
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
              ml: 20,
            }}
          />
        </MenuDiv>
      </HeaderDiv>
    </>
  );
};

export default HeaderSection;
