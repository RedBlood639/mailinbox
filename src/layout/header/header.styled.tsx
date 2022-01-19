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
      background-color: red;
    }
  }
  .active {
    background-color: red;
    color: white !important;
  }
`;
