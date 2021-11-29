import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import {
  AvatarAction,
  AvatarDropDownSection,
  HeaderAvatar,
  HeaderMenuItem,
  HomeHeaderSection,
  Info,
  UserInfo,
} from "./header.style";

import { HoDivider, VeDivider } from "layouts/layout.style";

import avatar from "assets/images/members/3.jpg";
import router from "next/router";

const index = () => {
  const [dropdownFlag, setDropdownflag] = useState(false);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return;
    } else {
      setDropdownflag(false);
    }
  };
  return (
    <HomeHeaderSection>
      <HeaderMenuItem>inbox</HeaderMenuItem>
      <HeaderMenuItem>draft</HeaderMenuItem>
      <HeaderMenuItem>sent</HeaderMenuItem>
      <HoDivider height={20} />
      <HeaderAvatar>
        <Image
          src={avatar}
          width="40px"
          onClick={() => setDropdownflag((prev) => !prev)}
          height="40px"
          objectFit="cover"
        />
        <AvatarDropDownSection isShow={dropdownFlag} ref={dropdownRef}>
          <UserInfo>
            <HeaderAvatar>
              <Image
                src={avatar}
                width="40px"
                height="40px"
                objectFit="cover"
              />
            </HeaderAvatar>
            <Info>
              <div className="name">Li Haoming</div>
              <div className="email">albinorabbithunter@gmali.com</div>
            </Info>
          </UserInfo>
          <VeDivider mg="10px 0" />
          <AvatarAction>
            <FaUserAlt />
            My Profile
          </AvatarAction>
          <AvatarAction
            onClick={() => {
              localStorage.setItem("isAuthenticated", "false");
              router.push("/");
            }}
          >
            <FaSignOutAlt />
            Log out
          </AvatarAction>
        </AvatarDropDownSection>
      </HeaderAvatar>
    </HomeHeaderSection>
  );
};

export default index;
