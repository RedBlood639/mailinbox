import styled from "styled-components";

export const HomeHeaderSection = styled.div`
  height: 70px;
  border-bottom: 2px solid rgb(10, 25, 41);
  width: calc(100% - 100px);
  padding: 0 50px;
  background: rgb(0, 30, 60);
  display: flex;
  align-items: center;
  color: white;
  box-shadow: 0 0 10px rgb(0, 30, 60);
  position: absolute;
  top: 0;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

export const HeaderMenuItem = styled.div`
  background-color: rgb(0, 30, 60);
  border: 2px solid rgb(23, 58, 94);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

export const HeaderAvatar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.08);
  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

interface DropDownProps {
  isShow?: boolean;
}

export const AvatarDropDownSection = styled.div<DropDownProps>`
  max-width: 320px;
  position: absolute;
  background-color: rgb(0, 30, 60);
  border: 2px solid rgb(23, 58, 94);
  top: 60px;
  right: 0;
  z-index: 10;
  transition: 0.2s ease;
  transform: scaleY(${({ isShow }) => (isShow ? "1" : "0")});
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transform-origin: top center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .email {
    font-size: 16px;
    color: lightgrey;
  }
  .name {
    font-size: 18px;
  }
`;

export const AvatarAction = styled.div`
  padding: 10px 0;
  font-size: 18px;
  svg {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
`;
