import Mark from "components/mark/Mark";

import React from "react";
import {
  MenuItem,
  SideBarMark,
  SideBarSection,
  SideBarAction,
  SideBarMenuSection,
} from "./Header.style";

const SideBar = ({ menuRef, onMenuClick, flag }: any) => {
  return (
    <SideBarSection flag={flag} ref={menuRef}>
      <SideBarMark>
        <Mark />
      </SideBarMark>
      <SideBarMenuSection>
        <SideBarAction>
          <div>
            <MenuItem onClick={() => onMenuClick("/")}>Welcome</MenuItem>
          </div>
          <div>
            <MenuItem onClick={() => onMenuClick("/#howto")}>How To</MenuItem>
          </div>
          <div>
            <MenuItem onClick={() => onMenuClick("/#about")}>About</MenuItem>
          </div>
          <div>
            <MenuItem onClick={() => onMenuClick("/#contact")}>
              Contact
            </MenuItem>
          </div>
        </SideBarAction>
        <SideBarAction>
          <div>
            <MenuItem onClick={() => onMenuClick("/signin")}>Sign in</MenuItem>
          </div>
          <div>
            <MenuItem onClick={() => onMenuClick("/signup")}>Sign up</MenuItem>
          </div>
        </SideBarAction>
      </SideBarMenuSection>
    </SideBarSection>
  );
};

export default SideBar;
