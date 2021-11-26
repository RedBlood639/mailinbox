import React, { useEffect } from "react";
import router, { useRouter } from "next/router";
import {
  HoDivider,
  LayoutContainer,
  PageContainer,
} from "layouts/layout.style";
import { HeaderBar, MenuBar, MenuItem, scrollEvent } from "./Header.style";
import Mark from "components/mark/Mark";
const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
  }, []);

  const handleMenuClick = (to: any) => {
    console.log(window.scrollY);
    router.push(to);
  };

  return (
    <LayoutContainer className="bg-layout" fixed top={0}>
      <PageContainer>
        <HeaderBar id="header">
          <Mark />
          <MenuBar>
            <MenuItem onClick={() => handleMenuClick("/")}>Welcome</MenuItem>
            <MenuItem onClick={() => handleMenuClick("/#howto")}>
              How To
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/#about")}>
              About
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/#contact")}>
              Contact
            </MenuItem>
            <HoDivider />
            <MenuItem onClick={() => handleMenuClick("/signin")}>
              Sign in
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick("/signup")}>
              Sign up
            </MenuItem>
          </MenuBar>
        </HeaderBar>
      </PageContainer>
    </LayoutContainer>
  );
};

export default Header;
