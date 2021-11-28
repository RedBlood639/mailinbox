import styled from "styled-components";

import { Props } from "layouts/layout.style";

export const scrollEvent = () => {
  const scrollmove: any = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollmove.style.padding = "15px 0";
  } else {
    scrollmove.style.padding = "25px 0";
  }
};

export const HeaderBar = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  :hover {
    padding: 25px 0 !important;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;

export const MenuItem = styled.div<Props>`
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${({ fSize }) => (fSize ? fSize + "px" : "16px")};
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: white;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    color: #c0c0c0;
    ::after {
      transform: scaleX(1);
    }
  }
`;

interface SidebarProps {
  flag: boolean;
}

export const SideBarSection = styled.div<SidebarProps>`
  ${({ flag }) => (!flag ? "left: -325px" : "left: 0")};
  transition: all 0.2s;
  max-width: 320px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px rgba(90, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SideBarMark = styled.div`
  margin: 50px auto;
`;

export const SideBarMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  width: 60%;
`;

export const SideBarAction = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
  padding-bottom: 50px;
  div {
    div {
      font-size: 20px !important;
    }
  }
`;
