import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import {
  AvatarAction,
  AvatarDropDownSection,
  HeaderAvatar,
  HeaderMenu,
  HeaderMenuItem,
  HomeHeaderSection,
  Info,
  UserInfo,
} from "./header.style";

import { VeDivider } from "layouts/layout.style";

import avatar from "assets/images/members/3.jpg";
import router from "next/router";

const letterHeader = [
  {
    title: "My Letters",
    path: "/letter",
  },
  {
    title: "Read Public Letters",
    path: "/letter/public",
  },
  // {
  //   title: "Draft",
  //   path: "/letter/draft",
  // },
];

const emailHeader = [
  {
    title: "New",
    path: "/email/new",
  },
  {
    title: "Inbox",
    path: "/email/inbox",
  },
  {
    title: "Sent",
    path: "/email/sent",
  },
  {
    title: "Draft",
    path: "/email/draft",
  },
];

const burnbookHeader = [
  {
    title: "New",
    path: "/burnbook/new",
  },
];

const index = () => {
  const [dropdownFlag, setDropdownflag] = useState(false);
  const dropdownRef = useRef<any>(null);

  const [headerData, setHeaderData] = useState<any>([]);

  useEffect(() => {
    if (router.route.indexOf("/letter") > -1) {
      setHeaderData(letterHeader);
    } else if (router.route.indexOf("/email") > -1) {
      setHeaderData(emailHeader);
    } else if (router.route.indexOf("/burnbook") > -1) {
      setHeaderData(burnbookHeader);
    } else {
      setHeaderData([]);
    }
  }, [router]);

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
      <HeaderMenu>
        {headerData.map((item: any, key: any) => (
          <HeaderMenuItem key={key} onClick={() => router.push(item.path)}>
            {item.title}
          </HeaderMenuItem>
        ))}
      </HeaderMenu>
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
