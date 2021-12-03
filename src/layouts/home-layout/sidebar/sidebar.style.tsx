import styled from "styled-components";

export const HomeSidebarSection = styled.div`
  position: relative;
  height: 100vh;
  background: rgba(147, 0, 0);
  width: 200px;
  color: white;
  box-shadow: 0px 0px 10px rgb(82, 0, 0);
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  /* border-right: 2px solid white; */
`;

export const SidebarMark = styled.div`
  top: 0;
  position: absolute;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(147, 0, 0, 0.8);
  width: 100%;
  box-shadow: 0 0 5px rgb(80, 0, 0);
  transition: all 0.2s;
  :hover {
    box-shadow: 0 0 20px rgb(80, 0, 0);
  }
  /* border-bottom: 2px solid white; */
  /* border-right: 2px solid white; */
`;

export const SidebarMenu = styled.div`
  width: 100%;
  margin-top: 72px;
  height: calc(100vh - 72px);
  padding-top: 10px;
  overflow: auto;
`;

interface MenuItemProps {
  active?: boolean;
}

export const SidebarMenuItem = styled.div<MenuItemProps>`
  padding: 15px 20px;
  transition: 0.2s all;
  background-color: ${({ active }) =>
    active ? "rgba(82, 0, 0, 0.8)" : "transparent"};
  border-right: 5px solid ${({ active }) => (active ? "white" : "none")};
  :hover {
    background-color: ${({ active }) => !active && "rgba(82, 0, 0, 0.4)"};
    cursor: pointer;
  }
  :active {
    background-color: rgba(82, 0, 0, 0.8);
  }
  svg {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
`;
