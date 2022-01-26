import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import Button from "components/button";
import LogoSection from "components/logo";
import { useAuthContext } from "context/state";
import { Text } from "styles/globals.styled";
import { ToastContainer, toast } from "react-toastify";
import {
  HeaderDiv,
  LogDropDownDiv,
  MyInfoDiv,
  LogoutText,
  MenuDiv,
  LogoutDiv,
} from "./header.styled";
import { logout } from "actions/authActions";
import { getMyInfo } from "utils/getMyInfo";
import { FiUser } from "react-icons/fi";

const HeaderSection = () => {
  const router = useRouter();
  const [path, setPath] = useState<string>("");
  const { authContext, setAuthContext } = useAuthContext();

  const dropdownRef = useRef<any>(null);

  const [state, setState] = useState<any>({ name: "", email: "" });

  const [dropdownFlag, setDrowdownFlag] = useState(false);

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return;
    }
    setDrowdownFlag(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    const user = getMyInfo();
    if (user.error) {
      setState({
        ...state,
        name: user.fName + " " + user.lName,
        email: user.email,
      });
    } else {
      setState({
        ...state,
        name: user.fName + " " + user.lName,
        email: user.email,
      });
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.pathname.search(/letter/i) > -1) {
      setPath("letter");
    } else if (router.pathname.search(/email/i) > -1) {
      setPath("email");
    } else if (router.pathname.search(/e_published/i) > -1) {
      setPath("e_published");
    } else {
      setPath("home");
    }
  }, [router.pathname]);

  const handleLogout = async () => {
    const res = await logout(getMyInfo().email);
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

  const handleDropDown = async () => {
    setDrowdownFlag((prev) => !prev);
  };

  return (
    <>
      <ToastContainer />
      <HeaderDiv>
        <LogoSection onClick={() => router.push("/")} />
        <MenuDiv>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/myletters")}
            className={path === "letter" ? "active" : ""}
          >
            My Letters
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/myemails")}
            className={path === "email" ? "active" : ""}
          >
            My Emails
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/home")}
            className={path === "home" ? "active" : ""}
          >
            Public Letters
          </Text>
          <Text
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/e_published")}
            className={path === "e_published" ? "active" : ""}
          >
            Public Emails
          </Text>
          {/* <Button
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
          /> */}
          <LogoutDiv ref={dropdownRef}>
            <MyInfoDiv onClick={handleDropDown}>
              <FiUser />
            </MyInfoDiv>
            <LogDropDownDiv flag={dropdownFlag}>
              <Text fSize={20}>{state.name}</Text>
              <Text fSize={16} mt={10}>
                {state.email}
              </Text>
              <hr />
              <LogoutText onClick={handleLogout}>Logout</LogoutText>
            </LogDropDownDiv>
          </LogoutDiv>
        </MenuDiv>
      </HeaderDiv>
    </>
  );
};

export default HeaderSection;
