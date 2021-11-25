import styled from "styled-components";

export const scrollEvent = () => {
  const scrollmove: any = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollmove.style.padding = "20px 0";
  } else {
    scrollmove.style.padding = "40px 0";
  }
};

export const HeaderBar = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;
  :hover {
    padding: 40px 0 !important;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;

export const MenuItem = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 16px;
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
