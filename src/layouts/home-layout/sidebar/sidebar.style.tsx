import styled from "styled-components";
import Color from "theme/colors";

export const HomeSidebarSection = styled.div`
  position: relative;
  height: 100vh;
  background: ${Color.blue.dark};
  width: 170px;
  color: white;
  box-shadow: rgb(19 47 76) 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarMark = styled.div`
  top: 0;
  position: absolute;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid rgb(0, 30, 60);
`;

export const SidebarMenu = styled.div`
  width: 100%;
  margin-top: 72px;
  height: calc(100vh - 72px);
  padding-top: 10px;
`;

interface MenuItemProps {
  active?: boolean;
}

export const SidebarMenuItem = styled.div<MenuItemProps>`
  padding: 15px 20px;
  transition: 0.2s all;
  background-color: ${({ active }) =>
    active ? "rgb(19, 47, 76)" : "transparent"};
  border-right: 5px solid
    ${({ active }) => (active ? "rgb(100, 119, 138)" : "none")};
  :hover {
    background-color: ${({ active }) => !active && "rgba(19, 47, 76, 0.4)"};
    cursor: pointer;
  }
  :active {
    background-color: rgb(19, 47, 76);
  }
  svg {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
`;
