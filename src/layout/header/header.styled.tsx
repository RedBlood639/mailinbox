import styled from "styled-components";

export const HeaderDiv = styled.div`
  background-color: white;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 5%;
  box-shadow: 0 0 5px black;
  z-index: 2;
`;

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: 35px;
  }
`;
