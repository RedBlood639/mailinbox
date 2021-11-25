import React, { useEffect } from "react";
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

  return (
    <LayoutContainer className="bg-layout" fixed top={0}>
      <PageContainer>
        <HeaderBar id="header">
          <Mark />
          <MenuBar>
            <MenuItem>Welcome</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>How To</MenuItem>
            <HoDivider />
            <MenuItem>Sign in</MenuItem>
            <MenuItem>Sign up</MenuItem>
          </MenuBar>
        </HeaderBar>
      </PageContainer>
    </LayoutContainer>
  );
};

export default Header;
