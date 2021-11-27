import React from "react";
import styled from "styled-components";

const MenuButton = ({ onClick, flag }: any) => {
  return (
    <MenuIcon>
      <div
        className={`container ${flag ? "change" : ""}`}
        id="menu-icon"
        onClick={onClick}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </MenuIcon>
  );
};

export default MenuButton;

const MenuIcon = styled.div`
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.2s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;
