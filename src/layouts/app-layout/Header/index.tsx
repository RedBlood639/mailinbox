import React, { useEffect, useRef, useState } from "react";
import router from "next/router";
import {
  HoDivider,
  LayoutContainer,
  PageContainer,
} from "layouts/layout.style";
import { HeaderBar, MenuBar, MenuItem, scrollEvent } from "./Header.style";
import Mark from "components/mark/Mark";
import MenuButton from "components/Button/MenuButton";
import SideBar from "./SideBar";
import { isMobileView } from "utils/validation";
const Header = () => {
  const [state, setState] = useState({ mobileView: false, menuShow: false });
  const menuRef = useRef<any>(null);
  const { mobileView, menuShow } = state;

  useEffect(() => {
    const stateSetting = () => {
      setState((prev) => ({ ...prev, mobileView: isMobileView(850) }));
    };
    stateSetting();
    window.addEventListener("resize", stateSetting);
    document.addEventListener("scroll", scrollEvent);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", stateSetting);
      document.removeEventListener("scroll", scrollEvent);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (to: any) => {
    setTimeout(() => {
      if (to === "/") {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      router.push(to);
    }, 200);

    if (mobileView) {
      setState((prev) => ({ ...prev, menuShow: false }));
    }
  };

  const handleToggleMenu = () => {
    setState((prev) => ({ ...prev, menuShow: !prev.menuShow }));
  };

  const handleClickOutside = (e: any) => {
    if (menuRef.current && menuRef.current.contains(e.target)) {
      return;
    } else {
      setState((prev) => ({ ...prev, menuShow: false }));
    }
  };

  return (
    <LayoutContainer className="bg-layout" fixed top={0}>
      <PageContainer>
        <HeaderBar id="header">
          <Mark />
          {!mobileView ? (
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
              <HoDivider height={18} />
              <MenuItem onClick={() => handleMenuClick("/signin")}>
                Sign in
              </MenuItem>
              <MenuItem onClick={() => handleMenuClick("/signup")}>
                Sign up
              </MenuItem>
            </MenuBar>
          ) : (
            <MenuBar>
              <MenuButton onClick={handleToggleMenu} flag={menuShow} />
            </MenuBar>
          )}
        </HeaderBar>
      </PageContainer>
      {mobileView && (
        <SideBar
          menuRef={menuRef}
          flag={menuShow}
          onMenuClick={handleMenuClick}
        />
      )}
    </LayoutContainer>
  );
};

export default Header;
