import React from "react";
import {
  HoDivider,
  LayoutContainer,
  PageContainer,
} from "layouts/layout.style";
import { HeaderBar, MenuBar, MenuItem } from "./Header.style";
import Mark from "components/mark/Mark";
const Header = () => {
  return (
    <LayoutContainer className="bg-layout" fixed top={0}>
      <PageContainer>
        <HeaderBar>
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
