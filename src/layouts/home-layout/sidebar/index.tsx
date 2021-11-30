import React, { useEffect, useState } from "react";
import { RiFileEditFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { ImBook } from "react-icons/im";

import { Scrollbars } from "react-custom-scrollbars";

import Mark from "components/mark/Mark";
import {
  HomeSidebarSection,
  SidebarMark,
  SidebarMenu,
  SidebarMenuItem,
} from "./sidebar.style";
import router from "next/router";

const menudata = [
  {
    title: "Letter",
    icon: <RiFileEditFill />,
    path: "/letter",
  },
  {
    title: "Email",
    icon: <HiOutlineMail />,
    path: "/email",
  },
  {
    title: "Burnbook",
    icon: <ImBook />,
    path: "/burnbook",
  },
];

const index = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    setCurrentUrl(router.route);
  }, [router]);

  return (
    <HomeSidebarSection>
      <SidebarMark>
        <Mark onClick={() => router.push("/")} />
      </SidebarMark>

      <SidebarMenu>
        {menudata.map((item: any, key: any) => (
          <SidebarMenuItem
            active={currentUrl.indexOf(item.path) > -1 ? true : false}
            key={key}
            onClick={() => router.push(item.path)}
          >
            {item.icon}
            {item.title}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </HomeSidebarSection>
  );
};

export default index;
