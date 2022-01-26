import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: white;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  box-shadow: 0 0 5px black;
  z-index: 2;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    padding: 25px 20px;
    transition: all 0.2s;
    :hover {
      background-color: rgb(165, 32, 32);
      color: white;
    }
  }
  .active {
    background-color: rgb(206, 0, 0);
    color: white;
  }
`;

export const MyInfoDiv = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
  background-color: rgb(206, 0, 0);
  padding: 10px;
  border-radius: 50%;
  color: white;
  margin-left: 20px;
`;

export const LogDropDownDiv = styled.div<{ flag: boolean }>`
  position: absolute;
  background-color: white;
  right: 0;
  top: 70px;
  color: black;
  width: 290px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px #00000080;
  transform: ${({ flag }) => (flag ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top center;
  transition: all 0.2s;
`;

export const LogoutText = styled.div`
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  :hover {
    background-color: rgb(206, 0, 0);
    color: white;
  }
`;

export const LogoutDiv = styled.div`
  position: relative;
`;
